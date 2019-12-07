import React from 'react';
import {
  Container,
  Title,
  Line,
  ReferencesList,
  ReferenceSpace,
  ReferenceType,
  Reference,
} from './styles';

export default function references() {
  return (
    <Container>
      <Title> Referencias </Title>
      <Line />
      <ReferencesList>
        <ReferenceSpace>
          <ReferenceType> Wiki:</ReferenceType>
          <Reference numberOfLines={1}>
            {' '}
            http://marvel.com/universe/Amun?utm_campaign=apiRef&utm_source=b9c3077391c0c76b92b25c3dc324e2a1{' '}
          </Reference>
        </ReferenceSpace>
      </ReferencesList>
    </Container>
  );
}
