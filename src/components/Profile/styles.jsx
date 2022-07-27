import styled from "styled-components";

export const Main = styled.main`
    display: flex;
    flex-wrap: wrap;
    gap: 30px;

    > section {
        width: 100%;

        padding: 30px;
        border-radius: 20px;
        
        background-color: var(--bg-cards);
    }
`

export const SocialMedias = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 20px;

    li > a {
        margin: 0 10px;

        display: inline-flex;
        align-items: center;
        gap: 20px;

        line-height: 16px;
    }
`