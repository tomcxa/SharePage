import { deepMerge } from 'grommet/utils';
import { grommet } from 'grommet/themes';

export const customTheme = deepMerge(grommet, {
  "defaultMode": "light",
  "global": {
    "colors": {
      "brand": "blue",
      "background": {
        "dark": "#263040",
        "light": "#FFFFFF"
      },
      "background-back": {
        "dark": "#263040",
        "light": "#EFEFEF"
      },
      "background-front": {
        "dark": "#404B5C",
        "light": "#FFFFFF"
      },
      "background-contrast": {
        "dark": "#FFFFFF14",
        "light": "#0000000A"
      },
      "icon": "text",
      "text": {
        "dark": "#C0CADC",
        "light": "#444444"
      },
      "text-strong": {
        "dark": "#FFFFFF",
        "light": "#000000"
      },
      "text-weak": {
        "dark": "#606B7D",
        "light": "#BBBBBB"
      },
      "text-xweak": "text-weak",
      "border": {
        "dark": "#7887A1",
        "light": "#999999"
      },
      "border-strong": {
        "dark": "#AFBCD2",
        "light": "#666666"
      },
      "border-weak": {
        "dark": "#606B7D",
        "light": "#BBBBBB"
      },
      "control": "green",
      "active-background": "background-contrast",
      "active-text": "text",
      "disabled-text": "text-weak",
      "selected-background": "green",
      "selected-text": "text-strong",
      "status-critical": {
        "dark": "#D04F4E",
        "light": "#FC5A5A"
      },
      "status-warning": {
        "dark": "#9B6310",
        "light": "#FFBC44"
      },
      "status-ok": {
        "dark": "#008567",
        "light": "#17EBA0"
      },
      "status-unknown": {
        "dark": "#4F5F76",
        "light": "#CCCCCC"
      },
      "status-disabled": "#CCCCCC",
      "blue": {
        "dark": "#00567A",
        "light": "#00C8FF"
      },
      "blue!": "#00739D",
      "green": {
        "dark": "#008567",
        "light": "#17EBA0"
      },
      "green!": "#01A982",
      "teal": {
        "dark": "#117B82",
        "light": "#82FFF2"
      },
      "teal!": "#00E8CF",
      "purple": {
        "dark": "#6633BC",
        "light": "#F740FF"
      },
      "purple!": "#7630EA",
      "red": {
        "dark": "#A2423D",
        "light": "#FC6161"
      },
      "red!": "#C54E4B",
      "orange": {
        "dark": "#9B6310",
        "light": "#FFBC44"
      },
      "orange!": "#FF8300",
      "yellow": {
        "dark": "#8D741C",
        "light": "#FFEB59"
      },
      "yellow!": "#FEC901",
      "validation-critical": {
        "light": "#FC61613D",
        "dark": "#C54E4B5C"
      },
      "graph-0": "orange!",
      "graph-1": "blue!",
      "graph-2": "purple!",
      "graph-3": "yellow!",
      "graph-4": "teal!",
      "focus": "teal!",
      "placeholder": "text-weak"
    },
    "input": {
      "font": {
        "height": "inherit",
        "weight": 500
      },
      "padding": {
        "horizontal": "small",
        "vertical": "xsmall"
      },
      "extend": "\n        &::-webkit-input-placeholder {\n          font-weight: 400;\n        }\n      \n        &::-moz-placeholder {\n          font-weight: 400;\n        }\n      \n        &:-ms-input-placeholder {\n          font-weight: 400;\n        }\n      "
    },
    "focus": {
      "border": {
        "color": "brand"
      }
    },
    "active": {
      "background": "active-background",
      "color": "active-text"
    },
    "drop": {
      "background": "background-front",
      "border": {
        "radius": "4px"
      },
      "shadowSize": "medium"
    },
    "elevation": {
      "light": {
        "small": "0px 2px 4px #0000001F;",
        "medium": "0px 6px 12px #0000003D;",
        "large": "0px 12px 24px #0000001F;"
      },
      "dark": {
        "small": "0px 2px 4px #0000003D;",
        "medium": "0px 6px 12px #0000005C;",
        "large": "0px 12px 24px #0000007A;"
      }
    },
    "hover": {
      "background": "active-background",
      "color": "active-text"
    },
    "selected": {
      "background": "selected-background",
      "color": "selected-text"
    }
  },
  "accordion": {
    "panel": {
      "border": {
        "side": "horizontal",
        "color": "text"
      }
    },
    "heading": {
      "margin": {
        "vertical": "medium",
        "horizontal": "xsmall"
      }
    },
    "hover": {
      "heading": {}
    },
    "icons": {
      "color": "text"
    }
  },
  "anchor": {
    "color": "text",
    "textDecoration": "underline",
    "fontWeight": 500,
    "hover": {
      "textDecoration": "underline"
    }
  },
  "button": {
    "default": {
      "color": "text-strong",
      "font": {
        "weight": 700
      },
      "padding": {
        "horizontal": "12px",
        "vertical": "6px"
      }
    },
    "primary": {
      "background": {
        "color": "green"
      },
      "color": "text-strong",
      "font": {
        "weight": 700
      },
      "padding": {
        "horizontal": "12px",
        "vertical": "6px"
      }
    },
    "secondary": {
      "border": {
        "color": "green",
        "width": "2px"
      },
      "color": "text-strong",
      "font": {
        "weight": 700
      },
      "padding": {
        "horizontal": "10px",
        "vertical": "4px"
      }
    },
    "option": {
      "color": "text",
      "border": {
        "radius": "0px"
      },
      "padding": {
        "horizontal": "12px",
        "vertical": "6px"
      },
      "font": {
        "weight": 400
      }
    },
    "active": {
      "background": {
        "color": "background-contrast"
      },
      "color": "text",
      "secondary": {
        "border": {
          "color": "transparent"
        }
      },
      "option": {
        "background": {
          "color": "active-background"
        }
      }
    },
    "selected": {
      "option": {
        "background": "selected-background",
        "color": "selected-text"
      }
    },
    "disabled": {
      "background": {
        "color": "transparent"
      },
      "color": "text-weak",
      "primary": {
        "border": {
          "color": "border-weak",
          "width": "2px"
        },
        "padding": {
          "horizontal": "10px",
          "vertical": "4px"
        }
      },
      "secondary": {
        "border": {
          "color": "border-weak"
        }
      },
      "opacity": 1
    },
    "hover": {
      "default": {
        "background": {
          "color": "background-contrast"
        }
      },
      "secondary": {
        "border": {
          "width": "3px"
        },
        "padding": {
          "horizontal": "9px",
          "vertical": "3px"
        }
      },
      "option": {
        "background": "active-background",
        "color": "active-text"
      }
    },
    "size": {
      "small": {
        "border": {
          "radius": "4px"
        },
        "pad": {
          "vertical": "4px",
          "horizontal": "8px"
        }
      },
      "medium": {
        "border": {
          "radius": "4px"
        },
        "pad": {
          "vertical": "4px",
          "horizontal": "10px"
        }
      },
      "large": {
        "border": {
          "radius": "6px"
        },
        "pad": {
          "vertical": "6px",
          "horizontal": "16px"
        }
      }
    },
    "border": {
      "radius": "4px"
    },
    "color": "text-strong",
    "padding": {
      "vertical": "4px",
      "horizontal": "10px"
    }
  },
  "calendar": {
    "small": {
      "fontSize": "13.6px",
      "lineHeight": 1.375,
      "daySize": "27.43px"
    },
    "medium": {
      "fontSize": "18px",
      "lineHeight": 1.45,
      "daySize": "54.86px"
    },
    "large": {
      "fontSize": "31.2px",
      "lineHeight": 1.11,
      "daySize": "109.71px"
    }
  },
  "card": {
    "container": {
      "background": "background-front"
    },
    "body": {
      "pad": "medium"
    },
    "footer": {
      "pad": {
        "horizontal": "medium",
        "vertical": "small"
      }
    },
    "header": {
      "pad": "medium"
    }
  },
  "checkBox": {
    "hover": {
      "border": {},
      "background": {
        "color": "background-contrast"
      }
    },
    "color": "background",
    "border": {
      "color": "border",
      "width": "1px"
    },
    "check": {
      "radius": "2px"
    },
    "icon": {},
    "gap": "small",
    "toggle": {
      "background": "background",
      "color": "background",
      "knob": {}
    }
  },
  "checkBoxGroup": {
    "container": {
      "gap": "none",
      "margin": {
        "vertical": "xsmall"
      }
    }
  },
  "dataTable": {
    "body": {},
    "header": {
      "border": {
        "side": "bottom"
      },
      "color": "text-strong",
      "font": {
        "weight": "bold"
      },
      "gap": "none",
      "hover": {
        "background": {
          "color": "background-contrast"
        }
      },
      "pad": {
        "horizontal": "small",
        "vertical": "xsmall"
      }
    },
    "icons": {},
    "pinned": {
      "header": {
        "background": {
          "color": "background-front",
          "opacity": "strong"
        },
        "extend": "backdrop-filter: blur(8px);"
      },
      "body": {
        "background": {
          "color": "background-front",
          "opacity": "strong"
        },
        "extend": "backdrop-filter: blur(8px);"
      },
      "footer": {
        "background": {
          "color": "background-front",
          "opacity": "strong"
        },
        "extend": "backdrop-filter: blur(8px);"
      }
    },
    "resize": {
      "hover": {
        "border": {
          "color": "border-strong",
          "size": "small"
        }
      }
    }
  },
  "dateInput": {
    "icon": {
      "size": "small"
    }
  },
  "formField": {
    "content": {
      "margin": {
        "vertical": "xsmall"
      }
    },
    "border": {
      "error": {
        "color": "border-strong"
      },
      "color": "border",
      "side": "all"
    },
    "disabled": {
      "background": {},
      "border": {
        "color": "border-weak"
      },
      "label": {
        "color": "text-weak"
      }
    },
    "error": {
      "background": {
        "color": "validation-critical"
      },
      "container": {
        "gap": "xsmall"
      },
      "icon": {
        "key": null,
        "ref": null,
        "props": {
          "size": "small",
          "style": {
            "marginTop": "4px"
          }
        },
        "_owner": null,
        "_store": {}
      },
      "size": "xsmall",
      "color": "text",
      "margin": {
        "bottom": "xsmall",
        "top": "none",
        "horizontal": "none"
      }
    },
    "focus": {
      "border": {
        "color": "border-strong"
      }
    },
    "help": {
      "size": "xsmall",
      "color": "text",
      "margin": "none"
    },
    "info": {
      "size": "xsmall",
      "color": "text",
      "margin": {
        "bottom": "xsmall",
        "top": "none",
        "horizontal": "none"
      }
    },
    "label": {
      "size": "xsmall",
      "color": "text",
      "margin": {
        "bottom": "none",
        "top": "xsmall",
        "horizontal": "none"
      },
      "weight": 500
    },
    "margin": {
      "bottom": "none"
    },
    "round": "4px"
  },
  "heading": {
    "level": {
      "1": {
        "small": {
          "size": "36px",
          "height": "42px",
          "maxWidth": "854px"
        },
        "medium": {
          "size": "53px",
          "height": "59px",
          "maxWidth": "1277px"
        },
        "large": {
          "size": "88px",
          "height": "94px",
          "maxWidth": "2122px"
        },
        "xlarge": {
          "size": "124px",
          "height": "130px",
          "maxWidth": "2966px"
        }
      },
      "2": {
        "small": {
          "size": "31px",
          "height": "37px",
          "maxWidth": "749px"
        },
        "medium": {
          "size": "44px",
          "height": "50px",
          "maxWidth": "1066px"
        },
        "large": {
          "size": "58px",
          "height": "64px",
          "maxWidth": "1382px"
        },
        "xlarge": {
          "size": "71px",
          "height": "77px",
          "maxWidth": "1699px"
        }
      },
      "3": {
        "small": {
          "size": "27px",
          "height": "33px",
          "maxWidth": "643px"
        },
        "medium": {
          "size": "36px",
          "height": "42px",
          "maxWidth": "854px"
        },
        "large": {
          "size": "44px",
          "height": "50px",
          "maxWidth": "1066px"
        },
        "xlarge": {
          "size": "53px",
          "height": "59px",
          "maxWidth": "1277px"
        }
      },
      "4": {
        "small": {
          "size": "22px",
          "height": "28px",
          "maxWidth": "538px"
        },
        "medium": {
          "size": "27px",
          "height": "33px",
          "maxWidth": "643px"
        },
        "large": {
          "size": "31px",
          "height": "37px",
          "maxWidth": "749px"
        },
        "xlarge": {
          "size": "36px",
          "height": "42px",
          "maxWidth": "854px"
        }
      },
      "5": {
        "small": {
          "size": "16px",
          "height": "22px",
          "maxWidth": "379px"
        },
        "medium": {
          "size": "16px",
          "height": "22px",
          "maxWidth": "379px"
        },
        "large": {
          "size": "16px",
          "height": "22px",
          "maxWidth": "379px"
        },
        "xlarge": {
          "size": "16px",
          "height": "22px",
          "maxWidth": "379px"
        }
      },
      "6": {
        "small": {
          "size": "14px",
          "height": "20px",
          "maxWidth": "326px"
        },
        "medium": {
          "size": "14px",
          "height": "20px",
          "maxWidth": "326px"
        },
        "large": {
          "size": "14px",
          "height": "20px",
          "maxWidth": "326px"
        },
        "xlarge": {
          "size": "14px",
          "height": "20px",
          "maxWidth": "326px"
        }
      }
    },
    "weight": 700
  },
  "icon": {
    "size": {
      "xxlarge": "166px"
    }
  },
  "layer": {
    "background": "background",
    "overlay": {
      "background": "#00000080"
    }
  },
  "list": {
    "item": {}
  },
  "maskedInput": {
    "container": {}
  },
  "menu": {
    "icons": {
      "color": "text-strong"
    }
  },
  "paragraph": {
    "small": {
      "size": "16px",
      "height": "22px",
      "maxWidth": "379px"
    },
    "medium": {
      "size": "18px",
      "height": "24px",
      "maxWidth": "432px"
    },
    "large": {
      "size": "22px",
      "height": "28px",
      "maxWidth": "538px"
    },
    "xlarge": {
      "size": "27px",
      "height": "33px",
      "maxWidth": "643px"
    },
    "xxlarge": {
      "size": "36px",
      "height": "42px",
      "maxWidth": "854px"
    }
  },
  "radioButton": {
    "border": {
      "color": "border",
      "width": "xsmall"
    },
    "check": {
      "color": "selected-background",
      "background": {
        "color": "background-front"
      }
    },
    "color": "selected-background",
    "container": {},
    "gap": "xsmall",
    "hover": {
      "border": {}
    },
    "icons": {}
  },
  "radioButtonGroup": {
    "container": {
      "gap": "none",
      "margin": {
        "vertical": "xsmall"
      }
    }
  },
  "rangeInput": {
    "thumb": {
      "color": "background"
    },
    "track": {
      "lower": {
        "color": "green"
      },
      "upper": {
        "color": "border"
      }
    }
  },
  "select": {
    "control": {},
    "icons": {
      "color": "text"
    }
  },
  "tab": {
    "color": "text-strong",
    "active": {
      "background": "background-contrast",
      "color": "text-strong"
    },
    "hover": {
      "background": "background-contrast",
      "color": "text-strong"
    },
    "border": {
      "side": "bottom",
      "color": "border",
      "active": {
        "color": "border-strong"
      },
      "disabled": {
        "color": "border-weak"
      },
      "hover": {
        "color": "border"
      }
    },
    "disabled": {
      "color": "text-weak"
    },
    "pad": "small",
    "margin": {
      "vertical": "-2px",
      "horizontal": "none"
    }
  },
  "tabs": {
    "header": {
      "border": {
        "side": "bottom",
        "size": "small",
        "color": "border"
      }
    }
  },
  // "table": {
  //   "header": {
  //     "extend": "\n        > div { \n          height: 100%;\n          justify-content: center;\n        }\n        // align onSelect checkbox to center of header cell\n        label { \n          justify-content: center;\n        }\n      ",
  //     "pad": {
  //       "left": "none",
  //       "vertical": "none",
  //       "right": "xxsmall"
  //     }
  //   },
  //   "body": {},
  //   "row": {
  //     "hover": {
  //       "background": "background-contrast"
  //     }
  //   },
  //   "footer": {
  //     "extend": "\n        font-weight: bold;\n      "
  //   }
  // },
  "text": {
    "xsmall": {
      "size": "14px",
      "height": "20px",
      "maxWidth": "326px"
    },
    "small": {
      "size": "16px",
      "height": "22px",
      "maxWidth": "379px"
    },
    "medium": {
      "size": "18px",
      "height": "24px",
      "maxWidth": "432px"
    },
    "large": {
      "size": "22px",
      "height": "28px",
      "maxWidth": "538px"
    },
    "xlarge": {
      "size": "27px",
      "height": "33px",
      "maxWidth": "643px"
    },
    "xxlarge": {
      "size": "36px",
      "height": "42px",
      "maxWidth": "854px"
    }
  },
  "textInput": {
    "container": {}
  },
  "name": "HPE 1",
  "rounding": 4,
  "scale": 1.1,
  "spacing": 24
})

  