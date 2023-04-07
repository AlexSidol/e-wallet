import { DiagramTab } from 'components/DiagramTab/DiagramTab';
import ModalLogout from 'components/ModalLogout/ModalLogout';
import { useModals } from 'hooks/useModal';

const StatisticsPage = () => {
  const { isModalLogout } = useModals();
  return (
    <>
      <DiagramTab />
      {isModalLogout && <ModalLogout />}
    </>
  );
};

export default StatisticsPage;
