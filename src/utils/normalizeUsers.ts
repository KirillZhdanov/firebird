import { User } from 'src/models';
import { UsersResponse } from 'src/redux/types';

export const normalizeUsers = (users: UsersResponse[]): User[] => {
  return users.map(({ id, name, username, email, address, company }) => ({
    id,
    name,
    userName: username,
    email,
    address: {
      street: address.street,
      suite: address.suite,
      city: address.city,
      zipCode: address.zipcode,
    },
    company,
  }));
};
