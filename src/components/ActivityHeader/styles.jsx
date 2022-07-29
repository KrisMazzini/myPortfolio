import styled from "styled-components";

export const Header = styled.header`
    height: 86px;

    padding: 30px;
    border-radius: 20px;

    display: flex;
    justify-content: space-between;
    align-items: center;

    background-color: var(--section);
    
    * {
        color: var(--dark-blue);
    }

    h3 {
        font: 700 20px/25px 'Syncopate', sans-serif;
    }

    nav {
        display: flex;
        align-items: center;
        gap: 15px;
    }
`