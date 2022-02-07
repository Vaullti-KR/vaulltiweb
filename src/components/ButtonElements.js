import styled from 'styled-components'
import {Link} from 'react-scroll'

export const Button = styled(Link)`
border-radius: 2px;
background: ${({primary}) => (primary ? 'white' : '#010606')};
white-space: nowrap;
padding: ${({big}) => (big ? '24px 48px' : '22px 50px')};
color: ${({dark}) => (dark ? '#010606' : 'grey')};
font-size: ${({fontBig}) => (fontBig ? '30px' : '36px')}:
outline: none;
border: none;
cursor: pointer;
display: flex;
justify-content: center;
align-items: center;
transition: all 0.3s ease-in-out;

&:hover{
    transition: all 0.2s ease-in-out;
    background: ${({primary}) => (primary ?'grey' : 'black')};
}

`

export const Button2 = styled.button`
background: #3399cc;
width: 100%;
color: white;
font-size: 2em;
display: flex;
justify-content: center;


`