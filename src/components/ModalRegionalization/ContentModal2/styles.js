import styled from "styled-components";

export const Container = styled.div`
    .title-modal2 {
        font-weight: 500;
        font-size: 1.5rem;
        line-height: 2rem;
        max-width: 21.375rem;
        margin-bottom: 3.25rem;

        @media (max-width: 40rem) {
            font-weight: 600;
            font-size: 1.25rem;
            line-height: 1.75rem;
            margin-bottom: 3rem;
        }
    }

    > div {
        .store-selected {
            font-weight: 700;
            font-size: 1.25rem;
            line-height: 2rem;
            margin-bottom: 1rem;
        }

        div {
            display: flex;
            align-items: center;
            gap: 1.3125rem;
            margin-bottom: 1rem;

            svg {
                color: ${({ theme }) => theme.FONTS.LIGHT_SECONDARY};
                height: 1.25rem;
                width: 1.25rem;

                @media (max-width: 40rem) {
                    width: 1.875rem;
                    height: 1.875rem;
                }
            }

            p {
                font-weight: 500;
                font-size: 1rem;
                line-height: 1.75rem;
            }
        }

        .store-localization {
            height: 7rem;

            p {
                display: flex;
                flex-direction: column;
                justify-content: space-around;
                height: 7rem;
            }
        }

        .store-schedules {
            height: 3.5rem;

            p {
                max-width: 10.5625rem;
                height: 3.5rem;
            }
        }

        .store-contacts {
            height: 3.5rem;

            p {
                display: flex;
                flex-direction: column;
                justify-content: space-around;
                height: 3.5rem;
            }
        }
    
        @media (max-width: 40rem) {
            display: flex;
            flex-direction: column;
            gap: 1.25rem;
        }
    }


    .wrapper-buttons {
        margin-top: 3.125rem;
        display: flex;
        gap: 1.5rem;

        @media (max-width: 40rem) {
            flex-direction: column-reverse;
            gap: 0.5rem;
        }
    }
`