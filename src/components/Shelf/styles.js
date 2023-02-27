import styled from "styled-components";

export const Container = styled.div`
    padding: 1.5rem;
    background-color: ${({ theme }) => theme.FONTS.WHITE_BACKGROUND};
    border: 0.1875rem solid ${({ theme }) => theme.FONTS.WHITE_BACKGROUND};
    width: 100%;
    max-width: 25rem;
    border-radius: 1rem;
    position: relative;

    display: flex;
    flex-direction: column;

    :hover {
        filter: initial;
        border: 0.1875rem solid ${({ theme }) => theme.FONTS.TEXT_COLOR};
        transition: all ease-in-out .3s;
    }

    h3 {
        font-weight: 600;
        font-size: 0.875rem;
        line-height: 1.25rem;
        height: 2.5rem;
        margin-top: 1.5rem;
    }

    .price {
        font-weight: 600;
        font-size: 0.75rem;
        line-height: 1rem;
        letter-spacing: -0.0063rem;
        text-decoration-line: line-through;

        color: ${({ theme }) => theme.FONTS.INFO_PRODUCT};
    }

    .sellingPrice {
        font-weight: 600;
        font-size: 1.25rem;
        line-height: 1.75rem;
        width: 100%;
        
        display: flex;
        align-items: center;
        gap: 0.75rem;
    }

    .payment-info {
        font-weight: 500;
        font-size: 0.75rem;
        line-height: 1rem;
        letter-spacing: -0.0063rem;
        color: ${({ theme }) => theme.FONTS.INFO_PRODUCT};
        margin-bottom: 0.75rem;
    }

    > div {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        gap: 0.625rem;

        p {
            color: ${({ theme }) => theme.FONTS.INFO_PRODUCT};
            font-weight: 600;
            font-size: 0.75rem;
            line-height: 1rem;

            span {
                color: ${({ theme }) => theme.FONTS.TEXT_COLOR};
            }
        }
    }

    @media (max-width: 40rem) {
        max-width: 10rem;
        padding: 0.75rem;
        border-radius: 0.5rem;
        text-align: inherit;

        img {
            max-width: 8.5rem;
            height: 8.5rem;
        }

        .sellingPrice { 
            div {
                transform: translate(-6.75rem, -13.75rem);
            }
        }

        .wrapper-installment {
            svg {
                display: none;
            }
        }

        .tag-freeshipping {
            display: none;
        }
    }
`