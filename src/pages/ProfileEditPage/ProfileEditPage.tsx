import React from 'react';
import { useErrorHandler } from 'react-error-boundary';

import Profile from './ProfileEdit';
import Preloader from '../../components/Preloader';

import withUser from '../../hoc/withUser';
import { useGetUserMutation } from '../../store';

function ProfileEditPage() {
  const handleError = useErrorHandler();
  // @ts-ignore
  const { data: user, error: userError, isLoading: isLoadingUser } = useGetUserMutation();

  if (userError) {
    handleError(userError);
  }

  return (isLoadingUser ? <Preloader /> : <Profile user={user} />);
}

export default withUser(ProfileEditPage, true);
