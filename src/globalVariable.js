const size = {
  sm: 600,
  md: 960,
  lg: 1200,
  xl: 1440,
};

export const breakpoints = {
  sm: `(min-width: ${size.sm}px)`,
  md: `(min-width: ${size.md}px)`,
  lg: `(min-width: ${size.lg}px)`,
  xl: `(min-width: ${size.xl}px)`,
};

const colors = {
  primary: {
    main: '#000011',
    25: '#F0F6FF',
    150: '#9bda77',
    350: '#9bda77',
    400: '#9bda77',
    500: '#757575'
  },
  secondary: {
    main: '#1DAF63',
  },
  brand: '#00801F',
  greys: {
    main: '#a7a7a7',
    25: '#F6F7F8',
    50: '#EBECEF',
    200: '#ededed',
    400: '#c7c7c7',
    500: '#a7a7a7',
    600: '#676767',
    700: '#3d3d3d',
    900: '#000000',
  },
  common: {
    black: '#000000',
    white: '#ffffff',
  },
  error: '#B52727',
  success: '#4BBF82',
  warning: '#FFA841',
};

export const palette = {
  primary: colors.primary,
  secondary: colors.secondary,
  brand: colors.brand,
  greys: colors.greys,
  common: colors.common,
  error: colors.error,
  success: colors.success,
  warning: colors.warning,
};

export const heights = {
  appbar: '84px',
};
