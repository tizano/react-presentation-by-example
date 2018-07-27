/** Constants */
import { SHOW_MODAL, HIDE_MODAL } from './actionsTypes';

/** Action-creators */
export const showModal = () => ({
  type: SHOW_MODAL,
  modalOpen: true,
});

export const hideModal = () => ({
  type: HIDE_MODAL,
  modalOpen: false,
});
