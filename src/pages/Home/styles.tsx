import styled from "styled-components";

export const Container = styled.div`

    display: flex;
    flex-direction: column;
    gap: 30px;

    main {
        width: 100%;
    }

    aside {
        width: 100%;
    }

    @media(min-width: 800px) {
        flex-direction: row;

        main {
            width: 348px;
        }
    }
`