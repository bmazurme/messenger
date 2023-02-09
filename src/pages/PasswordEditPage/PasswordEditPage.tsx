import React from 'react';

import PasswordEdit from './PasswordEdit';
import withUser from '../../hoc/withUser';

function PasswordEditPage() {
  return (<PasswordEdit />);
}

export default withUser(PasswordEditPage, true);
