import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { CardsList, SearchBar, UserInfoModal } from 'src/components';
import { fetchUsers } from 'src/redux/actions/userActions';

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <>
      <SearchBar />
      <CardsList />
      <UserInfoModal />
    </>
  );
};
