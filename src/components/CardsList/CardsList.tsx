import { useDispatch, useSelector } from 'react-redux';
import { getUsers } from 'src/redux/selectors/usersSelectors';
import { Card } from 'src/components';
import { removeUser } from 'src/redux/actions/userActions';
import 'src/components/CardsList/CardsList.scss';

export const CardsList = () => {
  const { users, loading, searchText } = useSelector(getUsers);
  const dispatch = useDispatch();

  const handleRemove = (id: number) => {
    dispatch(removeUser(id));
  };

  const shouldShowPlaceholder = !loading && users.length === 0;

  return (
    <div className="cards-list">
      {!loading ? (
        users.map(({ id, name, userName, email }) => (
          <Card
            key={name}
            id={id}
            name={name}
            userName={userName}
            email={email}
            searchText={searchText}
            handleRemove={handleRemove}
          />
        ))
      ) : (
        <p>Loading...</p>
      )}
      {shouldShowPlaceholder && <p>No users</p>}
    </div>
  );
};
