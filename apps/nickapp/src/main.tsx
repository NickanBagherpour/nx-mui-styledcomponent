import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { theme, ThemeConfig } from '@nxnick/ui-kit';
// import '@nxnick/translations'

import App from './app/app';

ReactDOM.render(
  <StrictMode>
    <ThemeConfig theme={theme}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ThemeConfig>
  </StrictMode>,
  document.getElementById('root'),
);


