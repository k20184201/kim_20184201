import { useSelector, useDispatch } from 'react-redux';
import Header from '../../components/common/24.3.2.1-2(Header)';
import { logout } from '../../modules/24.3.3-2(user)';

const HeaderContainer = () => {
  const { user } = useSelector(({ user }) => ({ user: user.user }));
  const dispatch = useDispatch();
  const onLogout = () => {
    dispatch(logout());
  };
  return <Header user={user} onLogout={onLogout} />;
};
export default HeaderContainer;
