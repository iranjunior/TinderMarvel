import React from 'react';

import {Container, Bottom, Icon} from './styles';

export default function footer() {
  return (
    <Container>
      <Bottom>
        <Icon type="Unlike">✖</Icon>
      </Bottom>
      <Bottom>
        <Icon type="Like">✔</Icon>
      </Bottom>
    </Container>
  );
}
