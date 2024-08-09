# CKEditor 5 Emojis plugin

Emoji plugin using a modified version of the ckeditor5 SpecialCharacters plugin.

![Preview Image](preview.png "Preview Image")

## Setup

1. Installation

To install it, run:

```javascript
npm i --save @oteam-io/ckeditor5-emojis
```

2. Importing modules

Import the Emojis plugin with all optional categories. If you want to exclude some category, don't import it.

```javascript
import {
    Emojis, EmojisActivity, EmojisFlags, EmojisFood, EmojisNature, EmojisObjects, EmojisPeople,
    EmojisPlaces, EmojisSymbols
} from '@oteam-io/ckeditor5-emojis/src';
```

3. Add imported modules to plugins

Add the Emoji plugin and optional categories to CKEditor plugins.

Add plugin to build:

```javascript
InlineEditor
    .create( document.querySelector( '#editor' ), {
        plugins: [
            ...,
            Emojis,
            EmojisPeople,
            EmojisNature,
            EmojisPlaces,
            EmojisFood,
            EmojisActivities,
            EmojisObjects,
            EmojisSymbols,
            EmojisFlags,
        ],
    } )
    .then( editor => {
        window.editor = editor;
    } )
    .catch( err => {
        console.error( err.stack );
    } );
```

**or** add plugin to custom editor builder:

```javascript
InlineEditor.builtinPlugins = [
    ...
    Emojis,
    EmojisPeople,
    EmojisNature,
    EmojisPlaces,
    EmojisFood,
    EmojisActivities,
    EmojisObjects,
    EmojisSymbols,
    EmojisFlags,
]
```

4. Add the Emoji plugin to toolbar

Add plugin to build:

```javascript
InlineEditor
    .create( document.querySelector( '#editor' ), {
        plugins: [...],
        toolbar: [ ... , 'emoji' ],
    } )
    .then( editor => {
        window.editor = editor;
    } )
    .catch( err => {
        console.error( err.stack );
    } );
```

**or** add plugin to custom editor builder:

```javascript
InlineEditor.defaultConfig = {
    toolbar: {
        items: [
            ...,
	    'emojis',
	    '|',
	    'undo',
	    'redo'
	]
    },
};
```

5. Enjoy

## Emoji Set

Emojis are divided into categories:

- All
- Activities
- Food
- Flags
- Nature
- Objects
- People
- Places
- Symbols

You can choose specific categories or import all of them.



