import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux';
import Lottie from 'lottie-react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import {DETAILS} from '~/constants/actions';

import {
  Container,
  WebHeader,
  BackButton,
  WebTitle,
  WebContainerTitle,
  WebSpacing,
  Web,
} from './styles';

const WebView = ({reference, dispatch}) => {
  const [modalVisible, setModalVisible] = useState(false);

  const hide = () => {
    setModalVisible(false);
    dispatch({
      type: DETAILS.REFERENCE_LINK,
      payload: undefined,
    });
  };
  const choose = references => {
    if (references) {
      setModalVisible(true);
    } else {
      setModalVisible(false);
    }
  };
  useEffect(() => {
    choose(reference);
  });
  return (
    <Container animationType="slide" transparent={false} visible={modalVisible}>
      <WebHeader>
        <BackButton onPress={hide}>
          <Icon name="back" size={28} color="#000" />
        </BackButton>
        <WebContainerTitle>
          <WebTitle>{reference && reference.type}</WebTitle>
        </WebContainerTitle>
      </WebHeader>
      <WebSpacing>
        <Web
          source={{uri: reference && reference.uri}}
          startInLoadingState={true}
          renderLoading={() => (
            <Lottie
              source={require('~/public/aminations/loadding.json')}
              autoPlay
              loop
            />
          )}
        />
      </WebSpacing>
    </Container>
  );
};

const mapStateToProps = state => ({
  ...state,
  reference: state.details.reference,
});

export default connect(mapStateToProps)(WebView);
