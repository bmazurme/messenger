import React from 'react';

import Profile from '../../components/ProfileEdit';
import withUser from '../../hoc/withUser';

function ProfileEditPage() {
  return (<Profile />);
}

export default withUser(ProfileEditPage, true);
