import React from 'react';
import {Container} from './styles';
import CardMessage from '~/components/cardMessage';
const Main = ({navigation}) => (
  <Container>
    <CardMessage navigation={navigation} />
  </Container>
);

export default Main;
