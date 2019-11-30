import React from 'react';
import {
  PanelBackground,
  ImageProfile,
  ViewMain,
  Bottom,
  Icon,
  Title,
  Description,
  Clicked,
} from './styles';

const Main = ({navigation}) => (
  <PanelBackground>
    <ViewMain type="Image">
      <Clicked onPress={() => navigation.navigate('Details')}>
        <ImageProfile source={require('~/public/imagens/500.jpg')} />
      </Clicked>
      <ViewMain type="Title">
        <Title> Homem de Ferro</Title>
        <Description>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry...
        </Description>
      </ViewMain>
    </ViewMain>
    <ViewMain type="Footer">
      <Bottom>
        <Icon type="Unlike">✖</Icon>
      </Bottom>
      <Bottom>
        <Icon type="Like">✔</Icon>
      </Bottom>
    </ViewMain>
  </PanelBackground>
);

export default Main;
