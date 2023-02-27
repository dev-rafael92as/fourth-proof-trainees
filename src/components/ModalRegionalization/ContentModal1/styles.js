import styled from "styled-components";

export const Container = styled.div`
    .title-modal1 {
        font-weight: 500;
        font-size: 1.5rem;
        line-height: 2rem;
        width: 100%;
        max-width: 15.625rem;

        @media (max-width: 40rem) {
            font-weight: 500;
            font-size: 1.5rem;
            line-height: 2rem;
        }
    }

    .desktop-modal {
        margin-top: 2rem;
        display: flex;
        justify-content: space-between;

        .first-colum {
            max-width: 7.375rem;
        }

        .second-colum {
            max-width: 9.5625rem;
        }

        .third-colum {
            max-width: 10rem;
        }
    
        div {
            display: flex;
            flex-direction: column;
            align-items: center;
            width: 100%;
            gap: 0.625rem;
            height: 27.5rem;

            button {
                border: none;
                background: transparent;

                font-weight: 500;
                font-size: 1rem;
                line-height: 2.5rem;
                width: 100%;
                text-align: start;
            }

            button:hover {
                text-decoration: underline;
                color: ${({ theme }) => theme.FONTS.LIGHT_SECONDARY};
                font-weight: 600;
                font-size: 1rem;
                line-height: 2.5rem;
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
                font-size: 1rem;
                line-height: 2.5rem;
                width: 100%;
                text-align: start;
            }
        }
    }
`