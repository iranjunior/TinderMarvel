import Styled from 'styled-components/native';
import {Dimensions, Animated} from 'react-native';
export const Container = Styled.View`
    display: flex;
    height: 100%;
    align-items: center;
    background-color: 'rgb(255,255,255)';
`;
export const HeaderSpacing = Styled(Animated.View)`
  height: 350;
  width: 100%;
`;

export const BackButton = Styled.TouchableOpacity`
    background-color: #e60000;
    height: 70;
    width: 70;
    border-radius: 35;
    position: relative;
    top: -35;
    elevation: 3;
    left: ${Dimensions.get('screen').width - 90};
    align-items: center;
    justify-content: center;
`;
