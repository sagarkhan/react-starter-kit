import React from 'react';
import { makeStyles } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import styles from './app-header.module.scss';
import ThemeSwitch from '../theme-switch/theme-switch.component';

const useStyles = makeStyles((theme) => ({
  root: {
    background: theme.palette.background.paper,
    color: theme.palette.text.primary,
  },
}));

const AppHeader = () => {
  const classes = useStyles();
  return (
    <AppBar className={`${classes.root}`} position="static">
      <div className={styles.header}>
        <span>React Starter</span>
        <ThemeSwitch />
      </div>
    </AppBar>
  );
};

export default AppHeader;
