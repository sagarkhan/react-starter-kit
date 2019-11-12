import React, { Component } from 'react';
import styles from '../styles/common.module.scss';

class ExampleContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className={styles['container']}>
        <p className={styles['container__heading']}> This is example Container </p>
      </div>
    );
  }
}

export default ExampleContainer;
