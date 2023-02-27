import styled from "styled-components";

export const Container = styled.div`
    .title-modal1 {
        font-weight: 500;
        font-size: 24px;
        line-height: 32px;
        width: 100%;
        max-width: 250px;

        @media (max-width: 40rem) {
            font-weight: 500;
            font-size: 24px;
            line-height: 32px;
        }
    }

    .desktop-modal {
        margin-top: 32px;
        display: flex;
        justify-content: space-between;

        .first-colum {
            max-width: 118px;
        }

        .second-colum {
            max-width: 153px;
        }

        .third-colum {
            max-width: 160px;
        }
    
        div {
            display: flex;
            flex-direction: column;
            align-items: center;
            width: 100%;
            gap: 10px;
            height: 440px;

            button {
                border: none;
                background: transparent;

                font-weight: 500;
                font-size: 16px;
                line-height: 40px;
                width: 100%;
                text-align: start;
            }

            button:hover {
                text-decoration: underline;
                color: ${({ theme }) => theme.FONTS.LIGHT_SECONDARY};
                font-weight: 600;
                font-size: 16px;
                line-height: 40px;
            }
        }

        @media (max-width: 40rem) {
            display: none;
        }
    }

    .mobile-modal {
        display: none;

        @media (max-width: 40rem) {
            display: flex;
            flex-direction: column;

            button {
                border: none;
                background: transparent;

                font-weight: 500;
                font-size: 16px;
                line-height: 40px;
                width: 100%;
                text-align: start;
            }
        }
    }
`