import React, {useEffect, useState} from 'react';

import {Container, CardContainer} from './styles';

import Card from '~/components/cards';
import Footer from '~/components/footerBottom';

import Storage from '~/services/asyncStorage';

const Main = ({navigation}) => {
  const [data, setData] = useState([]);
  const getData = async () => {
    setData(await Storage.get('characters'));
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <Container>
      <CardContainer>
        {data.map((character, index) => (
          <Card
            key={character.name}
            style={{zIndex: -1 * index}}
            navigation={navigation}
            data={character}
          />
        ))}
      </CardContainer>
    </Container>
  );
};

export default Main;
