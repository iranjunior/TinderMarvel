import React from 'react';

import {
  Container,
  Title,
  Line,
  Image,
  Story,
  StorysList,
  StorySpace,
} from './styles';

export default function comics() {
  return (
    <Container>
      <Title> Historias </Title>
      <Line />
      <StorysList>
        <StorySpace>
          <Image source={require('~/public/imagens/500.jpg')} />
          <Story> O invencivel Home de Ferro</Story>
        </StorySpace>
        <StorySpace>
          <Image source={require('~/public/imagens/500.jpg')} />
          <Story> O invencivel Home de Ferro</Story>
        </StorySpace>
        <StorySpace>
          <Image source={require('~/public/imagens/500.jpg')} />
          <Story> O invencivel Home de Ferro</Story>
        </StorySpace>
        <StorySpace>
          <Image source={require('~/public/imagens/500.jpg')} />
          <Story> O invencivel Home de Ferro</Story>
        </StorySpace>
      </StorysList>
    </Container>
  );
}
