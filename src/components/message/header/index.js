import React from 'react';
import {Container, ImageSpacing, Image, Title} from './styles';

export default function messageHeader() {
  return (
    <Container>
      <ImageSpacing>
        <Image source={require('~/public/imagens/500.jpg')} />
        <Title> Homem de Ferro</Title>
      </ImageSpacing>
    </Container>
  );
}
