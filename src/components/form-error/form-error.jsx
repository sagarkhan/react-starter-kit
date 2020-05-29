import React from 'react';
import PropTypes from 'prop-types';
import styles from './form-error.module.scss';

const FormError = (props) => {
  const { children } = props;
  return <p className={styles['container']}> {children} </p>;
};

FormError.propTypes = {
  children: PropTypes.array,
};

FormError.defaultProps = {
  children: [],
};

export default FormError;
