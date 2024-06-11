/**
 * @license Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * @module emojis/emojis
 */

import { Plugin, type Editor } from 'ckeditor5/src/core.js';
import { Typing, type InsertTextCommand } from 'ckeditor5/src/typing.js';
import { createDropdown, type DropdownView } from 'ckeditor5/src/ui.js';
import { CKEditorError, type Locale } from 'ckeditor5/src/utils.js';
import EmojisNavigationView from './ui/emojisnavigationview.js';
import CharacterGridView, {
    type CharacterGridViewExecuteEvent,
    type CharacterGridViewTileFocusEvent,
    type CharacterGridViewTileHoverEvent
} from './ui/charactergridview.js';
import CharacterInfoView from './ui/characterinfoview.js';
import EmojisView from './ui/emojisview.js';

import EmojisIcon from '../theme/icons/emojis.svg';

import '../theme/emojis.css';

const ALL_EMOJIS_GROUP = 'All';

/**
 * The emojis feature.
 *
 * Introduces the `'emojis'` dropdown.
 */
export default class Emojis extends Plugin {
    /**
     * Registered characters. A pair of a character name and its symbol.
     */
    private _characters: Map<string, string>;

    /**
     * Registered groups. Each group contains a displayed label and a collection with symbol names.
     */
    private _groups: Map<string, Group>;

    /**
     * A label describing the "All" emojis category.
     */
    private _allEmojisGroupLabel: string;

    /**
     * @inheritDoc
     */
    public static get requires() {
        return [ Typing ] as const;
    }

    /**
     * @inheritDoc
     */
    public static get pluginName() {
        return 'Emojis' as const;
    }

    /**
     * @inheritDoc
     */
    constructor( editor: Editor ) {
        super( editor );

        const t = editor.t;

        this._characters = new Map();
        this._groups = new Map();
        this._allEmojisGroupLabel = t( 'All' );
    }

    /**
     * @inheritDoc
     */
    public init(): void {
        const editor = this.editor;
        const t = editor.t;

        const inputCommand: InsertTextCommand = editor.commands.get( 'insertText' )!;

        // Add the `emojis` dropdown button to feature components.
        editor.ui.componentFactory.add( 'emojis', locale => {
            const dropdownView = createDropdown( locale );
            let dropdownPanelContent: DropdownPanelContent;

            dropdownView.buttonView.set( {
                label: t( 'Emojis' ),
                icon: EmojisIcon,
                tooltip: true
            } );

            dropdownView.bind( 'isEnabled' ).to( inputCommand );

            // Insert an emoji when a tile was clicked.
            dropdownView.on<CharacterGridViewExecuteEvent>( 'execute', ( evt, data ) => {
                editor.execute( 'insertText', { text: data.character } );
                editor.editing.view.focus();
            } );

            dropdownView.on( 'change:isOpen', () => {
                if ( !dropdownPanelContent ) {
                    dropdownPanelContent = this._createDropdownPanelContent( locale, dropdownView );

                    const emojisView = new EmojisView(
                        locale,
                        dropdownPanelContent.navigationView,
                        dropdownPanelContent.gridView,
                        dropdownPanelContent.infoView
                    );

                    dropdownView.panelView.children.add( emojisView );
                }

                dropdownPanelContent.infoView.set( {
                    character: null,
                    name: null
                } );
            } );

            return dropdownView;
        } );
    }

    /**
     * Adds a collection of emojis to the specified group. The title of an emoji must be unique.
     *
     * **Note:** The "All" category name is reserved by the plugin and cannot be used as a new name for an emoji category.
     */
    public addItems(
        groupName: string,
        items: Array<EmojiDefinition>,
        options: { label: string } = { label: groupName }
    ): void {
        if ( groupName === ALL_EMOJIS_GROUP ) {
            /**
             * The name "All" for a special category group cannot be used because it is a special category that displays all
             * available emojis.
             *
             * @error emoji-invalid-group-name
             */
            throw new CKEditorError( 'emoji-invalid-group-name', null );
        }

        const group = this._getGroup( groupName, options.label )!;

        for ( const item of items ) {
            group.items.add( item.title );
            this._characters.set( item.title, item.character );
        }
    }

    /**
     * Returns emojis groups in an order determined based on configuration and registration sequence.
     */
    public getGroups(): Set<string> {
        const groups = Array.from( this._groups.keys() );
        const order = this.editor.config.get( 'emojis.order' ) || [];

        const invalidGroup = order.find( item => !groups.includes( item ) );

        if ( invalidGroup ) {
            /**
             * One of the emoji groups in the "emojis.order" configuration doesn't exist.
             *
             * @error emoji-invalid-order-group-name
             */
            throw new CKEditorError( 'emoji-invalid-order-group-name', null, { invalidGroup } );
        }

        return new Set( [
            ...order,
            ...groups
        ] );
    }

    /**
     * Returns a collection of emoji symbol names (titles).
     */
    public getCharactersForGroup( groupName: string ): Set<string> | undefined {
        if ( groupName === ALL_EMOJIS_GROUP ) {
            return new Set( this._characters.keys() );
        }

        const group = this._groups.get( groupName );

        if ( group ) {
            return group.items;
        }
    }

    /**
     * Returns the symbol of an emoji for the specified name. If the emoji could not be found, `undefined`
     * is returned.
     *
     * @param title The title of an emoji.
     */
    public getCharacter( title: string ): string | undefined {
        return this._characters.get( title );
    }

    /**
     * Returns a group of emojis. If the group with the specified name does not exist, it will be created.
     *
     * @param groupName The name of the group to create.
     * @param label The label describing the new group.
     */
    private _getGroup( groupName: string, label: string ): Group | undefined {
        if ( !this._groups.has( groupName ) ) {
            this._groups.set( groupName, {
                items: new Set(),
                label
            } );
        }

        return this._groups.get( groupName );
    }

    /**
     * Updates the symbol grid depending on the currently selected character group.
     */
    private _updateGrid( currentGroupName: string, gridView: CharacterGridView ): void {
        // Updating the grid starts with removing all tiles belonging to the old group.
        gridView.tiles.clear();

        const characterTitles = this.getCharactersForGroup( currentGroupName )!;

        for ( const title of characterTitles ) {
            const character = this.getCharacter( title )!;

            gridView.tiles.add( gridView.createTile( character, title ) );
        }
    }

    /**
     * Initializes the dropdown, used for lazy loading.
     *
     * @returns An object with `navigationView`, `gridView` and `infoView` properties, containing UI parts.
     */
    private _createDropdownPanelContent( locale: Locale, dropdownView: DropdownView ): DropdownPanelContent {
        const groupEntries: Array<[ string, string ]> = Array
            .from( this.getGroups() )
            .map( name => ( [ name, this._groups.get( name )!.label ] ) );

        // The map contains a name of category (an identifier) and its label (a translational string).
        const specialEmojisGroups: Map<string, string> = new Map( [
            // Add a special group that shows all available emojis.
            [ ALL_EMOJIS_GROUP, this._allEmojisGroupLabel ],
            ...groupEntries
        ] );

        const navigationView = new EmojisNavigationView( locale, specialEmojisGroups );
        const gridView = new CharacterGridView( locale );
        const infoView = new CharacterInfoView( locale );

        gridView.delegate( 'execute' ).to( dropdownView );

        gridView.on<CharacterGridViewTileHoverEvent>( 'tileHover', ( evt, data ) => {
            infoView.set( data );
        } );

        gridView.on<CharacterGridViewTileFocusEvent>( 'tileFocus', ( evt, data ) => {
            infoView.set( data );
        } );

        // Update the grid of emojis when a user changed the character group.
        navigationView.on( 'execute', () => {
            this._updateGrid( navigationView.currentGroupName, gridView );
        } );

        // Set the initial content of the emojis grid.
        this._updateGrid( navigationView.currentGroupName, gridView );

        return { navigationView, gridView, infoView };
    }
}

export interface EmojiDefinition {

    /**
     * A unique name of the character (e.g. "greek small letter epsilon").
     */
    title: string;

    /**
     * A human-readable character displayed as the label (e.g. "ε").
     */
    character: string;
}

interface Group {
    label: string;
    items: Set<string>;
}

interface DropdownPanelContent {
    navigationView: EmojisNavigationView;
    gridView: CharacterGridView;
    infoView: CharacterInfoView;
}
