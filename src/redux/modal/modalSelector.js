export const ModalAdd = state => state.modal.modalAddTransaction;
export const ModalUpdate = state => state.modal.modalUpdateTransaction;
const ModalLogout = state => state.modal.modalLogout;

const modalSelectors = {
  ModalAdd,
  ModalLogout,
  ModalUpdate,
};

export default modalSelectors;
