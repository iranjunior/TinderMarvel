import React from 'react';

import Icon from 'react-native-vector-icons/AntDesign';
import {ViewIcon, Label} from './styles';

export const SettingIcon = () => (
  <ViewIcon>
    <Icon name="setting" size={36} color="#000" />
    <Label> Editar </Label>
  </ViewIcon>
);
