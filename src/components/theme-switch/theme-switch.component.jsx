import React from 'react';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Switch from '@material-ui/core/Switch';
import { switchTheme } from '../../store/common/actions/settings.actions';
import { showSnackbar } from '../../store/common/actions/common.actions';

const ThemeSwitchComponent = ({
  theme,
  action__switchTheme,
  action__showSnackbar,
}) => {
  const changeTheme = () => {
    let nextTheme = '';
    if (theme === 'dark') {
      nextTheme = 'Light';
      action__switchTheme('light');
    } else {
      nextTheme = 'Dark';
      action__switchTheme('dark');
    }
    action__showSnackbar({
      show: true,
      type: 'success',
      message: `Switching to ${nextTheme} theme!`,
    });
  };

  return (
    <Switch
      checked={theme === 'dark'}
      onChange={changeTheme}
      color="secondary"
      inputProps={{ 'aria-label': 'primary checkbox' }}
    />
  );
};

const mapStateToProps = (state) => ({
  theme: state.settings.theme,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      action__switchTheme: switchTheme,
      action__showSnackbar: showSnackbar,
    },
    dispatch,
  );

ThemeSwitchComponent.propTypes = {
  theme: PropTypes.string,
  action__switchTheme: PropTypes.func,
  action__showSnackbar: PropTypes.func,
};

ThemeSwitchComponent.defaultProps = {
  theme: null,
  action__switchTheme: Function,
  action__showSnackbar: Function,
};

const ThemeSwitch = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ThemeSwitchComponent);
export default ThemeSwitch;
