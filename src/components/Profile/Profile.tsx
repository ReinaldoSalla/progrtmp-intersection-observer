import React, { useState, FormEvent } from 'react';
import { Event, FormData } from './Profile.types';
import { initialState, exampleUser } from './Profile.init';
import ProfileForm from '../ProfileForm';
import ProfileTable from '../ProfileTable';
import './Profile.css';

const Profile = (): JSX.Element => {
  const [formData, setFormData] = useState<FormData>(initialState);
  const [users, setUsers] = useState<Array<FormData>>([exampleUser]);

  const handleSubmit = (
    event: FormEvent<HTMLFormElement>
  ): void => {
    event.preventDefault();
    setUsers([
      ...users,
      formData
    ]);
  };

  const handleChange = ({
    target: { type, name, value, checked }}: Event
  ): void => {
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  return ( 
    <>
      <ProfileForm 
        formData={formData}
        handleSubmit={handleSubmit}
        handleChange={handleChange}
      />
      <ProfileTable users={users} />
    </>
  );
};

export default Profile;