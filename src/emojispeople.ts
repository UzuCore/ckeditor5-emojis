/**
 * @license Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */
/**
 * @module emojis/emojispeople
 */
import { Plugin } from 'ckeditor5/src/core.js';
import type Emojis from './emojis.js';

/**
 * A plugin that provides special characters for the "People" category.
 *
 * ```ts
 * ClassicEditor
 *   .create( {
 *     plugins: [ ..., Emojis, EmojisPeople ],
 *   } )
 *   .then( ... )
 *   .catch( ... );
 * ```
 */
export default class EmojisPeople extends Plugin {
    /**
     * @inheritDoc
     */
    public static get pluginName() {
        return 'EmojisPeople' as const;
    }
    /**
     * @inheritDoc
     */
    public init(): void {
        const editor = this.editor;
        const t = editor.t;
        const plugin: Emojis = editor.plugins.get('Emojis');

        plugin.addItems('People', [
            { character: '😀', title: 'Grinning Face' },
            { character: '😃', title: 'Grinning Face with Big Eyes' },
            { character: '😄', title: 'Grinning Face with Smiling Eyes' },
            { character: '😁', title: 'Beaming Face with Smiling Eyes' },
            { character: '😆', title: 'Grinning Squinting Face' },
            { character: '😅', title: 'Grinning Face with Sweat' },
            { character: '🤣', title: 'Rolling on the Floor Laughing' },
            { character: '😂', title: 'Face with Tears of Joy' },
            { character: '🙂', title: 'Slightly Smiling Face' },
            { character: '🙃', title: 'Upside-Down Face' },
            { character: '😉', title: 'Winking Face' },
            { character: '😊', title: 'Smiling Face with Smiling Eyes' },
            { character: '😇', title: 'Smiling Face with Halo' },
            { character: '🥰', title: 'Smiling Face with Hearts' },
            { character: '😍', title: 'Smiling Face with Heart-Eyes' },
            { character: '🤩', title: 'Star-Struck' },
            { character: '😘', title: 'Face Blowing a Kiss' },
            { character: '😗', title: 'Kissing Face' },
            { character: '☺️', title: 'Smiling Face' },
            { character: '😚', title: 'Kissing Face with Closed Eyes' },
            { character: '😙', title: 'Kissing Face with Smiling Eyes' },
            { character: '🥲', title: 'Smiling Face with Tear' },
            { character: '😋', title: 'Face Savoring Food' },
            { character: '😛', title: 'Face with Tongue' },
            { character: '😜', title: 'Winking Face with Tongue' },
            { character: '🤪', title: 'Zany Face' },
            { character: '😝', title: 'Squinting Face with Tongue' },
            { character: '🤑', title: 'Money-Mouth Face' },
            { character: '🤗', title: 'Hugging Face' },
            { character: '🤭', title: 'Face with Hand Over Mouth' },
            { character: '🤫', title: 'Shushing Face' },
            { character: '🤔', title: 'Thinking Face' },
            { character: '🤐', title: 'Zipper-Mouth Face' },
            { character: '🤨', title: 'Face with Raised Eyebrow' },
            { character: '😐', title: 'Neutral Face' },
            { character: '😑', title: 'Expressionless Face' },
            { character: '😶', title: 'Face Without Mouth' },
            { character: '😏', title: 'Smirking Face' },
            { character: '😒', title: 'Unamused Face' },
            { character: '🙄', title: 'Face with Rolling Eyes' },
            { character: '😬', title: 'Grimacing Face' },
            { character: '🤥', title: 'Lying Face' },
            { character: '😌', title: 'Relieved Face' },
            { character: '😔', title: 'Pensive Face' },
            { character: '😪', title: 'Sleepy Face' },
            { character: '🤤', title: 'Drooling Face' },
            { character: '😴', title: 'Sleeping Face' },
            { character: '😷', title: 'Face with Medical Mask' },
            { character: '🤒', title: 'Face with Thermometer' },
            { character: '🤕', title: 'Face with Head-Bandage' },
            { character: '🤢', title: 'Nauseated Face' },
            { character: '🤮', title: 'Face Vomiting' },
            { character: '🤧', title: 'Sneezing Face' },
            { character: '🥵', title: 'Hot Face' },
            { character: '🥶', title: 'Cold Face' },
            { character: '🥴', title: 'Woozy Face' },
            { character: '😵', title: 'Dizzy Face' },
            { character: '🤯', title: 'Exploding Head' },
            { character: '🤠', title: 'Cowboy Hat Face' },
            { character: '🥳', title: 'Partying Face' },
            { character: '🥸', title: 'Disguised Face' },
            { character: '😎', title: 'Smiling Face with Sunglasses' },
            { character: '🤓', title: 'Nerd Face' },
            { character: '🧐', title: 'Face with Monocle' },
            { character: '😕', title: 'Confused Face' },
            { character: '😟', title: 'Worried Face' },
            { character: '🙁', title: 'Slightly Frowning Face' },
            { character: '☹️', title: 'Frowning Face' },
            { character: '😮', title: 'Face with Open Mouth' },
            { character: '😯', title: 'Hushed Face' },
            { character: '😲', title: 'Astonished Face' },
            { character: '😳', title: 'Flushed Face' },
            { character: '🥺', title: 'Pleading Face' },
            { character: '😦', title: 'Frowning Face with Open Mouth' },
            { character: '😧', title: 'Anguished Face' },
            { character: '😨', title: 'Fearful Face' },
            { character: '😰', title: 'Anxious Face with Sweat' },
            { character: '😥', title: 'Sad but Relieved Face' },
            { character: '😢', title: 'Crying Face' },
            { character: '😭', title: 'Loudly Crying Face' },
            { character: '😱', title: 'Face Screaming in Fear' },
            { character: '😖', title: 'Confounded Face' },
            { character: '😣', title: 'Persevering Face' },
            { character: '😞', title: 'Disappointed Face' },
            { character: '😓', title: 'Downcast Face with Sweat' },
            { character: '😩', title: 'Weary Face' },
            { character: '😫', title: 'Tired Face' },
            { character: '🥱', title: 'Yawning Face' },
            { character: '😤', title: 'Face with Steam From Nose' },
            { character: '😡', title: 'Pouting Face' },
            { character: '😠', title: 'Angry Face' },
            { character: '🤬', title: 'Face with Symbols on Mouth' },
            { character: '😈', title: 'Smiling Face with Horns' },
            { character: '👿', title: 'Angry Face with Horns' },
            { character: '💀', title: 'Skull' },
            { character: '☠️', title: 'Skull and Crossbones' },
            { character: '💩', title: 'Pile of Poo' },
            { character: '🤡', title: 'Clown Face' },
            { character: '👹', title: 'Ogre' },
            { character: '👺', title: 'Goblin' },
            { character: '👻', title: 'Ghost' },
            { character: '👽', title: 'Alien' },
            { character: '👾', title: 'Alien Monster' },
            { character: '🤖', title: 'Robot' },
            { character: '😺', title: 'Grinning Cat' },
            { character: '😸', title: 'Grinning Cat with Smiling Eyes' },
            { character: '😹', title: 'Cat with Tears of Joy' },
            { character: '😻', title: 'Smiling Cat with Heart-Eyes' },
            { character: '😼', title: 'Cat with Wry Smile' },
            { character: '😽', title: 'Kissing Cat' },
            { character: '🙀', title: 'Weary Cat' },
            { character: '😿', title: 'Crying Cat' },
            { character: '😾', title: 'Pouting Cat' }
        ], { label: '😀 ' + t('People') });
    }
}
