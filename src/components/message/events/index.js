import React from 'react';

import {
  Container,
  Title,
  Line,
  Image,
  Event,
  EventsList,
  EventSpace,
} from './styles';

export default function comics() {
  return (
    <Container>
      <Title> Eventos </Title>
      <Line />
      <EventsList>
        <EventSpace>
          <Image source={require('~/public/imagens/500.jpg')} />
          <Event> O invencivel Home de Ferro</Event>
        </EventSpace>
        <EventSpace>
          <Image source={require('~/public/imagens/500.jpg')} />
          <Event> O invencivel Home de Ferro</Event>
        </EventSpace>
        <EventSpace>
          <Image source={require('~/public/imagens/500.jpg')} />
          <Event> O invencivel Home de Ferro</Event>
        </EventSpace>
        <EventSpace>
          <Image source={require('~/public/imagens/500.jpg')} />
          <Event> O invencivel Home de Ferro</Event>
        </EventSpace>
      </EventsList>
    </Container>
  );
}
