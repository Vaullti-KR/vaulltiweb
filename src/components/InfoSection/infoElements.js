import styled from 'styled-components'

export const InfoContainer = styled.div`
color: #fff;
width: 100%;
background: ${({ lightBg }) => (lightBg ? 'white' : 'black')};

@media screen and (max-width: 768px) {
    padding: 100px 0;
}
`;

export const InfoWrapper = styled.div`
display: grid;
z-index: 1;
height: 860px;
width: 100%;
margin-right: auto;
margin-left auto;
padding: 0 24px;
justify-content: center;
`;

export const InfoWrapper2 = styled.div`
display: flex;
color: red;
height: 80px;
width: 100%;
margin-right: auto;
margin-left auto;
justify-content: center;
`;

export const InfoRow = styled.div`
display: grid;
width: 100%;
grid-auto-columns: minmax(auto, 1fr);
align-items: center;
grid-template-areas: ${({ imgStart }) => imgStart ? `'col2 col1'` : `'col1 col2'`};

@media screen and (max-width: 768px) {
grid-template-areas: ${({ imgStart }) => imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`};
}
`;

export const InfoRow2 = styled.div`
display: flex;
align-items: center;
width: 100%;

@media screen and (max-width: 768px) {
}
`;

export const Column1 = styled.div`
margin-bottom: 15px;
padding: 0 15px;
grid-area: col1;
`;

export const Column2 = styled.div`
margin-bottom: 15px;
padding: 0 15px;
grid-area: col2;
`;

export const TextWrapper = styled.div`
padding-top: 0;
padding-bottom: 60px;
`;

export const TopLine = styled.p`
color: #3399cc;
text-align: left;
display: flex;
font-size: 35px;
line-height: 5ps;
font-weight: 100;
letter-spacing: 1px;
test-transform: uppercase;
margin-bottom: 16px;
`;

export const Heading = styled.h1`
margin-bottom: 20px;
display: flex;
font-size: 20px;
text-align: left;
line-height: 1;
font-weight: 100;
color: ${({ lightText }) => (lightText ? 'black' : 'white')};

@media screen and (max-width: 480px) {
    font-size: 32px;
    }
`;

export const Subtitle = styled.p`
margin-bottom: 20px;
display: flex;
font-size: 14px;
text-align: left;
line-height: 24px;
font-weight: 100;
color: ${({ lightText }) => (lightText ? 'black' : 'white')}
`;

export const BtnWrap = styled.div`
display: flex;
justify-content: flex-start;
`;

export const BtnWrap2 = styled.div`
color: red;
display: flex;
justify-content: center;
padding-right: 35px;
padding-left: 35px;
`;

export const ImgWrap = styled.div`
justify-content: center;
align-items: center;
height: 100%;
width: 100%;
`;

export const Img = styled.img`
width: 100%;
margin: 0 0 10px 0;
justify-content: center;
align-items: center;
padding-right: 35px;
padding-left: 35px;
`;
