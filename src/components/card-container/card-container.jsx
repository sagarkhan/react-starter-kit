import React from 'react';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper/Paper';
import makeStyles from '@material-ui/core/styles/makeStyles';
import styles from './card-container.module.scss';

const useStyles = makeStyles((theme) => ({
  root: {
    background: theme.palette.background.paper,
    color: theme.palette.text.primary,
  },
}));

const CardContainer = ({ children }) => {
  const classes = useStyles();
  return (
    <Paper elevation={2} className={`${classes.root} ${styles.container}`}>
      {children}
    </Paper>
  );
};

CardContainer.propTypes = {
  children: PropTypes.object,
};

CardContainer.defaultProps = {
  children: {},
};

export default CardContainer;
