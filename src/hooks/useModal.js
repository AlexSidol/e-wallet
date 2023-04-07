import { useSelector } from 'react-redux';
import modalSelectors from '../redux/modal/modalSelector';

export const useModals = () => {
  const isModalAdd = useSelector(modalSelectors.ModalAdd);
  const isModalUpdate = useSelector(modalSelectors.ModalUpdate);
  const isModalLogout = useSelector(modalSelectors.ModalLogout);

  return {
    isModalAdd,
    isModalLogout,
    isModalUpdate,
  };
};
// export const useModals = () => useSelector(selectModal);

// for example: const   { isModalAdd, isModalLogout,} = useModals();
// you will have   const isModalAdd = state.modal.modalAddTransaction;
//                 const isModalLogout = state.modal.modalLogout;
