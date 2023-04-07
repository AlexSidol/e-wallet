import { Navigate } from 'react-router-dom';
import { useMedia } from 'components/Media/useMedia';
import Currency from 'components/Currency/Currency';

const CurrencyPage = () => {
  const isMobile = useMedia();
  if (isMobile) {
    return <Currency />;
  }
  return <Navigate to="/" />;
};

export default CurrencyPage;
