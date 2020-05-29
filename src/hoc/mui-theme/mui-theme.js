import createMuiTheme from '@material-ui/core/styles/createMuiTheme';

const overrides = {
  MuiButton: {
    label: {
      textTransform: 'capitalize',
    },
  },
};

const lightPalette = {
  typography: {
    fontSize: 14,
  },
  breakpoints: {
    keys: ['xs', 'sm', 'md', 'lg', 'xl'],
    values: {
      xs: 0,
      lg: 1280,
      sm: 600,
      xl: 1920,
      md: 960,
    },
  },
  palette: {
    type: 'light',
    background: {
      default: '#fff',
      paper: '#fafafa',
    },
    action: {
      active: 'rgba(0, 0, 0, 0.54)',
      hover: 'rgba(0, 0, 0, 0.04)',
      selected: 'rgba(0, 0, 0, 0.08)',
      disabled: 'rgba(0, 0, 0, 0.26)',
      disabledBackground: 'rgba(0, 0, 0, 0.12)',
    },
    text: {
      primary: 'rgba(0, 0, 0, 0.87)',
      secondary: 'rgba(0, 0, 0, 0.54)',
      disabled: 'rgba(0, 0, 0, 0.38)',
    },
    primary: {
      main: '#3f51b5',
    },
    secondary: {
      main: '#f50057',
    },
  },
  overrides,
};

const darkPalette = {
  typography: {
    fontSize: 14,
  },
  palette: {
    type: 'dark',
    background: {
      default: '#303030',
      paper: '#424242',
    },
    action: {
      active: '#fff',
      hover: 'rgba(255, 255, 255, 0.08)',
      selected: 'rgba(255, 255, 255, 0.16)',
      disabled: 'rgba(255, 255, 255, 0.3)',
      disabledBackground: 'rgba(255, 255, 255, 0.12)',
    },
    text: {
      primary: '#fff',
      secondary: 'rgba(255, 255, 255, 0.7)',
      disabled: 'rgba(255, 255, 255, 0.5)',
    },
    divider: 'rgba(255, 255, 255, 0.12)',
    primary: {
      main: '#bb86fc',
    },
    secondary: {
      main: '#03dac6',
    },
  },
  overrides,
};

export const lightTheme = createMuiTheme(lightPalette);
export const darkTheme = createMuiTheme(darkPalette);
