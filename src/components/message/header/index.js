import React from 'react';
import {Container, ImageSpacing, Image, Title} from './styles';
import params from '~/utils/parmsMavel';
export default function messageHeader({img, name}) {
  return (
    <Container>
      <ImageSpacing>
        <Image source={{uri: `${img}/portrait_incredible.jpg?${params()}`}} />
        <Title> {name}</Title>
      </ImageSpacing>
    </Container>
  );
}
