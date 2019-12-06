import React from 'react';

import {
  Container,
  Title,
  Line,
  ReferencesList,
  ReferenceSpace,
  Reference,
} from './styles';

export default function references() {
  return (
    <Container>
      <Title> Referencias </Title>
      <Line />
      <ReferencesList>
        <ReferenceSpace>
          <Reference> Wiki </Reference>
        </ReferenceSpace>
        <ReferenceSpace>
          <Reference> Wiki </Reference>
        </ReferenceSpace>
        <ReferenceSpace>
          <Reference> Wiki </Reference>
        </ReferenceSpace>
        <ReferenceSpace>
          <Reference> Wiki </Reference>
        </ReferenceSpace>
      </ReferencesList>
    </Container>
  );
}
