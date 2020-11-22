import React from 'react';
import './User.css';

// const User = (): JSX.Element => {
//   return (
//     <div className='user__main--wrapper'>
//       <p className='user__text'> User's name:</p>
//       <p className='user__text'> User's birthday: </p>
//       <p className='user__text'> The user is proficient at: </p>
//       <p className='user__text'> The user skills at Javasript are:</p>
//       <p className='user__text'> The user has 1 year of experience</p>
//       <p className='user__text'> The user is not an expert yet</p>
//     </div>
//   );
// };

const User = (): JSX.Element => {
  return (
    <div className='user__main--wrapper'>
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
          <tr>
            <td>Reinaldo</td>
            <td>15/02/1995</td>
            <th>TypeScript</th>
            <th>Frontend, React, GraphQL</th>
            <th>2</th>
            <th>No</th>
          </tr>
          <tr>
            <td>Joao</td>
            <td>21/11/2020</td>
            <th>MetaScript</th>
            <th>AI</th>
            <th>10</th>
            <th>No</th>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default User;