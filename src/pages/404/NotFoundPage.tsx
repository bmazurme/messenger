import React from 'react';

import NotFound from '../../components/NotFound/NotFound';
import Content from '../../components/Content';

export default function NotFoundPage() {
  return (<Content children={(<NotFound />)} />);
}
