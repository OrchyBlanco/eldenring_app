import { createTheme, ThemeOptions } from "@mui/material";



 const themeOptions: ThemeOptions = {
  palette: {
    mode:'dark',
    primary: {
      main: '#D6AD60',
      light: '#ffdf8f',
      dark: '#a27e33',
    },
    secondary: {
      main: '#B68D40',
      light: '#ebbd6e',
      dark: '#836011',
    },
    background: {
      default: '#122620',
      paper: '#394e47',
    },
    text: {
      primary: '#f4ebd0',
      secondary: '#c1b99f',
      disabled: 'rgba(244,235,208,0.5)',
    },
    error: {
      main: '#cd4217',
      light: '#ff7344',
      dark: '#950000',
    },
    success: {
      main: '#73ce42',
      light: '#a7ff73',
      dark: '#3d9c02',
    },
    info: {
      main: '#6089d6',
      light: '#94b9ff',
      dark: '#275ca4',
    },
    warning: {
      main: '#f57c00',
      light: '#ffad42',
      dark: '#bb4d00',
    },
  },
  typography: {
    fontFamily: 'Amethysta',
  },
};

export const customTheme = createTheme(themeOptions);