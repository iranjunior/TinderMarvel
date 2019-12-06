import React from 'react';

import {Container} from './styles';

import Card from '~/components/cards';
import Footer from '~/components/footerBottom';

const Main = ({navigation}) => {
  return (
    <Container>
      <Card navigation={navigation} />
      <Footer />
    </Container>
  );
};

export default Main;
