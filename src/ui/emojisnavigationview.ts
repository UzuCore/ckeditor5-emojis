/**
 * @license Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * @module emojis/ui/emojisnavigationview
 */

import { Collection, type Locale } from 'ckeditor5/src/utils.js';
import {
    addListToDropdown,
    createDropdown,
    ViewModel,
    FormHeaderView,
    type DropdownView,
    type ListDropdownButtonDefinition
} from 'ckeditor5/src/ui.js';

/**
 * A class representing the navigation part of the emojis UI. It is responsible
 * for describing the feature and allowing the user to select a particular emoji group.
 */
export default class EmojisNavigationView extends FormHeaderView {
    /**
     * A dropdown that allows selecting a group of emojis to be displayed.
     */
    public groupDropdownView: GroupDropdownView;

    /**
     * Creates an instance of the {@link module:emojis/ui/EmojisNavigationView~EmojisNavigationView}
     * class.
     *
     * @param locale The localization services instance.
     * @param groupNames The names of the emoji groups and their displayed labels.
     */
    constructor( locale: Locale, groupNames: GroupNames ) {
        super( locale );

        const t = locale.t;

        this.set( 'class', 'ck-emoji-navigation' );
        this.groupDropdownView = this._createGroupDropdown( groupNames );
        this.groupDropdownView.panelPosition = locale.uiLanguageDirection === 'rtl' ? 'se' : 'sw';
        this.label = t( '이모지' );
        this.children.add( this.groupDropdownView );
    }

    /**
     * Returns the name of the emoji group currently selected in the {@link #groupDropdownView}.
     */
    public get currentGroupName(): string {
        return this.groupDropdownView.value;
    }

    /**
     * Focuses the emoji categories dropdown.
     */
    public focus(): void {
        this.groupDropdownView.focus();
    }

    /**
     * Returns a dropdown that allows selecting emoji groups.
     *
     * @param groupNames The names of the emoji groups and their displayed labels.
     */
    private _createGroupDropdown( groupNames: GroupNames ): GroupDropdownView {
        const locale = this.locale;
        const t = locale!.t;
        const dropdown = createDropdown( locale ) as GroupDropdownView;
        const groupDefinitions = this._getEmojiGroupListItemDefinitions( dropdown, groupNames );
        const accessibleLabel = t( '이모지 카테고리' );

        dropdown.set( 'value', groupDefinitions.first!.model.name as string );

        dropdown.buttonView.bind( 'label' ).to( dropdown, 'value', value => groupNames.get( value ) );

        dropdown.buttonView.set( {
            isOn: false,
            withText: true,
            tooltip: accessibleLabel,
            class: [ 'ck-dropdown__button_label-width_auto' ],
            ariaLabel: accessibleLabel,
            ariaLabelledBy: undefined
        } );

        dropdown.on( 'execute', evt => {
            dropdown.value = ( evt.source as ViewModel ).name as string;
        } );

        dropdown.delegate( 'execute' ).to( this );

        addListToDropdown( dropdown, groupDefinitions, {
            ariaLabel: accessibleLabel,
            role: 'menu'
        } );

        return dropdown;
    }

    /**
     * Returns list item definitions to be used in the emoji group dropdown
     * representing specific emoji groups.
     *
     * @param dropdown Dropdown view element
     * @param groupNames The names of the emoji groups and their displayed labels.
     */
    private _getEmojiGroupListItemDefinitions(
        dropdown: GroupDropdownView,
        groupNames: GroupNames
    ): Collection<ListDropdownButtonDefinition> {
        const groupDefs = new Collection<ListDropdownButtonDefinition>();

        for ( const [ name, label ] of groupNames ) {
            const model = new ViewModel( {
                name,
                label,
                withText: true,
                role: 'menuitemradio'
            } );

            model.bind( 'isOn' ).to( dropdown, 'value', value => value === model.name );

            groupDefs.add( { type: 'button', model } );
        }

        return groupDefs;
    }
}

/**
 * The names of the emoji groups and their displayed labels.
 */
export type GroupNames = Map<string, string>;

/**
 * `DropdownView` with additional field for the name of the currectly selected emoji group.
 */
export type GroupDropdownView = DropdownView & { value: string };
