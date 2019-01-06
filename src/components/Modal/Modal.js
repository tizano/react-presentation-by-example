import React, { Component } from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';
import { connect } from 'react-redux';
import * as modalAction from '../../actions/modalAction';

const styles = theme => ({
  modalOverlayDiv: {
    position: 'fixed',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    height: '100%',
    width: '100%',
    zIndex: 1000,
    backgroundColor: props => ((props.overlayColor) ? props.overlayColor : theme.color.black),
    opacity: props => ((props.opacity) ? props.opacity : '.50'),
  },
  modalContentDiv: {
    position: 'fixed',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    zIndex: 10000,
    overflow: 'auto',
    padding: '4px',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalDialogDiv: {
    position: 'relative',
    outline: 0,
    width: 'auto',
    maxWidth: 'auto',
    cursor: 'default',
    borderRadius: '4px',
    backgroundColor: theme.color.white,
    padding: '1.5rem',
    minWidth: '18rem',
    minHeight: '9rem',
  },
});

class ModalContainer extends Component {
  componentDidMount() {
    if (this.props.modalOpen) {
      window.addEventListener('keydown', this.listenKeyboard.bind(this), true);
    }
  }

  componentWillUnmount() {
    if (this.props.modalOpen) {
      window.removeEventListener('keydown', this.listenKeyboard.bind(this), true);
    }
  }

  onOverlayClick() {
    this.props.hideModal();
  }

  /* eslint-disable */
  onDialogClick(event) {
    event.stopPropagation();
  }
  /* eslint-enable */

  listenKeyboard(event) {
    if (event.key === 'Escape' || event.keyCode === 27) {
      this.props.hideModal();
    }
  }

  render() {
    const { classes, children } = this.props;
    return (
      <div>
        <div className={classes.modalOverlayDiv} />
        <div
          className={classes.modalContentDiv}
          onClick={e => this.onOverlayClick(e)}
          onKeyPress={e => this.onOverlayClick(e)}
          role="button"
          tabIndex="0"
        >
          <div
            className={classes.modalDialogDiv}
            onClick={e => this.onDialogClick(e)}
            onKeyPress={e => this.onDialogClick(e)}
            role="button"
            tabIndex="0"
          >
            {children}
          </div>
        </div>
      </div>
    );
  }
}

ModalContainer.propTypes = {
  classes: PropTypes.object.isRequired,
  children: PropTypes.node.isRequired,
  hideModal: PropTypes.func.isRequired,
  modalOpen: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({
  modalOpen: state.modal.modalOpen,
});

const mapDispatchToProps = dispatch => ({
  hideModal: () => dispatch(modalAction.hideModal()),
});

const Modal = connect(mapStateToProps, mapDispatchToProps)(ModalContainer);

export default injectSheet(styles)(Modal);
