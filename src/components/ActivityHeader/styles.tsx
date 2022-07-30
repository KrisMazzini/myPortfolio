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
        color: var(--text-color);
    }

    h3 {
        font: 700 20px/25px 'Syncopate', sans-serif;
    }

    ul {
        display: flex;
        align-items: center;
        gap: 15px;
    }
    
    a {
        font: 700 18px 'Darker Grotesque', sans-serif;
    }
`