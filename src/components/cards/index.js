import React from 'react';
import {ImageProfile, ViewMain, Title, Description, Clicked} from './styles';

const Main = ({navigation}) => (
  <ViewMain type="Image">
    <Clicked onPress={() => navigation.navigate('Details')}>
      <ImageProfile source={require('~/public/imagens/500.jpg')} />
      <ViewMain type="Title">
        <Title> Homem de Ferro</Title>
        <Description>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry...
        </Description>
      </ViewMain>
    </Clicked>
  </ViewMain>
);

export default Main;
