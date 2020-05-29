import React from 'react';
import styles from './loader.module.scss';

const Loader = () => (
  <div className={styles['loader']}>
    <div className={styles['loader__lds-ellipsis']}>
      <div />
      <div />
      <div />
      <div />
    </div>
  </div>
);

export default Loader;
