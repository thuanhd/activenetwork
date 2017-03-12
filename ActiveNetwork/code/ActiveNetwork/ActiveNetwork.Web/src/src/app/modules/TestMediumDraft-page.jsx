import React, {Component} from 'react';

import {
  Editor,
  createEditorState,
} from 'medium-draft';

export class TestMediumDraftPage extends Component {
  componentWillMount(){
    this.setState({
      event_description:createEditorState(fakeData)
    });
  }

  onEventDescriptionChanged(editorState) {
    this.setState({event_description: editorState});
  }
  render() {
    return (<div>
      <Editor
        ref="editor"
        editorState={this.state.event_description}
        onChange={(e) => this.onEventDescriptionChanged(e)}
      />
      
    </div>);
  }
}

var fakeData = {
  "entityMap": {
    "0": {
      "type": "LINK",
      "mutability": "MUTABLE",
      "data": {
        "url": "https://github.com/brijeshb42/medium-draft"
      }
    },
    "1": {
      "type": "LINK",
      "mutability": "MUTABLE",
      "data": {
        "url": "https://facebook.github.io/draft-js/"
      }
    },
    "2": {
      "type": "LINK",
      "mutability": "MUTABLE",
      "data": {
        "url": "https://500px.com/photo/169455423/wassertropfen-by-zoom-3"
      }
    },
    "3": {
      "type": "embed",
      "mutability": "IMMUTABLE",
      "data": {
        "url": "https://twitter.com/brijeshb42/status/770961883788562432"
      }
    }
  },
  "blocks": [
    {
      "key": "2vr7c",
      "text": "medium-draft",
      "type": "header-three",
      "depth": 0,
      "inlineStyleRanges": [],
      "entityRanges": [
        {
          "offset": 0,
          "length": 12,
          "key": 0
        }
      ],
      "data": {}
    },
    {
      "key": "fksil",
      "text": "This page is fully editable.",
      "type": "header-three",
      "depth": 0,
      "inlineStyleRanges": [],
      "entityRanges": [],
      "data": {}
    },
    {
      "key": "54mdi",
      "text": "Try to select some text to open the toolbar",
      "type": "ordered-list-item",
      "depth": 0,
      "inlineStyleRanges": [],
      "entityRanges": [],
      "data": {}
    },
    {
      "key": "4vubv",
      "text": "Goto an empty line to add an image.",
      "type": "ordered-list-item",
      "depth": 0,
      "inlineStyleRanges": [],
      "entityRanges": [],
      "data": {}
    },
    {
      "key": "99fam",
      "text": "A medium like rich text editor built using draft-js with an emphasis on eliminating mouse usage by adding relevant keyboard shortcuts.",
      "type": "blockquote",
      "depth": 0,
      "inlineStyleRanges": [],
      "entityRanges": [
        {
          "offset": 43,
          "length": 8,
          "key": 1
        }
      ],
      "data": {}
    },
    {
      "key": "967qt",
      "text": "The keyboard shortcuts are mentioned below.",
      "type": "blockquote",
      "depth": 0,
      "inlineStyleRanges": [
        {
          "offset": 13,
          "length": 9,
          "style": "BOLD"
        },
        {
          "offset": 27,
          "length": 9,
          "style": "BOLD"
        }
      ],
      "entityRanges": [],
      "data": {}
    },
    {
      "key": "bah83",
      "text": "It also has implementations of some custom blocks like",
      "type": "unstyled",
      "depth": 0,
      "inlineStyleRanges": [],
      "entityRanges": [],
      "data": {}
    },
    {
      "key": "euloj",
      "text": "Custom Blocks",
      "type": "header-three",
      "depth": 0,
      "inlineStyleRanges": [],
      "entityRanges": [],
      "data": {}
    },
    {
      "key": "cavj0",
      "text": "This is a blockquote.",
      "type": "blockquote",
      "depth": 0,
      "inlineStyleRanges": [],
      "entityRanges": [],
      "data": {}
    },
    {
      "key": "7ajf3",
      "text": "This is a block-quote-caption block (caption for a blockquote)",
      "type": "block-quote-caption",
      "depth": 0,
      "inlineStyleRanges": [
        {
          "offset": 10,
          "length": 19,
          "style": "BOLD"
        }
      ],
      "entityRanges": [],
      "data": {}
    },
    {
      "key": "5lq83",
      "text": "Image Block",
      "type": "header-three",
      "depth": 0,
      "inlineStyleRanges": [],
      "entityRanges": [],
      "data": {}
    },
    {
      "key": "375gj",
      "text": "This is an Image block. Images can be added by going to a new empty line and then clicking the (+) button that appears on the left of the cursor.",
      "type": "unstyled",
      "depth": 0,
      "inlineStyleRanges": [
        {
          "offset": 0,
          "length": 145,
          "style": "HIGHLIGHT"
        },
        {
          "offset": 95,
          "length": 3,
          "style": "BOLD"
        }
      ],
      "entityRanges": [],
      "data": {}
    },
    {
      "key": "fb5f8",
      "text": "Wassertropen by Zoom3",
      "type": "atomic:image",
      "depth": 0,
      "inlineStyleRanges": [],
      "entityRanges": [
        {
          "offset": 16,
          "length": 5,
          "key": 2
        }
      ],
      "data": {
        "src": "https://drscdn.500px.org/photo/169455423/m%3D900/9d9ce3ea1cc9e1646a032fd0b576013c"
      }
    },
    {
      "key": "5dlgm",
      "text": "Embed Block (Using Embedly)",
      "type": "header-three",
      "depth": 0,
      "inlineStyleRanges": [],
      "entityRanges": [],
      "data": {}
    },
    {
      "key": "etee",
      "text": "E",
      "type": "atomic",
      "depth": 0,
      "inlineStyleRanges": [],
      "entityRanges": [
        {
          "offset": 0,
          "length": 1,
          "key": 3
        }
      ],
      "data": {}
    },
    {
      "key": "eqvas",
      "text": "Todo Block",
      "type": "header-three",
      "depth": 0,
      "inlineStyleRanges": [],
      "entityRanges": [],
      "data": {}
    },
    {
      "key": "m0a7",
      "text": "This is an uncomplete todo block. To add a todo block, type [] in a new line.",
      "type": "todo",
      "depth": 0,
      "inlineStyleRanges": [
        {
          "offset": 43,
          "length": 4,
          "style": "CODE"
        },
        {
          "offset": 60,
          "length": 2,
          "style": "CODE"
        }
      ],
      "entityRanges": [],
      "data": {
        "checked": false
      }
    },
    {
      "key": "eocb8",
      "text": "This is a completed todo block.",
      "type": "todo",
      "depth": 0,
      "inlineStyleRanges": [],
      "entityRanges": [],
      "data": {
        "checked": true
      }
    },
    {
      "key": "7qp46",
      "text": "Keyboard shortcuts",
      "type": "header-three",
      "depth": 0,
      "inlineStyleRanges": [],
      "entityRanges": [],
      "data": {}
    },
    {
      "key": "c7bqc",
      "text": "Following are the keyboard shortcuts to toggle block types (Alt and CTRL for Windows/Linux and Option and Command for OSX.",
      "type": "unstyled",
      "depth": 0,
      "inlineStyleRanges": [
        {
          "offset": 60,
          "length": 3,
          "style": "CODE"
        },
        {
          "offset": 68,
          "length": 4,
          "style": "CODE"
        },
        {
          "offset": 95,
          "length": 6,
          "style": "CODE"
        },
        {
          "offset": 106,
          "length": 7,
          "style": "CODE"
        }
      ],
      "entityRanges": [],
      "data": {}
    },
    {
      "key": "69emd",
      "text": "Alt/Option +",
      "type": "unordered-list-item",
      "depth": 0,
      "inlineStyleRanges": [
        {
          "offset": 0,
          "length": 10,
          "style": "CODE"
        }
      ],
      "entityRanges": [],
      "data": {}
    },
    {
      "key": "7ah5d",
      "text": "1 - Toggle ordered-list-item.",
      "type": "unordered-list-item",
      "depth": 1,
      "inlineStyleRanges": [
        {
          "offset": 0,
          "length": 1,
          "style": "CODE"
        },
        {
          "offset": 11,
          "length": 17,
          "style": "BOLD"
        }
      ],
      "entityRanges": [],
      "data": {}
    },
    {
      "key": "226et",
      "text": "* - Toggle unordered-list-item.",
      "type": "unordered-list-item",
      "depth": 1,
      "inlineStyleRanges": [
        {
          "offset": 0,
          "length": 1,
          "style": "CODE"
        },
        {
          "offset": 11,
          "length": 19,
          "style": "BOLD"
        }
      ],
      "entityRanges": [],
      "data": {}
    },
    {
      "key": "fdr9n",
      "text": "@ - Add link to selected text.",
      "type": "unordered-list-item",
      "depth": 1,
      "inlineStyleRanges": [
        {
          "offset": 0,
          "length": 1,
          "style": "CODE"
        },
        {
          "offset": 8,
          "length": 4,
          "style": "HIGHLIGHT"
        }
      ],
      "entityRanges": [],
      "data": {}
    },
    {
      "key": "5dd2l",
      "text": "# - Toggle header-three.",
      "type": "unordered-list-item",
      "depth": 1,
      "inlineStyleRanges": [
        {
          "offset": 0,
          "length": 1,
          "style": "CODE"
        },
        {
          "offset": 11,
          "length": 12,
          "style": "BOLD"
        }
      ],
      "entityRanges": [],
      "data": {}
    },
    {
      "key": "1inva",
      "text": "< - Toggle caption block.",
      "type": "unordered-list-item",
      "depth": 1,
      "inlineStyleRanges": [
        {
          "offset": 0,
          "length": 1,
          "style": "CODE"
        },
        {
          "offset": 11,
          "length": 7,
          "style": "BOLD"
        }
      ],
      "entityRanges": [],
      "data": {}
    },
    {
      "key": "dladv",
      "text": "> - Toggle unstyled block.",
      "type": "unordered-list-item",
      "depth": 1,
      "inlineStyleRanges": [
        {
          "offset": 0,
          "length": 1,
          "style": "CODE"
        },
        {
          "offset": 11,
          "length": 8,
          "style": "BOLD"
        }
      ],
      "entityRanges": [],
      "data": {}
    },
    {
      "key": "2sf71",
      "text": "H - Highlight selection.",
      "type": "unordered-list-item",
      "depth": 1,
      "inlineStyleRanges": [
        {
          "offset": 0,
          "length": 1,
          "style": "CODE"
        },
        {
          "offset": 4,
          "length": 9,
          "style": "HIGHLIGHT"
        }
      ],
      "entityRanges": [],
      "data": {}
    },
    {
      "key": "4g4k0",
      "text": "Editor level commands",
      "type": "header-three",
      "depth": 0,
      "inlineStyleRanges": [],
      "entityRanges": [],
      "data": {}
    },
    {
      "key": "e1hm5",
      "text": "Command/CTRL + S - Save current data to localstorage.",
      "type": "ordered-list-item",
      "depth": 0,
      "inlineStyleRanges": [
        {
          "offset": 0,
          "length": 16,
          "style": "CODE"
        },
        {
          "offset": 40,
          "length": 12,
          "style": "CODE"
        }
      ],
      "entityRanges": [],
      "data": {}
    },
    {
      "key": "89n8b",
      "text": "Alt + Shift + D - Load previously saved data from localstorage.",
      "type": "ordered-list-item",
      "depth": 0,
      "inlineStyleRanges": [
        {
          "offset": 0,
          "length": 15,
          "style": "CODE"
        },
        {
          "offset": 50,
          "length": 12,
          "style": "CODE"
        }
      ],
      "entityRanges": [],
      "data": {}
    },
    {
      "key": "9vrn2",
      "text": "Special characters while typing: If while typing in an empty block, if the content matches one of the following, that particular block type will be changed to the corresponding block specified below -",
      "type": "unstyled",
      "depth": 0,
      "inlineStyleRanges": [],
      "entityRanges": [],
      "data": {}
    },
    {
      "key": "7ihrd",
      "text": "-- (2 hyphens) - If current block is blockquote, it will be changed to block-quote-caption, else caption.",
      "type": "unordered-list-item",
      "depth": 0,
      "inlineStyleRanges": [
        {
          "offset": 0,
          "length": 2,
          "style": "CODE"
        },
        {
          "offset": 3,
          "length": 11,
          "style": "CODE"
        },
        {
          "offset": 37,
          "length": 10,
          "style": "CODE"
        },
        {
          "offset": 71,
          "length": 19,
          "style": "CODE"
        },
        {
          "offset": 97,
          "length": 7,
          "style": "CODE"
        }
      ],
      "entityRanges": [],
      "data": {}
    },
    {
      "key": "11m2k",
      "text": "*. (An asterisk and a period) - unordered-list-item",
      "type": "unordered-list-item",
      "depth": 0,
      "inlineStyleRanges": [
        {
          "offset": 0,
          "length": 2,
          "style": "CODE"
        },
        {
          "offset": 3,
          "length": 26,
          "style": "CODE"
        },
        {
          "offset": 32,
          "length": 19,
          "style": "CODE"
        }
      ],
      "entityRanges": [],
      "data": {}
    },
    {
      "key": "38m5p",
      "text": "1. (1 and a period) - ordered-list-item.",
      "type": "unordered-list-item",
      "depth": 0,
      "inlineStyleRanges": [
        {
          "offset": 0,
          "length": 2,
          "style": "CODE"
        },
        {
          "offset": 3,
          "length": 16,
          "style": "CODE"
        },
        {
          "offset": 22,
          "length": 17,
          "style": "CODE"
        }
      ],
      "entityRanges": [],
      "data": {}
    },
    {
      "key": "36jrv",
      "text": "## - header-three",
      "type": "unordered-list-item",
      "depth": 0,
      "inlineStyleRanges": [
        {
          "offset": 0,
          "length": 2,
          "style": "CODE"
        },
        {
          "offset": 5,
          "length": 12,
          "style": "CODE"
        }
      ],
      "entityRanges": [],
      "data": {}
    },
    {
      "key": "a17fn",
      "text": "== - unstyled",
      "type": "unordered-list-item",
      "depth": 0,
      "inlineStyleRanges": [
        {
          "offset": 0,
          "length": 2,
          "style": "CODE"
        },
        {
          "offset": 5,
          "length": 8,
          "style": "CODE"
        }
      ],
      "entityRanges": [],
      "data": {}
    },
    {
      "key": "3am",
      "text": "[] - todo",
      "type": "unordered-list-item",
      "depth": 0,
      "inlineStyleRanges": [
        {
          "offset": 0,
          "length": 2,
          "style": "CODE"
        },
        {
          "offset": 5,
          "length": 4,
          "style": "CODE"
        }
      ],
      "entityRanges": [],
      "data": {}
    },
    {
      "key": "5lakb",
      "text": "> - blockquote",
      "type": "unordered-list-item",
      "depth": 0,
      "inlineStyleRanges": [
        {
          "offset": 0,
          "length": 2,
          "style": "CODE"
        },
        {
          "offset": 4,
          "length": 10,
          "style": "CODE"
        }
      ],
      "entityRanges": [],
      "data": {}
    },
    {
      "key": "1klv5",
      "text": "Todos",
      "type": "header-three",
      "depth": 0,
      "inlineStyleRanges": [],
      "entityRanges": [],
      "data": {}
    },
    {
      "key": "cpkla",
      "text": "Figure out a way to show placeholder for images with empty caption.",
      "type": "todo",
      "depth": 0,
      "inlineStyleRanges": [],
      "entityRanges": [],
      "data": {
        "checked": false
      }
    },
    {
      "key": "bobur",
      "text": "The + button that appears on the left is just a placeholder to demonstrate how it can be added besides current block. The functionality to add special blocks like image, video or others will be added eventually.",
      "type": "todo",
      "depth": 0,
      "inlineStyleRanges": [
        {
          "offset": 4,
          "length": 1,
          "style": "CODE"
        }
      ],
      "entityRanges": [],
      "data": {
        "checked": true
      }
    },
    {
      "key": "45mgl",
      "text": "Issue",
      "type": "header-three",
      "depth": 0,
      "inlineStyleRanges": [],
      "entityRanges": [],
      "data": {}
    },
    {
      "key": "f3gea",
      "text": "Currently, the toolbar that appears when text is selected needs to be fixed regrading its position in the viewport.",
      "type": "todo",
      "depth": 0,
      "inlineStyleRanges": [],
      "entityRanges": [],
      "data": {
        "checked": true
      }
    }
  ]
}
;