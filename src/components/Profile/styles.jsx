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
        font: 400 16px/20px 'Syncopate', sans-serif;
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
    justify-content: center;
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
        font-size: 14px;
        line-height: 16px;

        color: var(--bg-cards);
        background-color: var(--bg-techs);
    }

    li::selection {
        background-color: var(--text-color);
    }
`

export const Background = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 15px;

    list-style-type: disc;

    margin-left: 30px;

    p {
        font-weight: 600;
        font-size: 15px;
        line-height: 18px;
    }

    p:first-of-type {
        font-weight: 400;
    }
`