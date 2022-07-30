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

    @keyframes rotate {
        from {
            transform: rotate(0deg)
        }

        to {
            transform: rotate(360deg)
        }
    }

    -webkit-@keyframes rotate {
        from {
            transform: rotate(0deg)
        }

        to {
            transform: rotate(360deg)
        }
    }

    -moz-@keyframes rotate {
        from {
            transform: rotate(0deg)
        }

        to {
            transform: rotate(360deg)
        }
    }

    -o-@keyframes rotate {
        from {
            transform: rotate(0deg)
        }

        to {
            transform: rotate(360deg)
        }
    }

    -ms-@keyframes rotate {
        from {
            transform: rotate(0deg)
        }

        to {
            transform: rotate(360deg)
        }
    }
    
    > div {
        width: 136px;
        height: 136px;
        border-radius: 100%;
        position: relative;
    }
    
    div div {
        width: 136px;
        height: 136px;
        
        border-radius: 100%;
        background-color: var(--section);
        background: linear-gradient(90deg, var(--green), var(--light-blue), var(--pink));

        animation: rotate 4s linear infinite;
    }

    div img {
        width: 128px;
        height: 128px;
        
        position: absolute;
        top: 4px;
        left: 4px;

        border-radius: 100%;
    }

    > img {
        width: 280px;
    }
`