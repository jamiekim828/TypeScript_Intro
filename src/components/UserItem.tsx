import React from 'react';
import { UserType } from './UserList';

type PropType = {
  user: UserType;
};

export default function UserItem({ user }: PropType) {
  type A = {
    street: string;
    suite: string;
    city: string;
    zipCode: string;
  };
  const userAddress: A = user.address;
  const keys = Object.keys(userAddress) as (keyof A)[];

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
          {keys.map((u) => {
            return (
              <li key={u}>
                {`${u}`} : {`${userAddress[u]}`}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
