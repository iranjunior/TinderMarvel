import React from 'react';

import Header from '~/components/message/header';
import Description from '~/components/message/descripton';
import Comics from '~/components/message/comics';
import Storys from '~/components/message/storys';
import Events from '~/components/message/events';
import References from '~/components/message/references';
import {Container} from './styles';

const Main = ({navigation}) => (
  <Container>
    <Header />
    <Description />
    <Comics />
    <Storys />
    <Events />
    <References />
  </Container>
);

export default Main;
