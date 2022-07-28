import styled from "styled-components";

export const Header = styled.header`
    height: 86px;

    padding: 30px;
    border-radius: 20px;

    display: flex;
    justify-content: space-between;
    align-items: center;

    background-color: var(--bg-cards);

    h3 {
        font-weight: 700;
        font-size: 20px;
        line-height: 25px;
    }

    nav {
        display: flex;
        align-items: center;
        gap: 15px;
    }
`