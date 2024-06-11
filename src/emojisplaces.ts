/**
 * @license Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */
/**
 * @module emojis/emojisplaces
 */
import { Plugin } from 'ckeditor5/src/core.js';
import type Emojis from './emojis.js';

/**
 * A plugin that provides special characters for the "Places" category.
 *
 * ```ts
 * ClassicEditor
 *   .create( {
 *     plugins: [ ..., Emojis, EmojisPlaces ],
 *   } )
 *   .then( ... )
 *   .catch( ... );
 * ```
 */
export default class EmojisPlaces extends Plugin {
    /**
     * @inheritDoc
     */
    public static get pluginName() {
        return 'EmojisPlaces' as const;
    }
    /**
     * @inheritDoc
     */
    public init(): void {
        const editor = this.editor;
        const t = editor.t;
        const plugin: Emojis = editor.plugins.get('Emojis');

        plugin.addItems('Places', [
            { character: '🚣', title: 'Person Rowing Boat' },
            { character: '🗾', title: 'Map of Japan' },
            { character: '🏔️', title: 'Snow-Capped Mountain' },
            { character: '⛰️', title: 'Mountain' },
            { character: '🌋', title: 'Volcano' },
            { character: '🗻', title: 'Mount Fuji' },
            { character: '🏕️', title: 'Camping' },
            { character: '🏖️', title: 'Beach with Umbrella' },
            { character: '🏜️', title: 'Desert' },
            { character: '🏝️', title: 'Desert Island' },
            { character: '🏞️', title: 'National Park' },
            { character: '🏟️', title: 'Stadium' },
            { character: '🏛️', title: 'Classical Building' },
            { character: '🏗️', title: 'Building Construction' },
            { character: '🛖', title: 'Hut' },
            { character: '🏘️', title: 'Houses' },
            { character: '🏚️', title: 'Derelict House' },
            { character: '🏠', title: 'House' },
            { character: '🏡', title: 'House with Garden' },
            { character: '🏢', title: 'Office Building' },
            { character: '🏣', title: 'Japanese Post Office' },
            { character: '🏤', title: 'Post Office' },
            { character: '🏥', title: 'Hospital' },
            { character: '🏦', title: 'Bank' },
            { character: '🏨', title: 'Hotel' },
            { character: '🏩', title: 'Love Hotel' },
            { character: '🏪', title: 'Convenience Store' },
            { character: '🏫', title: 'School' },
            { character: '🏬', title: 'Department Store' },
            { character: '🏭', title: 'Factory' },
            { character: '🏯', title: 'Japanese Castle' },
            { character: '🏰', title: 'Castle' },
            { character: '💒', title: 'Wedding' },
            { character: '🗼', title: 'Tokyo Tower' },
            { character: '🗽', title: 'Statue of Liberty' },
            { character: '⛪', title: 'Church' },
            { character: '🕌', title: 'Mosque' },
            { character: '🛕', title: 'Hindu Temple' },
            { character: '🕍', title: 'Synagogue' },
            { character: '⛩️', title: 'Shinto Shrine' },
            { character: '🕋', title: 'Kaaba' },
            { character: '⛲', title: 'Fountain' },
            { character: '⛺', title: 'Tent' },
            { character: '🌁', title: 'Foggy' },
            { character: '🌃', title: 'Night with Stars' },
            { character: '🏙️', title: 'Cityscape' },
            { character: '🌄', title: 'Sunrise Over Mountains' },
            { character: '🌅', title: 'Sunrise' },
            { character: '🌆', title: 'Cityscape at Dusk' },
            { character: '🌇', title: 'Sunset' },
            { character: '🌉', title: 'Bridge at Night' },
            { character: '🎠', title: 'Carousel Horse' },
            { character: '🎡', title: 'Ferris Wheel' },
            { character: '🎢', title: 'Roller Coaster' },
            { character: '🚂', title: 'Locomotive' },
            { character: '🚃', title: 'Railway Car' },
            { character: '🚄', title: 'High-Speed Train' },
            { character: '🚅', title: 'Bullet Train' },
            { character: '🚆', title: 'Train' },
            { character: '🚇', title: 'Metro' },
            { character: '🚈', title: 'Light Rail' },
            { character: '🚉', title: 'Station' },
            { character: '🚊', title: 'Tram' },
            { character: '🚝', title: 'Monorail' },
            { character: '🚞', title: 'Mountain Railway' },
            { character: '🚋', title: 'Tram Car' },
            { character: '🚌', title: 'Bus' },
            { character: '🚍', title: 'Oncoming Bus' },
            { character: '🚎', title: 'Trolleybus' },
            { character: '🚐', title: 'Minibus' },
            { character: '🚑', title: 'Ambulance' },
            { character: '🚒', title: 'Fire Engine' },
            { character: '🚓', title: 'Police Car' },
            { character: '🚔', title: 'Oncoming Police Car' },
            { character: '🚕', title: 'Taxi' },
            { character: '🚖', title: 'Oncoming Taxi' },
            { character: '🚗', title: 'Automobile' },
            { character: '🚘', title: 'Oncoming Automobile' },
            { character: '🚙', title: 'Sport Utility Vehicle' },
            { character: '🛻', title: 'Pickup Truck' },
            { character: '🚚', title: 'Delivery Truck' },
            { character: '🚛', title: 'Articulated Lorry' },
            { character: '🚜', title: 'Tractor' },
            { character: '🏎️', title: 'Racing Car' },
            { character: '🏍️', title: 'Motorcycle' },
            { character: '🛵', title: 'Motor Scooter' },
            { character: '🛺', title: 'Auto Rickshaw' },
            { character: '🚲', title: 'Bicycle' },
            { character: '🛴', title: 'Kick Scooter' },
            { character: '🚏', title: 'Bus Stop' },
            { character: '🛣️', title: 'Motorway' },
            { character: '🛤️', title: 'Railway Track' },
            { character: '⛽', title: 'Fuel Pump' },
            { character: '🚨', title: 'Police Car Light' },
            { character: '🚥', title: 'Horizontal Traffic Light' },
            { character: '🚦', title: 'Vertical Traffic Light' },
            { character: '🚧', title: 'Construction' },
            { character: '⚓', title: 'Anchor' },
            { character: '⛵', title: 'Sailboat' },
            { character: '🚤', title: 'Speedboat' },
            { character: '🛳️', title: 'Passenger Ship' },
            { character: '⛴️', title: 'Ferry' },
            { character: '🛥️', title: 'Motor Boat' },
            { character: '🚢', title: 'Ship' },
            { character: '✈️', title: 'Airplane' },
            { character: '🛩️', title: 'Small Airplane' },
            { character: '🛫', title: 'Airplane Departure' },
            { character: '🛬', title: 'Airplane Arrival' },
            { character: '🪂', title: 'Parachute' },
            { character: '💺', title: 'Seat' },
            { character: '🚁', title: 'Helicopter' },
            { character: '🚟', title: 'Suspension Railway' },
            { character: '🚠', title: 'Mountain Cableway' },
            { character: '🚡', title: 'Aerial Tramway' },
            { character: '🛰️', title: 'Satellite' },
            { character: '🚀', title: 'Rocket' },
            { character: '🛸', title: 'Flying Saucer' },
            { character: '🪐', title: 'Ringed Planet' },
            { character: '🌠', title: 'Shooting Star' },
            { character: '🌌', title: 'Milky Way' },
            { character: '⛱️', title: 'Umbrella on Ground' },
            { character: '🎆', title: 'Fireworks' },
            { character: '🎇', title: 'Sparkler' },
            { character: '🎑', title: 'Moon Viewing Ceremony' },
            { character: '💴', title: 'Yen Banknote' },
            { character: '💵', title: 'Dollar Banknote' },
            { character: '💶', title: 'Euro Banknote' },
            { character: '💷', title: 'Pound Banknote' },
            { character: '🗿', title: 'Moai' },
            { character: '🛂', title: 'Passport Control' },
            { character: '🛃', title: 'Customs' },
            { character: '🛄', title: 'Baggage Claim' },
            { character: '🛅', title: 'Left Luggage' }
        ], { label: '🚀 ' + t('Places') });
    }
}
