import styled from "styled-components";

export const Container = styled.header`
    background: ${({ theme }) => theme.FONTS.WHITE_BACKGROUND};
    
    .container-header {
        width: 100%;
        max-width: 1376px;
        height: 80px;

        margin: 0 auto;
        display: flex;
        align-items: center;
        justify-content: space-between;

        .wrapper-searchInput {
            width: 100%;
            max-width: 948px;
        }

        .wrapper-accountButton {
            max-width: 187px;
            width: 100%;
        }

        .wrapper-minicart {
            border: none;
            background-color: transparent;
            width: 100%;
            max-width: 56px;

            .icon-cart {
                background: red;
                color: white;
                width: 100%;
                max-width: 20px;
                border-radius: 100px;
                transform: translate(30px, 10px);
            }

            svg {
                height: 24px;
                width: 24px;
            }
        }
        
        @media (max-width:40rem) {
            display: none;
        }    
    }

    .container-header-mobile {
        display: none;
        height: 56px;

        @media (max-width:40rem) {
            display: flex;
            align-items: center;
            padding: 0 16px;
        }

        .wrapper-logo {
            margin-right: 80px;
        }

        > svg {
            width: 24px;
            height: 24px;
            margin-right: 20px;
        }

        .wrapper-searchInput {
            > svg {
                width: 24px;
                height: 24px;
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
                height: 32px;
                width: 32px;
            }
            
            .icon-cart {
                background: red;
                color: white;
                width: 100%;
                max-width: 18px;
                border-radius: 100px;
                transform: translate(30px,-12px);
            }
        }
    }

`