import React from 'react';
import { renderToString } from 'react-dom/server';
import { Provider } from 'react-redux';
import reduxStore from '../app/store';
import { StaticRouter } from 'react-router-dom';
import Helmet from 'react-helmet';
import App from '../app';
import htmlTemplate from './template/index';
const renderer = (route, initialState, styles) => {
  const store = reduxStore(initialState);
  const markup = renderToString(
    <StaticRouter location={route.path} context={{}}>
      <Provider store={store}>
        <App />
      </Provider>
    </StaticRouter>,
  );
  const helmet = Helmet.renderStatic();
  return htmlTemplate(markup, styles, initialState, helmet);
};

export default renderer;
