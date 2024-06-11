/**
 * @license Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */
/**
 * @module emojis/emojisactivities
 */
import { Plugin } from 'ckeditor5/src/core.js';
import type Emojis from './emojis.js';

/**
 * A plugin that provides special characters for the "Activities" category.
 *
 * ```ts
 * ClassicEditor
 *   .create( {
 *     plugins: [ ..., Emojis, EmojisActivities ],
 *   } )
 *   .then( ... )
 *   .catch( ... );
 * ```
 */
export default class EmojisActivities extends Plugin {
    /**
     * @inheritDoc
     */
    public static get pluginName() {
        return 'EmojisActivities' as const;
    }
    /**
     * @inheritDoc
     */
    public init(): void {
        const editor = this.editor;
        const t = editor.t;
        const plugin: Emojis = editor.plugins.get('Emojis');

        plugin.addItems('Activities', [
            { character: '🕴️', title: t('Person in Suit Levitating') },
            { character: '🧗', title: t('Person Climbing') },
            { character: '🧗‍♂️', title: t('Man Climbing') },
            { character: '🧗‍♀️', title: t('Woman Climbing') },
            { character: '🤺', title: t('Person Fencing') },
            { character: '🏇', title: t('Horse Racing') },
            { character: '⛷️', title: t('Skier') },
            { character: '🏂', title: t('Snowboarder') },
            { character: '🏌️', title: t('Person Golfing') },
            { character: '🏌️‍♂️', title: t('Man Golfing') },
            { character: '🏌️‍♀️', title: t('Woman Golfing') },
            { character: '🏄', title: t('Person Surfing') },
            { character: '🏄‍♂️', title: t('Man Surfing') },
            { character: '🏄‍♀️', title: t('Woman Surfing') },
            { character: '🚣', title: t('Person Rowing Boat') },
            { character: '🚣‍♂️', title: t('Man Rowing Boat') },
            { character: '🚣‍♀️', title: t('Woman Rowing Boat') },
            { character: '🏊', title: t('Person Swimming') },
            { character: '🏊‍♂️', title: t('Man Swimming') },
            { character: '🏊‍♀️', title: t('Woman Swimming') },
            { character: '⛹️', title: t('Person Bouncing Ball') },
            { character: '⛹️‍♂️', title: t('Man Bouncing Ball') },
            { character: '⛹️‍♀️', title: t('Woman Bouncing Ball') },
            { character: '🏋️', title: t('Person Lifting Weights') },
            { character: '🏋️‍♂️', title: t('Man Lifting Weights') },
            { character: '🏋️‍♀️', title: t('Woman Lifting Weights') },
            { character: '🚴', title: t('Person Biking') },
            { character: '🚴‍♂️', title: t('Man Biking') },
            { character: '🚴‍♀️', title: t('Woman Biking') },
            { character: '🚵', title: t('Person Mountain Biking') },
            { character: '🚵‍♂️', title: t('Man Mountain Biking') },
            { character: '🚵‍♀️', title: t('Woman Mountain Biking') },
            { character: '🤸', title: t('Person Cartwheeling') },
            { character: '🤸‍♂️', title: t('Man Cartwheeling') },
            { character: '🤸‍♀️', title: t('Woman Cartwheeling') },
            { character: '🤼', title: t('People Wrestling') },
            { character: '🤼‍♂️', title: t('Men Wrestling') },
            { character: '🤼‍♀️', title: t('Women Wrestling') },
            { character: '🤽', title: t('Person Playing Water Polo') },
            { character: '🤽‍♂️', title: t('Man Playing Water Polo') },
            { character: '🤽‍♀️', title: t('Woman Playing Water Polo') },
            { character: '🤾', title: t('Person Playing Handball') },
            { character: '🤾‍♂️', title: t('Man Playing Handball') },
            { character: '🤾‍♀️', title: t('Woman Playing Handball') },
            { character: '🤹', title: t('Person Juggling') },
            { character: '🤹‍♂️', title: t('Man Juggling') },
            { character: '🤹‍♀️', title: t('Woman Juggling') },
            { character: '🧘', title: t('Person in Lotus Position') },
            { character: '🧘‍♂️', title: t('Man in Lotus Position') },
            { character: '🧘‍♀️', title: t('Woman in Lotus Position') },
            { character: '🎪', title: t('Circus Tent') },
            { character: '🛹', title: t('Skateboard') },
            { character: '🛼', title: t('Roller Skate') },
            { character: '🛶', title: t('Canoe') },
            { character: '🎗️', title: t('Reminder Ribbon') },
            { character: '🎟️', title: t('Admission Tickets') },
            { character: '🎫', title: t('Ticket') },
            { character: '🎖️', title: t('Military Medal') },
            { character: '🏆', title: t('Trophy') },
            { character: '🏅', title: t('Sports Medal') },
            { character: '🥇', title: t('1st Place Medal') },
            { character: '🥈', title: t('2nd Place Medal') },
            { character: '🥉', title: t('3rd Place Medal') },
            { character: '⚽', title: t('Soccer Ball') },
            { character: '⚾', title: t('Baseball') },
            { character: '🥎', title: t('Softball') },
            { character: '🏀', title: t('Basketball') },
            { character: '🏐', title: t('Volleyball') },
            { character: '🏈', title: t('American Football') },
            { character: '🏉', title: t('Rugby Football') },
            { character: '🎾', title: t('Tennis') },
            { character: '🥏', title: t('Flying Disc') },
            { character: '🎳', title: t('Bowling') },
            { character: '🏏', title: t('Cricket Game') },
            { character: '🏑', title: t('Field Hockey') },
            { character: '🏒', title: t('Ice Hockey') },
            { character: '🥍', title: t('Lacrosse') },
            { character: '🏓', title: t('Ping Pong') },
            { character: '🏸', title: t('Badminton') },
            { character: '🥊', title: t('Boxing Glove') },
            { character: '🥋', title: t('Martial Arts Uniform') },
            { character: '🥅', title: t('Goal Net') },
            { character: '⛳', title: t('Flag in Hole') },
            { character: '⛸️', title: t('Ice Skate') },
            { character: '🎣', title: t('Fishing Pole') },
            { character: '🎽', title: t('Running Shirt') },
            { character: '🎿', title: t('Skis') },
            { character: '🛷', title: t('Sled') },
            { character: '🥌', title: t('Curling Stone') },
            { character: '🎯', title: t('Direct Hit') },
            { character: '🎱', title: t('Pool 8 Ball') },
            { character: '🎮', title: t('Video Game') },
            { character: '🎰', title: t('Slot Machine') },
            { character: '🎲', title: t('Game Die') },
            { character: '🧩', title: t('Puzzle Piece') },
            { character: '♟️', title: t('Chess Pawn') },
            { character: '🎭', title: t('Performing Arts') },
            { character: '🎨', title: t('Artist Palette') },
            { character: '🧵', title: t('Thread') },
            { character: '🧶', title: t('Yarn') },
            { character: '🎼', title: t('Musical Score') },
            { character: '🎤', title: t('Microphone') },
            { character: '🎧', title: t('Headphone') },
            { character: '🎷', title: t('Saxophone') },
            { character: '🪗', title: t('Accordion') },
            { character: '🎸', title: t('Guitar') },
            { character: '🎹', title: t('Musical Keyboard') },
            { character: '🎺', title: t('Trumpet') },
            { character: '🎻', title: t('Violin') },
            { character: '🥁', title: t('Drum') },
            { character: '🪘', title: t('Long Drum') },
            { character: '🎬', title: t('Clapper Board') },
            { character: '🏹', title: t('Bow and Arrow') }
        ], { label: '⚽ ' + t('Activities') });
    }
}
