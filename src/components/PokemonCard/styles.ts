import styled from "styled-components";
import { Link as LinkRouter } from 'react-router-dom';

export const Link = styled(LinkRouter)`
    display: flex;
    align-items: center;
    justify-content: space-between;

    border: 1px solid red;
    border-radius: 5px;

    color: #000;
    text-decoration: none;

    &:hover {
        transition: all 800ms;
        background-color: #d5090969;
    }

    span {
        padding: 8px;
    }

    span:last-child {
        background-color: #db1010;

        color: #fff;
        line-height: 75px;
    }
`;