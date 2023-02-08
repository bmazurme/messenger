import React from 'react';
import { useErrorHandler } from 'react-error-boundary';

import Profile from './Profile';
import Preloader from '../../components/Preloader';

import withUser from '../../hoc/withUser';
import { useGetUserMeQuery } from '../../store';

function ProfilePage() {
  const handleError = useErrorHandler();
  // @ts-ignore
  const { data: user, error: userError, isLoading: isLoadingUser } = useGetUserMeQuery();

  if (userError) {
    handleError(userError);
  }

  return (isLoadingUser ? <Preloader /> : <Profile user={user} />);
}

export default withUser(ProfilePage, true);
