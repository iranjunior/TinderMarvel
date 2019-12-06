import React from 'react';

import {
  Container,
  Title,
  Line,
  Image,
  Comic,
  ComicsList,
  ComicSpace,
} from './styles';

export default function comics() {
  return (
    <Container>
      <Title> Quadrinhos </Title>
      <Line />
      <ComicsList>
        <ComicSpace>
          <Image source={require('~/public/imagens/500.jpg')} />
          <Comic> O invencivel Home de Ferro</Comic>
        </ComicSpace>
        <ComicSpace>
          <Image source={require('~/public/imagens/500.jpg')} />
          <Comic> O invencivel Home de Ferro</Comic>
        </ComicSpace>
        <ComicSpace>
          <Image source={require('~/public/imagens/500.jpg')} />
          <Comic> O invencivel Home de Ferro</Comic>
        </ComicSpace>
        <ComicSpace>
          <Image source={require('~/public/imagens/500.jpg')} />
          <Comic> O invencivel Home de Ferro</Comic>
        </ComicSpace>
      </ComicsList>
    </Container>
  );
}
