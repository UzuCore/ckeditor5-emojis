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

export default class Emojis extends Plugin {
    private _characters: Map<string, string>;
    private _groups: Map<string, Group>;
    private _allEmojisGroupLabel: string;

    public static get requires() {
        return [ Typing ] as const;
    }

    public static get pluginName() {
        return 'Emojis' as const;
    }

    constructor( editor: Editor ) {
        super( editor );

        this._characters = new Map();
        this._groups = new Map();

        // ✅ 하드코딩된 한글 라벨로 초기화
        this._allEmojisGroupLabel = '전체';
    }

    public init(): void {
        const editor = this.editor;
        const inputCommand: InsertTextCommand = editor.commands.get( 'insertText' )!;

        editor.ui.componentFactory.add( 'emojis', locale => {
            const dropdownView = createDropdown( locale );
            let dropdownPanelContent: DropdownPanelContent;

            dropdownView.buttonView.set( {
                label: '이모지',
                icon: EmojisIcon,
                tooltip: true
            } );

            dropdownView.bind( 'isEnabled' ).to( inputCommand );

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

    public addItems(
        groupName: string,
        items: Array<EmojiDefinition>,
        options: { label: string } = { label: groupName }
    ): void {
        if ( groupName === ALL_EMOJIS_GROUP ) {
            throw new CKEditorError( 'emoji-invalid-group-name', null );
        }

        const group = this._getGroup( groupName, options.label )!;
        for ( const item of items ) {
            group.items.add( item.title );
            this._characters.set( item.title, item.character );
        }
    }

    public getGroups(): Set<string> {
        const groups = Array.from( this._groups.keys() );
        const order = this.editor.config.get( 'emojis.order' ) || [];

        const invalidGroup = order.find( item => !groups.includes( item ) );
        if ( invalidGroup ) {
            throw new CKEditorError( 'emoji-invalid-order-group-name', null, { invalidGroup } );
        }

        return new Set( [
            ...order,
            ...groups
        ] );
    }

    public getCharactersForGroup( groupName: string ): Set<string> | undefined {
        if ( groupName === ALL_EMOJIS_GROUP ) {
            return new Set( this._characters.keys() );
        }

        const group = this._groups.get( groupName );
        return group?.items;
    }

    public getCharacter( title: string ): string | undefined {
        return this._characters.get( title );
    }

    private _getGroup( groupName: string, label: string ): Group | undefined {
        if ( !this._groups.has( groupName ) ) {
            this._groups.set( groupName, {
                items: new Set(),
                label
            } );
        }

        return this._groups.get( groupName );
    }

    private _updateGrid( currentGroupName: string, gridView: CharacterGridView ): void {
        gridView.tiles.clear();

        const characterTitles = this.getCharactersForGroup( currentGroupName )!;
        for ( const title of characterTitles ) {
            const character = this.getCharacter( title )!;
            gridView.tiles.add( gridView.createTile( character, title ) );
        }
    }

    private _createDropdownPanelContent( locale: Locale, dropdownView: DropdownView ): DropdownPanelContent {
        const translations: Record<string, string> = {
            'All': '전체',
            'People': '사람',
            'Nature': '자연',
            'Places': '장소',
            'Food': '음식',
            'Activities': '활동',
            'Objects': '사물',
            'Symbols': '기호',
            'Flags': '국기'
        };

        const groupEntries: Array<[ string, string ]> = Array
            .from( this.getGroups() )
            .map( name => [ name, this._groups.get( name )!.label ] );

        const specialEmojisGroups: Map<string, string> = new Map<string, string>( [
	    [ ALL_EMOJIS_GROUP, translations['All'] ],
	    ...groupEntries.map(
		([name, label]) => [ name, translations[name] || label ] as [string, string]
	    )
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

        navigationView.on( 'execute', () => {
            this._updateGrid( navigationView.currentGroupName, gridView );
        } );

        this._updateGrid( navigationView.currentGroupName, gridView );

        return { navigationView, gridView, infoView };
    }
}

export interface EmojiDefinition {
    title: string;
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
