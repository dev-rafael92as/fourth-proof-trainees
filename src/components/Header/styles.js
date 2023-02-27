import styled from "styled-components";

export const Container = styled.header`
    background: ${({ theme }) => theme.FONTS.WHITE_BACKGROUND};
    
    .container-header {
        width: 100%;
        max-width: 86rem;
        height: 5rem;

        margin: 0 auto;
        display: flex;
        align-items: center;
        justify-content: space-between;

        .wrapper-searchInput {
            width: 100%;
            max-width: 59.25rem;
        }

        .wrapper-accountButton {
            max-width: 11.6875rem;
            width: 100%;
        }

        .wrapper-minicart {
            border: none;
            background-color: transparent;
            width: 100%;
            max-width: 3.5rem;

            .icon-cart {
                background: red;
                color: white;
                width: 100%;
                max-width: 1.25rem;
                border-radius: 6.25rem;
                transform: translate(1.875rem, 0.625rem);
            }

            svg {
                height: 1.5rem;
                width: 1.5rem;
            }
        }
        
        @media (max-width:40rem) {
            display: none;
        }    
    }

    .container-header-mobile {
        display: none;
        height: 3.5rem;

        @media (max-width:40rem) {
            display: flex;
            align-items: center;
            padding: 0 1rem;
        }

        .wrapper-logo {
            margin-right: 5rem;
        }

        > svg {
            width: 1.5rem;
            height: 1.5rem;
            margin-right: 1.25rem;
        }

        .wrapper-searchInput {
            > svg {
                width: 1.5rem;
                height: 1.5rem;
            }
        }

        .wrapper-accountButton {
            display: none;
        }
        
        .wrapper-minicart {
            border: none;
            background-color: transparent;
            display: flex;
            align-items: center;

            > svg {
                height: 2rem;
                width: 2rem;
            }
            
            .icon-cart {
                background: red;
                color: white;
                width: 100%;
                max-width: 1.125rem;
                border-radius: 6.25rem;
                transform: translate(1.875rem,-0.75rem);
            }
        }
    }

`