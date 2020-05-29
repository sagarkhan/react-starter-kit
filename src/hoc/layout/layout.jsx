import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import styles from './layout.module.scss';
import AppHeader from '../../components/app-header/app-header';
import Loader from '../../components/loader/loader';
import StatusModal from '../../components/status-modal/status-modal';
import errorConfigs from '../../utils/error-configs';
import { errorHandler } from '../../store/common/actions/common.actions';
import CustomSnackbar from '../../components/snackbar/snackbar.component';

const useStyles = (theme) => ({
  root: {
    background: theme.palette.background.default,
    color: theme.palette.text.primary,
  },
});

class Layout extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleError(error, errorHandlerAction) {
    switch (error.status) {
      case 401:
        return (
          <StatusModal
            message={errorConfigs['401'].message}
            status="failed"
            onClose={() => errorHandlerAction(null)}
          />
        );
      case 403:
        return (
          <StatusModal
            message={errorConfigs['403'].message}
            status="failed"
            onClose={() => errorHandlerAction(null)}
          />
        );
      default:
        return (
          <StatusModal
            message={errorConfigs['default'].message}
            status="failed"
            onClose={() => errorHandlerAction(null)}
          />
        );
    }
  }

  render() {
    const {
      error,
      action__errorHandler,
      children,
      common,
      classes,
    } = this.props;
    const { loader, snackbar } = common;
    return (
      <div className={`${classes.root} ${styles.container}`}>
        <AppHeader {...this.props} />
        <div className={styles['routes']}>{children}</div>
        {loader ? <Loader /> : []}
        {<CustomSnackbar {...snackbar} />}
        {error ? this.handleError(error, action__errorHandler) : []}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  common: { ...state.common },
  login: { ...state.login },
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      action__errorHandler: errorHandler,
    },
    dispatch,
  );

Layout.propTypes = {
  error: PropTypes.object,
  children: PropTypes.object,
  classes: PropTypes.object,
  common: PropTypes.object,
  action__errorHandler: PropTypes.func,
};

Layout.defaultProps = {
  error: null,
  children: {},
  classes: {},
  common: {},
  action__errorHandler: Function,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withStyles(useStyles)(Layout));
