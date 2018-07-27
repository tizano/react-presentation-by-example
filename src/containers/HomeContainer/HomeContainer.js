import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import '../../App.css';
import Box from '../../components/Box';
import FloatingButton from '../../components/FloatingButton';
import InputText from '../../components/InputText';
import Modal from '../../components/Modal';


const HomeContainer = ({ modalOpen }) => (
  <Fragment>
    <Box title="Test box" bgColor="#61da00" />
    <Box title="Test box" bgColor="#61dafb">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
      </p>
      <Box title="Inside box" />
      <p>
        Un input&nbsp;
        <InputText />
      </p>
    </Box>
    <FloatingButton>
      Cliques sur moi !
    </FloatingButton>
    {modalOpen &&
      <Modal>
        azeajze
      </Modal>
    }
  </Fragment>
);

HomeContainer.propTypes = {
  modalOpen: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({
  modalOpen: state.modal.modalOpen,
});

export default connect(mapStateToProps)(HomeContainer);
