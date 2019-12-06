import Styled from 'styled-components/native';

export const Container = Styled.View`
  min-height: 300;
  width: 100%;
  padding-left: 10;
  padding-right: 10;
  padding-top: 20;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
`;
export const Title = Styled.Text`
font-size: 22;
font-weight: 500;
position: relative;
z-index: 10;
color: #000;
`;
export const Line = Styled.View`
  width: 100%;
  height: 2;
  background-color: #eee;
  margin-top: 8;
  `;
export const Image = Styled.Image`
  height: 160;
  width: 100;
  position: absolute;
  z-index: -100;
  margin-left: 5;
  margin-right: 5;
  `;
export const Story = Styled.Text`
  font-size: 12;
  font-weight: 500;
  text-align: center;
  position: absolute;
  bottom: 0;
  padding-left: 5;
  padding-right: 5;
`;
export const StorySpace = Styled.View`
  min-height: 200;
  width: 120;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  flex-wrap: wrap;
  margin-bottom: 20;

`;
export const StorysList = Styled.View`
width: 100%
display: flex;
  align-items: flex-start;
  margin-top: 10;
  justify-content: flex-start;
  flex-direction: row;
  flex-wrap: wrap;
  /*
  background-color: black; */
`;
