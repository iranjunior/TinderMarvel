import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';
import {Container, HeaderSpacing, BackButton} from './styles';
import UndoIcon from '~/components/icons/downincons';
import Header from '~/components/message/header';
import {Animated} from 'react-native';

const Main = ({navigation, data}) => {
  const height = new Animated.Value(350);
  const changePage = () => {
    Animated.timing(height, {
      toValue: 800,
      duration: 1000,
    }).start(() => {
      navigation.navigate('Main');
    });
  };
  return (
    <Container>
      <HeaderSpacing
        style={{
          height,
        }}>
        <Header name={data.name} img={data.thumbnail.path} />
        <BackButton onPress={changePage}>
          <UndoIcon />
        </BackButton>
      </HeaderSpacing>
    </Container>
  );
};
const mapStateToProps = state => ({
  ...state,
  data: state.characters.current,
});
export default connect(mapStateToProps)(Main);
