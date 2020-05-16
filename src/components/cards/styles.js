import Styled from 'styled-components/native';

import {Animated} from 'react-native';

export const PanelBackground = Styled.View`
    display: flex;
    height: 100%;
    align-items: center;
    background-color: transparent;

`;

export const Container = Styled(Animated.View)`
display: flex;
flex-direction: column;
align-items: center;
width: 100%;
background-color: transparent;
height: 100%;

position: absolute;
border-top-left-radius: 20;
border-top-right-radius: 20;
border-top-end-radius: 20;
border-top-start-radius: 20;
overflow: hidden;
`;
export const TextArea = Styled.View`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    align-items: flex-start;
    justify-content: flex-end;
    background-color: transparent;
    padding-left: 10;
    padding-bottom: 20;
    position: absolute;
    bottom: 0;
    z-index: 100;
`;
export const ImageProfile = Styled(Animated.Image)`
    height: 100%;
    width: 100%;
`;
export const Bottom = Styled.View`
    height: 60;
    width: 60;
    border-radius: 30;
    margin: auto;
    elevation: 2;
`;
export const Icon = Styled.Text`
    color: ${props => (props.type === 'Like' ? '#00cc00' : '#cc0000')};
    margin: auto;
    font-size: 25;
    `;

export const Title = Styled.Text`
    font-size: 28;
    font-weight: bold;
    color: white;
    width: 100%;
    align-items: flex-start;
    justify-content: flex-end;
    margin-bottom: 20;
    text-shadow: -1px 1px 10px rgba(0, 0, 0, 0.75)
    `;

export const Description = Styled.Text`
    font-size: 16;
    color: white;
    margin-bottom: 0;

`;
export const Clicked = Styled.TouchableOpacity`
    background-color: transparent;
    width: 100%;
    height: 100%;
    position: relative;
    z-index: 10;
`;
