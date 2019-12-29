import Styled from 'styled-components/native';
import {Animated} from 'react-native';
import {WebView} from 'react-native-webview';

export const Container = Styled.Modal`
height: 100%;
width: 100%;
display: flex;
flex-direction: column;
flex-wrap: nowrap;
align-items: flex-start;
justify-content: flex-start;
position: absolute;
top: 0;
z-index: 1000;
`;
export const WebHeader = Styled(Animated.View)`
height: 40;
width: 100%;
display: flex;
flex-direction: row;
align-items: flex-start;
justify-content: flex-start;
background-color: #fff;
position: absolute;
top: 0;
z-index:10000;
`;
export const BackButton = Styled.TouchableOpacity`
height: 40;
width: 10%;
flex-direction: row;
align-items: center;
justify-content: center;

`;
export const WebContainerTitle = Styled(Animated.View)`
height: 40;
width: 90%;
display: flex;
align-items: center;
justify-content: center;
`;

export const WebTitle = Styled.Text`
font-size: 22;
font-weight: bold;
margin-right: 25;
`;
export const WebSpacing = Styled.View`
height: 100%;
width: 100%;
`;
export const Web = Styled(WebView)`
height: 100%;
width: 100%;
`;
