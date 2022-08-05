import styled from "styled-components";

export const Button = styled.button`
    width: 100%;

    padding: 30px;
    border-radius: 20px;

    border: none;
    outline: none;

    cursor: pointer;

    background-color: var(--bg-cards);
    color: var(--text-color);

    font-weight: 700;
    font-size: 25px;
    line-height: 28px;

    :hover {
        background: linear-gradient(45deg, var(--section), var(--light-blue));
    }

    :active {
        filter: brightness(0.9);
    }
`