import React from 'react';
import styles from './App.css';
import Offer from '../ui_components/Offer.jsx';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {test: 'foo'};
  }
  render() {
    return (
      <div className={styles.app}>
        lorenc shop
        <Offer id="1" />
      </div>
    );
  }
}
