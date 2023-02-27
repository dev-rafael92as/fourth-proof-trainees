import styled from "styled-components";

export const Container = styled.div`
    .title-modal2 {
        font-weight: 500;
        font-size: 24px;
        line-height: 32px;
        max-width: 342px;
        margin-bottom: 52px;

        @media (max-width: 40rem) {
            font-weight: 600;
            font-size: 20px;
            line-height: 28px;
            margin-bottom: 48px;
        }
    }

    > div {
        .store-selected {
            font-weight: 700;
            font-size: 20px;
            line-height: 32px;
            margin-bottom: 16px;
        }

        div {
            display: flex;
            align-items: center;
            gap: 21px;
            margin-bottom: 16px;

            svg {
                color: ${({ theme }) => theme.FONTS.LIGHT_SECONDARY};
                height: 20px;
                width: 20px;

                @media (max-width: 40rem) {
                    width: 30px;
                    height: 30px;
                }
            }

            p {
                font-weight: 500;
                font-size: 16px;
                line-height: 28px;
            }
        }

        .store-localization {
            height: 112px;

            p {
                display: flex;
                flex-direction: column;
                justify-content: space-around;
                height: 112px;
            }
        }

        .store-schedules {
            height: 56px;

            p {
                max-width: 169px;
                height: 56px;
            }
        }

        .store-contacts {
            height: 56px;

            p {
                display: flex;
                flex-direction: column;
                justify-content: space-around;
                height: 56px;
            }
        }
    
        @media (max-width: 40rem) {
            display: flex;
            flex-direction: column;
            gap: 20px;
        }
    }


    .wrapper-buttons {
        margin-top: 50px;
        display: flex;
        gap: 24px;

        @media (max-width: 40rem) {
            flex-direction: column-reverse;
            gap: 8px;
        }
    }
`