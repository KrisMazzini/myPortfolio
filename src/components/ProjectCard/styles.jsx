import styled from "styled-components";

export const Article = styled.article`
    height: 186px;
    width: 100%;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 10px;

    padding: 30px;
    border-radius: 20px;
    
    background-color: var(--bg-cards);

    h4 {
        font-weight: 700;
        font-size: 16px;
        line-height: 20px;
    }

    > p {
        font-weight: 400;
        font-size: 14px;
        line-height: 20px;
    }
`

export const Header = styled.header`
    display: flex;
    align-items: center;
    gap: 16px;
`

export const Footer = styled.footer`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const Insights = styled.ul`
    display: flex;
    align-items: center;
    gap: 16px;
`

export const Insight = styled.li`
    display: flex;
    align-items: center;
    gap: 8px;
`

export const Language = styled.p`
    ::before {
        content: "";
        vertical-align: middle;
        margin-right: 8px;

        display: inline-block;
        width: 15px;
        height: 15px;

        border-radius: 100%;
        border: 2px solid var(--text-color);

        background-color: ${props => props.color}
    }
`