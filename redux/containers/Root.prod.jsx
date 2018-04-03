import React, { PureComponent } from 'react';
import { Provider } from 'react-redux';
import App from '../../client/App';

export default class Root extends PureComponent {
  render() {
    return (
      <Provider store={props.store}>
          <App />
      </Provider>
    );
  }
}
