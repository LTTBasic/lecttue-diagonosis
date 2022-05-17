import styled from "styled-components";
import {Link} from 'react-router-dom'


export const Button = styled(Link)`
    color: white;
    border-radius: 50px;
    background: ${({primary})=> (primary ? '#6A67CE' : '#010606')};
    white-space: nowrap;
    padding: ${({big})=> (big ? '14px 48px' : '12px 30px')};
    color: ${({dark})=> (dark ? 'EEEEEE' : '#fff')};
    font-size: ${({fontBig})=> (fontBig ? '20px' : '16px')};
    outline: none;
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.3s ease-in-out;
    text-decoration-line: none;
    &:hover {
        transition: all 0.3s ease-in-out;
        background: ${({primary})=> (primary ? '#5B4FE8': '#01BF71' )};
    }
`