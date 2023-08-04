import 'src/components/UserInfoModal/UserInfoModal.scss';

import type { FC } from 'react';
import { createPortal } from 'react-dom';
import { FaTimes } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { User } from 'src/models';
import { selectUser } from 'src/redux/actions/userActions';
import { getUsers } from 'src/redux/selectors/usersSelectors';
import { isDefined } from 'src/utils/typeguards';

export const UserInfoModal: FC = () => {
  const { selectedUser } = useSelector(getUsers);
  const dispatch = useDispatch();

  const onClose = () => {
    dispatch(selectUser(null));
  };

  if (!isDefined(selectedUser)) {
    return null;
  }

  const { name, address, company } = selectedUser as User;

  return createPortal(
    <div className="modal-container">
      <div className="modal">
        <div className="modal-header">
          <h2 className="modal-title">{name}</h2>
          <button className="close-button" onClick={onClose}>
            <FaTimes />
          </button>
        </div>
        <div className="modal-content">
          <div className="address-info">
            <h3>Address:</h3>
            <p>
              <b>City:</b> {address.city}
            </p>
            <p>
              <b>Street:</b> {address.street}
            </p>
            <p>
              <b>Suite:</b> {address.suite}
            </p>
            <p>
              <b>Zip Code:</b> {address.zipCode}
            </p>
          </div>
          <div className="company-info">
            <h3>Company:</h3>
            <p>
              <b>Name:</b> {company.name}
            </p>
            <p>
              <b>Catchphrase:</b> {company.catchPhrase}
            </p>
            <p>
              <b>Business Slogan:</b> {company.bs}
            </p>
          </div>
        </div>
      </div>
      <div className="modal-overlay" onClick={onClose} />
    </div>,
    document.body,
  );
};
