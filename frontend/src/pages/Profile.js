import React from 'react';
import { useSelector } from 'react-redux';
import Section from '../shared/Section/Section';

const Profile = () => {
  const currentUser = useSelector((state) => state.user.data);

  return (
    <Section>
      <h1>Hello, {currentUser.name}!</h1>
    </Section>
  );
};

export default Profile;
