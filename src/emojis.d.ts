/**
 * @license Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */
/**
 * @module emojis/emojis
 */
import { Plugin, type Editor } from 'ckeditor5/src/core.js';
import { Typing } from 'ckeditor5/src/typing.js';
import '../theme/emojis.css';
/**
 * The emojis feature.
 *
 * Introduces the `'emojis'` dropdown.
 */
export default class Emojis extends Plugin {
    /**
     * Registered characters. A pair of a character name and its symbol.
     */
    private _characters;
    /**
     * Registered groups. Each group contains a displayed label and a collection with symbol names.
     */
    private _groups;
    /**
     * A label describing the "All" emojis category.
     */
    private _allEmojisGroupLabel;
    /**
     * @inheritDoc
     */
    static get requires(): readonly [typeof Typing];
    /**
     * @inheritDoc
     */
    static get pluginName(): "Emojis";
    /**
     * @inheritDoc
     */
    constructor(editor: Editor);
    /**
     * @inheritDoc
     */
    init(): void;
    /**
     * Adds a collection of emojis to the specified group. The title of an emoji must be unique.
     *
     * **Note:** The "All" category name is reserved by the plugin and cannot be used as a new name for an emoji category.
     */
    addItems(groupName: string, items: Array<EmojiDefinition>, options?: {
        label: string;
    }): void;
    /**
     * Returns emojis groups in an order determined based on configuration and registration sequence.
     */
    getGroups(): Set<string>;
    /**
     * Returns a collection of emoji symbol names (titles).
     */
    getCharactersForGroup(groupName: string): Set<string> | undefined;
    /**
     * Returns the symbol of an emoji for the specified name. If the emoji could not be found, `undefined`
     * is returned.
     *
     * @param title The title of an emoji.
     */
    getCharacter(title: string): string | undefined;
    /**
     * Returns a group of emojis. If the group with the specified name does not exist, it will be created.
     *
     * @param groupName The name of the group to create.
     * @param label The label describing the new group.
     */
    private _getGroup;
    /**
     * Updates the symbol grid depending on the currently selected character group.
     */
    private _updateGrid;
    /**
     * Initializes the dropdown, used for lazy loading.
     *
     * @returns An object with `navigationView`, `gridView` and `infoView` properties, containing UI parts.
     */
    private _createDropdownPanelContent;
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
