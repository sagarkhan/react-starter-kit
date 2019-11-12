import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import styles from './app-header.module.scss';

const AppHeader = () => (
  <AppBar className={styles.header} color="primary" position="static">
    <div />
  </AppBar>
);

export default AppHeader;
