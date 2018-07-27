/** Constants */
import { SHOW_MODAL, HIDE_MODAL } from '../actions/actionsTypes';

/** Initial State */
const initialModalState = {
  modalOpen: false,
};

/** Modal reducer */
export default function (state = initialModalState, action) {
  const newState = Object.assign({}, state);

  switch (action.type) {
    case SHOW_MODAL:
      newState.modalOpen = action.modalOpen;
      break;

    case HIDE_MODAL:
      return initialModalState;

    default:
      return state;
  }

  return newState;
}
