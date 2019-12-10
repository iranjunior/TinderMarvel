import React from 'react';
import {connect} from 'react-redux';
import {LIKE_CHARACTERS, NOPE_CHARACTERS} from '~/constants/actions';
import {Container, Bottom, Icon} from './styles';

const handleLike = () => ({
  type: LIKE_CHARACTERS,
  payload: 'LIKE_BUTTOM_ACTIVED',
});

const handleNope = () => ({
  type: NOPE_CHARACTERS,
  payload: 'NOPE_BUTTOM_ACTIVED',
});

const footer = ({dispatch}) => {
  return (
    <Container>
      <Bottom
        onPress={() => {
          dispatch(handleNope());
        }}>
        <Icon type="Unlike">✖</Icon>
      </Bottom>
      <Bottom
        onPress={() => {
          dispatch(handleLike());
        }}>
        <Icon type="Like">✔</Icon>
      </Bottom>
    </Container>
  );
};

export default connect(() => ({}))(footer);
