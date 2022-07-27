import styled from "styled-components";

export const Main = styled.main`
    display: flex;
    flex-direction: column;
    gap: 30px;

    > section {
        width: 100%;

        padding: 30px;
        border-radius: 20px;
        
        background-color: var(--bg-cards);
    }

    h3 {
        margin: 0 0 20px -10px;
    }

    h4 {
        font-weight: 700;
        display: inline;
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

export const Skills = styled.ul`
    display: flex;
    flex-wrap: wrap;
    gap: 15px;

    li {
        width: 86px;
        height: 24px;
        
        display: flex;
        justify-content: center;
        align-items: center;

        border-radius: 30px;

        font-weight: 700;
        font-size: 10px;
        line-height: 13px;

        color: var(--body-bg-color);
        background-color: var(--bg-techs);
    }

    li::selection {
        color: var(--bg-techs);
        background-color: var(--body-bg-color);
    }
`

export const Background = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 15px;

    list-style-type: disc;

    margin-left: 30px;

    p {
        font-size: 12px;
        line-height: 15px;
    }

    p:first-of-type {
        font-weight: 300;
    }
`