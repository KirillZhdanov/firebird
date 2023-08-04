export interface User {
  id: number;
  name: string;
  userName: string;
  email: string;
  address: Address;
  company: Company;
}

export interface Address {
  city: string;
  street: string;
  suite: string;
  zipCode: string;
}

interface Company {
  bs: string;
  catchPhrase: string;
  name: string;
}
