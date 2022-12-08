import React from 'react';

type UserType = {
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

export default function UserItem({ user }: { user: UserType }) {
  return (
    <div className='user'>
      <img
        src='https://freesvg.org/img/abstract-user-flat-4.png'
        alt='profile-img'
        className='profile-img'
      />
      <p>Name: {user.name}</p>
      <p>User name: {user.username}</p>
      <p>Phone: {user.phone}</p>
      <div className='address'>
        Address:{' '}
        <ul>
          <li>street: {user.address.street}</li>
          <li>suite: {user.address.suite}</li>
          <li>city: {user.address.city}</li>
          <li>zipcode: {user.address.zipCode}</li>
        </ul>
      </div>
    </div>
  );
}
