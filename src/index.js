import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Security } from '@okta/okta-react';

import App from './App';
import registerServiceWorker from './registerServiceWorker';

const oktaConfig = {
  issuer: `https://dev-395599.oktapreview.com/oauth2/default`,
  redirect_uri: `${window.location.origin}/implicit/callback`,
  client_id: "0oafvepthfbnYMMlX0h7",
};

ReactDOM.render(
  <BrowserRouter>
    <Security {...oktaConfig}>
      <App />
    </Security>
  </BrowserRouter>,
  document.getElementById('root'),
);
registerServiceWorker();

if (module.hot) module.hot.accept();