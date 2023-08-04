import 'src/components/Card/Card.scss';

import type { FC, MouseEvent } from 'react';
import { FaTimes } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { selectUser } from 'src/redux/actions/userActions';
import { highlightIfMatch } from 'src/utils/highlightIfMatch';

interface Props {
  id: number;
  name: string;
  userName: string;
  email: string;
  searchText: string;
  handleRemove: (id: number) => void;
}

export const Card: FC<Props> = ({ id, name, userName, email, searchText, handleRemove }) => {
  const dispatch = useDispatch();
  const highlightNameClassName = highlightIfMatch({ textToSearch: name, searchText });
  const highlightUserNameClassName = highlightIfMatch({
    textToSearch: userName,
    searchText,
  });
  const highlightEmailClassName = highlightIfMatch({
    textToSearch: email,
    searchText,
  });

  const onSelectCard = () => {
    dispatch(selectUser(id));
  };

  const onRemove = (e: MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    handleRemove(id);
  };

  return (
    <div className="card" onClick={onSelectCard}>
      <div className="content">
        <h2 className={highlightNameClassName}>{name}</h2>
        <p className={highlightUserNameClassName}>
          <b>Username:</b> {userName}
        </p>
        <p className={highlightEmailClassName}>
          <b>Email:</b> {email}
        </p>
      </div>
      <button className="close-icon" onClick={onRemove}>
        <FaTimes />
      </button>
    </div>
  );
};
