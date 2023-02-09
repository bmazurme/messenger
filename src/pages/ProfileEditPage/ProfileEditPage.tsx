import React from 'react';

import Profile from './ProfileEdit';
import withUser from '../../hoc/withUser';

function ProfileEditPage() {
  return (<Profile />);
}

export default withUser(ProfileEditPage, true);
