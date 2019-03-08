/* eslint 'global-require': 0 */
import React from 'react';
import ReactDOM from 'react-dom';

const render = () => {
  const Root = require('./components/Root').default;
  ReactDOM.render(<Root />, document.getElementById('app'));
};

if (__DEV__ && module.hot) {
  module.hot.accept('./components/Root', render);
}

render();
