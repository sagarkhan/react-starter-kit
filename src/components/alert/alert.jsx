import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

class AlertComponent extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {
      visible,
      title,
      message,
      primaryHandler,
      secondaryHandler,
      primaryActionText,
      secondaryActionText,
    } = this.props;
    return (
      <Dialog open={visible}>
        <DialogTitle>{title}</DialogTitle>
        <DialogContent>
          <DialogContentText>{message}</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={secondaryHandler} color="primary">
            {secondaryActionText}
          </Button>
          <Button onClick={primaryHandler} color="primary">
            {primaryActionText}
          </Button>
        </DialogActions>
      </Dialog>
    );
  }
}

AlertComponent.propTypes = {
  visible: PropTypes.bool,
  title: PropTypes.string,
  message: PropTypes.string,
  primaryActionText: PropTypes.string,
  secondaryActionText: PropTypes.string,
  primaryHandler: PropTypes.func,
  secondaryHandler: PropTypes.func,
};

AlertComponent.defaultProps = {
  visible: true,
  title: '',
  message: '',
  primaryActionText: 'OK',
  secondaryActionText: 'Cancel',
  primaryHandler: Function,
  secondaryHandler: Function,
};

export default AlertComponent;
