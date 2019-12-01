import React from 'react';

import Icon from 'react-native-vector-icons/AntDesign';
import {ViewIcon, Label} from './styles';

export const EditIcon = ({localization}) => (
  <ViewIcon localization={localization}>
    <Icon name="edit" size={36} color="#000" />
    <Label> Editar </Label>
  </ViewIcon>
);
export const SettingIcon = ({localization}) => (
  <ViewIcon localization={localization}>
    <Icon name="setting" size={36} color="#000" />
    <Label> Configuracoes </Label>
  </ViewIcon>
);
export const ShareIcon = ({localization}) => (
  <ViewIcon localization={localization}>
    <Icon name="sharealt" size={36} color="#000" />
    <Label> Compartilhar </Label>
  </ViewIcon>
);
