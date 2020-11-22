import React, { FunctionComponent } from 'react';
import ProfileTableProps from './ProfileTable.types';
import './ProfileTable.css';

const ProfileTable: FunctionComponent<ProfileTableProps> = ({ 
  users 
}): JSX.Element => {
  return (
    <div className='profile--table__main--wrapper'>
      <table>
      <thead>
          <tr>
            <th>Name</th>
            <th>Birthday</th>
            <th>Programming Language</th>
            <th>Skills on xxx</th>
            <th>Years of experience</th>
            <th>Is an expert</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={index}>
              <td>{user.name}</td>
              <td>{user.birthday}</td>
              <td>{user.progrLang}</td>
              <td>{user.description}</td>
              <td>{user.yearsOfExperience}</td>
              <td>{user.isExpert ? 'yes' : 'no'}</td>
            </tr>
          ))}
        </tbody>       
      </table>
    </div>
  );
};

export default ProfileTable;