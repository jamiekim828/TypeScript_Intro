import React from 'react';
import UserItem from './UserItem';

export type UserType = {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipCode: string;
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
};

export default function UserList({ user }: { user: UserType[] }) {
  return (
    <div className='user-list-container'>
      <div className='header'>
        <h1>User List</h1>
      </div>
      <div className='user-wrapper'>
        {user.map((user) => (
          <UserItem user={user} />
        ))}
      </div>
    </div>
  );
}
