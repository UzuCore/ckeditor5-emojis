/**
 * @license Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */
/**
 * @module emojis/emojisfood
 */
import { Plugin } from 'ckeditor5/src/core.js';
import type Emojis from './emojis.js';

/**
 * A plugin that provides special characters for the "Food" category.
 *
 * ```ts
 * ClassicEditor
 *   .create( {
 *     plugins: [ ..., Emojis, EmojisFood ],
 *   } )
 *   .then( ... )
 *   .catch( ... );
 * ```
 */
export default class EmojisFood extends Plugin {
    /**
     * @inheritDoc
     */
    public static get pluginName() {
        return 'EmojisFood' as const;
    }
    /**
     * @inheritDoc
     */
    public init(): void {
        const editor = this.editor;
        const t = editor.t;
        const plugin: Emojis = editor.plugins.get('Emojis');

        plugin.addItems('Food', [
            { character: '🍎', title: t('Red Apple') },
            { character: '🍇', title: t('Grapes') },
            { character: '🍈', title: t('Melon') },
            { character: '🍉', title: t('Watermelon') },
            { character: '🍊', title: t('Tangerine') },
            { character: '🍋', title: t('Lemon') },
            { character: '🍌', title: t('Banana') },
            { character: '🍍', title: t('Pineapple') },
            { character: '🥭', title: t('Mango') },
            { character: '🍎', title: t('Red Apple') },
            { character: '🍏', title: t('Green Apple') },
            { character: '🍐', title: t('Pear') },
            { character: '🍑', title: t('Peach') },
            { character: '🍒', title: t('Cherries') },
            { character: '🍓', title: t('Strawberry') },
            { character: '🫐', title: t('Blueberries') },
            { character: '🥝', title: t('Kiwi Fruit') },
            { character: '🍅', title: t('Tomato') },
            { character: '🫒', title: t('Olive') },
            { character: '🥥', title: t('Coconut') },
            { character: '🥑', title: t('Avocado') },
            { character: '🍆', title: t('Eggplant') },
            { character: '🥔', title: t('Potato') },
            { character: '🥕', title: t('Carrot') },
            { character: '🌽', title: t('Ear of Corn') },
            { character: '🌶️', title: t('Hot Pepper') },
            { character: '🫑', title: t('Bell Pepper') },
            { character: '🥒', title: t('Cucumber') },
            { character: '🥬', title: t('Leafy Green') },
            { character: '🥦', title: t('Broccoli') },
            { character: '🧄', title: t('Garlic') },
            { character: '🧅', title: t('Onion') },
            { character: '🍄', title: t('Mushroom') },
            { character: '🥜', title: t('Peanuts') },
            { character: '🌰', title: t('Chestnut') },
            { character: '🍞', title: t('Bread') },
            { character: '🥐', title: t('Croissant') },
            { character: '🥖', title: t('Baguette Bread') },
            { character: '🫓', title: t('Flatbread') },
            { character: '🥨', title: t('Pretzel') },
            { character: '🥯', title: t('Bagel') },
            { character: '🥞', title: t('Pancakes') },
            { character: '🧇', title: t('Waffle') },
            { character: '🧀', title: t('Cheese Wedge') },
            { character: '🍖', title: t('Meat on Bone') },
            { character: '🍗', title: t('Poultry Leg') },
            { character: '🥩', title: t('Cut of Meat') },
            { character: '🥓', title: t('Bacon') },
            { character: '🍔', title: t('Hamburger') },
            { character: '🍟', title: t('French Fries') },
            { character: '🍕', title: t('Pizza') },
            { character: '🌭', title: t('Hot Dog') },
            { character: '🥪', title: t('Sandwich') },
            { character: '🌮', title: t('Taco') },
            { character: '🌯', title: t('Burrito') },
            { character: '🫔', title: t('Tamale') },
            { character: '🥙', title: t('Stuffed Flatbread') },
            { character: '🧆', title: t('Falafel') },
            { character: '🥚', title: t('Egg') },
            { character: '🍳', title: t('Cooking') },
            { character: '🥘', title: t('Shallow Pan of Food') },
            { character: '🍲', title: t('Pot of Food') },
            { character: '🫕', title: t('Fondue') },
            { character: '🥣', title: t('Bowl with Spoon') },
            { character: '🥗', title: t('Green Salad') },
            { character: '🍿', title: t('Popcorn') },
            { character: '🧈', title: t('Butter') },
            { character: '🧂', title: t('Salt') },
            { character: '🥫', title: t('Canned Food') },
            { character: '🍱', title: t('Bento Box') },
            { character: '🍘', title: t('Rice Cracker') },
            { character: '🍙', title: t('Rice Ball') },
            { character: '🍚', title: t('Cooked Rice') },
            { character: '🍛', title: t('Curry Rice') },
            { character: '🍜', title: t('Steaming Bowl') },
            { character: '🍝', title: t('Spaghetti') },
            { character: '🍠', title: t('Roasted Sweet Potato') },
            { character: '🍢', title: t('Oden') },
            { character: '🍣', title: t('Sushi') },
            { character: '🍤', title: t('Fried Shrimp') },
            { character: '🍥', title: t('Fish Cake with Swirl') },
            { character: '🥮', title: t('Moon Cake') },
            { character: '🍡', title: t('Dango') },
            { character: '🥟', title: t('Dumpling') },
            { character: '🥠', title: t('Fortune Cookie') },
            { character: '🥡', title: t('Takeout Box') },
            { character: '🦪', title: t('Oyster') },
            { character: '🍦', title: t('Soft Ice Cream') },
            { character: '🍧', title: t('Shaved Ice') },
            { character: '🍨', title: t('Ice Cream') },
            { character: '🍩', title: t('Doughnut') },
            { character: '🍪', title: t('Cookie') },
            { character: '🎂', title: t('Birthday Cake') },
            { character: '🍰', title: t('Shortcake') },
            { character: '🧁', title: t('Cupcake') },
            { character: '🥧', title: t('Pie') },
            { character: '🍫', title: t('Chocolate Bar') },
            { character: '🍬', title: t('Candy') },
            { character: '🍭', title: t('Lollipop') },
            { character: '🍮', title: t('Custard') },
            { character: '🍯', title: t('Honey Pot') },
            { character: '🍼', title: t('Baby Bottle') },
            { character: '🥛', title: t('Glass of Milk') },
            { character: '☕', title: t('Hot Beverage') },
            { character: '🫖', title: t('Teapot') },
            { character: '🍵', title: t('Teacup Without Handle') },
            { character: '🍶', title: t('Sake') },
            { character: '🍾', title: t('Bottle with Popping Cork') },
            { character: '🍷', title: t('Wine Glass') },
            { character: '🍸', title: t('Cocktail Glass') },
            { character: '🍹', title: t('Tropical Drink') },
            { character: '🍺', title: t('Beer Mug') },
            { character: '🍻', title: t('Clinking Beer Mugs') },
            { character: '🥂', title: t('Clinking Glasses') },
            { character: '🥃', title: t('Tumbler Glass') },
            { character: '🥤', title: t('Cup with Straw') },
            { character: '🧋', title: t('Bubble Tea') },
            { character: '🧃', title: t('Beverage Box') },
            { character: '🧉', title: t('Mate') },
            { character: '🧊', title: t('Ice') },
            { character: '🥢', title: t('Chopsticks') },
            { character: '🍽️', title: t('Fork and Knife with Plate') },
            { character: '🍴', title: t('Fork and Knife') },
            { character: '🥄', title: t('Spoo') },
        ], { label: '🍔 ' + t('Food') });
    }
}
