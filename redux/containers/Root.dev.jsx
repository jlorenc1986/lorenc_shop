import ReactDOM from 'react-dom';
import React from 'react';
import { Provider } from 'react-redux';
import App from '../../client/App';
import DevTools from './DevTools';
import store from '../store';

const Root = () => (
    <Provider store={store}>
    <App />
    </Provider>
);


ReactDOM.render(<Root />, document.getElementById('root'));

export default Root;
