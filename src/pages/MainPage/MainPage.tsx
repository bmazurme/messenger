import React from 'react';

import Main from '../../components/Main';
import Content from '../../components/Content';

import withUser from '../../hoc/withUser';

function MainPage() {
  return (
    <Content>
      <Main />
    </Content>
  );
}

export default withUser(MainPage, true);
