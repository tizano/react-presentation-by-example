import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

/** Modal Components */
import LoginModal from '../components/LoginModal';
import SignupModal from '../components/SignupModal';

/** Modal Type Constants */
import { LOGIN_MODAL, SIGNUP_MODAL } from './modaltypes';

const MODAL_COMPONENTS = {
  LOGIN_MODAL: LoginModal,
  SIGNUP_MODAL: SignupModal
};

const ModalContainer = ({ modalType }) => {
  if (!modalType) {
    return null;
  }

  const SpecificModal = MODAL_COMPONENTS[modalType];

  return <SpecificModal />;
};

ModalContainer.propTypes = {
  modalType: PropTypes.string.isRequired,
};

const mapStateToProps = state => ({
  modalType: state.modal.modalType,
});

export default connect(mapStateToProps)(ModalContainer);
