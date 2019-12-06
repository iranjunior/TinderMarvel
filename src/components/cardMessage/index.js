import React from 'react';
import {
  Clickeble,
  Card,
  ImageSpacing,
  Image,
  Descriptions,
  Title,
  Description,
} from './styles';

export default function cardMessage({navigation}) {
  return (
    <Card>
      <Clickeble onPress={() => navigation.navigate('Message')}>
        <ImageSpacing>
          <Image source={require('~/public/imagens/500.jpg')} />
        </ImageSpacing>
        <Descriptions>
          <Title> Homem de Ferro</Title>
          <Description>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry...
          </Description>
        </Descriptions>
      </Clickeble>
    </Card>
  );
}
