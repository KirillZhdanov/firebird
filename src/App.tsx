import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchUsers } from 'src/redux/actions/userActions';
import { CardsList, SearchBar, UserInfoModal } from 'src/components';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <div>
      <SearchBar />
      <CardsList />
      <UserInfoModal />
    </div>
  );
}

export default App;
