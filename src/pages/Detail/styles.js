import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
flex: 1;
background-color: #192a30;

`;
export const Header = styled.View`
z-index: 99;
position: absolute;
top: 35px;
width: 100%;
display: flex;
flex-direction: row;
justify-content: space-between;
padding: 0 14px;
`;

export const HeaderButton = styled.TouchableOpacity`
width: 46px;
height: 46px;
background-color:rgba(25, 26, 48, 0.8);
border-radius: 23px;
justify-content: center;
align-items: center;
`;

export const Banner = styled.Image`


`;
export const Title = styled.Text`

`;