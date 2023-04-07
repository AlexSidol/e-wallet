import { extendTheme } from '@chakra-ui/react';
import { switchAnatomy } from '@chakra-ui/anatomy';
import { createMultiStyleConfigHelpers } from '@chakra-ui/react';

const colors = {
  components: {
    Switch: {
      baseStyle: {
        icon: {
          color: 'white',
        },
        control: {
          border: '1px',
          borderColor: 'gray.300',
          borderRadius: 'base',
          _disabled: {
            borderColor: 'gray.300',
            bg: 'gray.200',
          },
        },
        label: {
          fontWeight: 'medium',
          color: 'gray.900',
        },
      },
    },
  },
  expenses: '#FED057', //yellow
  products: '#FFD8D0', //light pink
  car: '#FD9498', //pink
  care: '#C5BAFF', // purple
  child: '#6E78E8', // purple blue
  household: '#4A56E2', //blue
  education: '#81E1FF', //skyblue
  leisure: '#24CCA7', //light green
  other: '#00AD84', //green
  grey: '#cccc', //grey

  mainBrand: '#',
  secondaryBrand: '#',

  textMain: '#',
  textSecondary: '#',
  placeholder: '#',

  backgroundMain: '#',
  backgroundDark: '#',

  backDrop: 'rgba(0, 0, 0, 0.6)',

  accent: '#',
  hover: '#',
  focus: '#',
  muted: '#',
  disabled: '',

  etc: 'use declarative names (not black, green, red)',
};

const sizes = {
  container: {
    sm: '480px',
    md: '768px',
    lg: '1280px',
    xl: '1536px',
  },
};

const breakpoints = {
  sm: '320px',
  md: '768px',
  lg: '1280px',
  xl: '1536px',
  '2xl': '1920px',
};

const radii = {
  button: '20px',
};

const space = {
  spacing: value => `${4 * value}px`,
};

const fonts = {
  main: '',
  circle: 'Circle',
  poppins: 'Poppins',
};

const shadows = {
  pink: '0px 1px 4px rgba(255,101,150, 0.8)',
  green: '0px 1px 4px rgba(36,204,167, 0.8)',
};

const fontSizes = {};

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(switchAnatomy.keys);

const baseStyle = definePartsStyle({
  container: {},
  thumb: {
    position: 'relative',
    size: 'xl',
    bg: colors.leisure,
    boxShadow: shadows.green,
    width: '44px',
    height: '44px',
    mt: '-2px',
    _checked: {
      ml: '16px',
      bg: '#FF6596',
      boxShadow: shadows.pink,
    },
  },
  track: {
    display: 'flex',
    alignItems: 'stretch',
    bg: 'white',
    border: '1px',
    borderColor: 'gray.200',
    width: '80px',
    height: '40px',
    padding: 0,
  },
});

export const switchTheme = defineMultiStyleConfig({ baseStyle });

export const theme = extendTheme({
  colors,
  breakpoints,
  radii,
  space,
  fonts,
  fontSizes,
  sizes,
  components: {
    Switch: switchTheme,
  },

  shadows,
});
