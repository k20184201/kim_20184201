import { useSelector } from 'react-redux';
import Header from '../../components/common/24.3.1-4(Header)';

const HeaderContainer = () => {
  const { user } = useSelector(({ user }) => ({ user: user.user }));
  return <Header user={user} />;
};
export default HeaderContainer;
