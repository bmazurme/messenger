import React from 'react';

import Main from '../../components/Main';
import Content from '../../components/Content';

// import withUser from '../../hoc/withUser';
// import { useGetChatsQuery } from '../../store';

export default function MainPage() {
  // const { data = [], error, isLoading } = useGetChatsQuery('');
  return (
    <Content>
      <Main />
    </Content>
  );
}

// export default withUser(MainPage, true);
