export type UsersStateType = {
  users: UserType[];
  loading: boolean;
};

export type UserType = {
  name: {
    title: string;
    first: string;
    last: string;
  },
  location: {
    country: string;
    state: string;
    city: string;
    street: {
      number: number;
      name: string;
    }
  },
  email: string;
  phone: string;
  picture: {
    large: string;
    medium: string;
    thumbnail: string;
  };
  dob: {
    date: string;
    age: number;
  }
};

export type UsersResponseType = {
  results: UserType[];
  info: {
    seed: string;
    results: number;
    page: number;
    version: string;
  };
};