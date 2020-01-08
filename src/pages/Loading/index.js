import React, {useEffect, useCallback} from 'react';

import User from '~/services/asyncStorage';
import Client from '~/services/apis/backend';
import {Container, Lottie} from './styles';

export default function Loading({navigation}) {
  useEffect(() => {
    preparing();
  }, [preparing, navigation]);

  const getUser = useCallback(async (id, token) => {
    const response = await Client.get(`/v1/user/${id}`, {
      headers: {
        authorization: `Bearer ${token}`,
      },
    });
    User.merge('user', response.data.user);
  }, []);

  const getCharacters = useCallback(async token => {
    const response = await Client.get('/v1/characters', {
      headers: {
        authorization: `Bearer ${token}`,
      },
    });
    User.set('characters', response.data.data.results);
  }, []);

  const preparing = useCallback(async () => {
    try {
      let user = await User.get('user');
      let characters = await User.get('characters');
      if (user.id.length && user.token.length) {
        await getUser(user.id, user.token);
      } else {
        navigation.navigate('WelcomeStack');
      }
      if (characters.length === 0) {
        await getCharacters(user.token);
      }
      navigation.navigate('AppStack');
    } catch (error) {
      navigation.navigate('WelcomeStack');
    }
  }, [getCharacters, getUser, navigation]);
  return (
    <Container>
      <Lottie
        source={require('~/public/aminations/welcome.json')}
        autoPlay
        loop
      />
    </Container>
  );
}
