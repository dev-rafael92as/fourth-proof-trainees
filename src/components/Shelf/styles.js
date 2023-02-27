import styled from "styled-components";

export const Container = styled.div`
    padding: 24px;
    background-color: ${({ theme }) => theme.FONTS.WHITE_BACKGROUND};
    border: 3px solid ${({ theme }) => theme.FONTS.WHITE_BACKGROUND};
    width: 100%;
    max-width: 400px;
    border-radius: 16px;
    position: relative;

    display: flex;
    flex-direction: column;

    :hover {
        filter: initial;
        border: 3px solid ${({ theme }) => theme.FONTS.TEXT_COLOR};
        transition: all ease-in-out .3s;
    }

    h3 {
        font-weight: 600;
        font-size: 14px;
        line-height: 20px;
        height: 40px;
        margin-top: 24px;
    }

    .price {
        font-weight: 600;
        font-size: 12px;
        line-height: 16px;
        letter-spacing: -0.1px;
        text-decoration-line: line-through;

        color: ${({ theme }) => theme.FONTS.INFO_PRODUCT};
    }

    .sellingPrice {
        font-weight: 600;
        font-size: 20px;
        line-height: 28px;
        width: 100%;
        
        display: flex;
        align-items: center;
        gap: 12px;
    }

    .payment-info {
        font-weight: 500;
        font-size: 12px;
        line-height: 16px;
        letter-spacing: -0.1px;
        color: ${({ theme }) => theme.FONTS.INFO_PRODUCT};
        margin-bottom: 12px;
    }

    > div {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        gap: 10px;

        p {
            color: ${({ theme }) => theme.FONTS.INFO_PRODUCT};
            font-weight: 600;
            font-size: 12px;
            line-height: 16px;

            span {
                color: ${({ theme }) => theme.FONTS.TEXT_COLOR};
            }
        }
    }

    @media (max-width: 40rem) {
        max-width: 160px;
        padding: 12px;
        border-radius: 8px;
        text-align: inherit;

        img {
            max-width: 136px;
            height: 136px;
        }

        .sellingPrice { 
            div {
                transform: translate(-108px, -220px);
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