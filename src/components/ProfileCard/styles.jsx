import styled from "styled-components";

export const Header = styled.header`
    width: 100%;
    height: 292px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    padding: 30px;
    border-radius: 20px;
    
    background-color: var(--bg-cards);

    img {
        width: 128px;
        height: 128px;

        margin-bottom: 30px;
        
        border: 2px solid var(--pic-border);
        border-radius: 100%;
    }

    h1 {
        margin-bottom: 10px;

        font-weight: 700;
        font-size: 23px;
        line-height: 29px;
    }
`