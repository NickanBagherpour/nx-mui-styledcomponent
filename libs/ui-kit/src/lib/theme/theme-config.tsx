import { ReactNode } from 'react';
import { createTheme } from '@mui/material/styles';
import { Theme } from '@mui/material/styles/createTheme';
import { StyleSheetManager } from 'styled-components';
import RTLPlugin from 'stylis-plugin-rtl';
import { ThemeProvider } from '@mui/material/styles';

interface RTLProps {
  isRtl: boolean,
  children: ReactNode,
}

const RTL = (props: RTLProps) => {
  const stylisPlugins = props.isRtl ? [RTLPlugin] : [];
  return (
    <StyleSheetManager stylisPlugins={stylisPlugins}>
      {props.children}
    </StyleSheetManager>
  );
};

export interface ThemeConfigProps {
  theme: Theme,
  children: ReactNode,
}

const ThemeConfig = (props: ThemeConfigProps) => {
  const isRtl = props.theme.direction === 'rtl';
  return (
    <RTL isRtl>
      <ThemeProvider theme={props.theme}>
        {/*<CssBaseline />*/}
        <div dir={isRtl ? 'rtl' : 'ltr'}>
          {props.children}
        </div>
      </ThemeProvider>
    </RTL>
  );
};

export default ThemeConfig;
