import React from 'react';
import {
  ImageProfile,
  Title,
  Description,
  Clicked,
  TextArea,
  Card,
} from './styles';

const Main = ({navigation, style}) => (
  <Card style={style}>
    <ImageProfile source={require('~/public/imagens/500.jpg')} />
    <TextArea type="Title">
      <Title> Homem de Ferro</Title>
      <Description>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry...
      </Description>
    </TextArea>
  </Card>
);

export default Main;
