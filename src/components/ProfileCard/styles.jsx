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
    
    img:first-child {
        width: 131px;
        height: 131px;
        
        margin-bottom: 10px;

        padding: 3px;
        border-radius: 100%;
        
        background: linear-gradient(90deg, var(--green), var(--light-blue), var(--pink));
    }

    img:last-child {
        width: 280px;
    }
`