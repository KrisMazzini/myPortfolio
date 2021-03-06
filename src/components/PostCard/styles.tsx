import styled from "styled-components";

export const Article = styled.article`
    height: 201px;
    width: 100%;

    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 20px;

    position: relative;
    
    padding: 30px;
    border-radius: 20px;
    
    background-color: var(--bg-cards);
`

export const Author = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5px;

    img {
        width: 128px;
        height: 128px;

        border-radius: 100%;
    }

    > p {
        position: absolute;
        top: 30px;
        right: 30px;
    }
`

export const Summary = styled.section`
    height: 100%;
    flex-grow: 1;

    display: flex;
    flex-direction: column;
    justify-content: space-between;

    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    
    h4 {
        height: 31px;
        font-weight: 900;
        font-size: 20px;
        line-height: 25px;
    }
    
    > p {
        width: 100%;
        font-weight: 600;
        font-size: 19px;
        line-height: 24px;
    }
`

export const Hashtags = styled.ul`
    display: flex;
    justify-content: start;
    gap: 10px;


    li::before {
        content: "#";
    }
`