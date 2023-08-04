import 'src/components/SearchBar/SearchBar.scss';

import { KeyboardEventHandler, useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchUsers, searchUser } from 'src/redux/actions/userActions';

const ENTER_KEY = 'Enter';

export const SearchBar = () => {
  const [searchValue, setSearchValue] = useState('');
  const dispatch = useDispatch();

  const onKeyUp: KeyboardEventHandler<HTMLInputElement> = (e) => {
    if (e.key === ENTER_KEY) {
      handleSearch();
    }
  };

  const handleSearch = () => {
    dispatch(searchUser(searchValue));
  };

  const handleReset = () => {
    setSearchValue('');
    dispatch(searchUser(''));
    dispatch(fetchUsers());
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search..."
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        onKeyUp={onKeyUp}
      />
      <button className="search-button" onClick={handleSearch}>
        Search
      </button>
      <button className="reset-button" onClick={handleReset}>
        Reset
      </button>
    </div>
  );
};
