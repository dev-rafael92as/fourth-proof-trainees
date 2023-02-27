import styled from "styled-components";

export const Container = styled.div`
    border: 1px solid #E6E7EB;
    border-radius: 4px;
    padding: 16px;
    width: 100%;

    display: flex;
    gap: 16px;

    img {
        width: 64px;
        height: 64px;
    }

    >div {
        width: 100%;

        h3 {
            font-weight: 500;
            font-size: 12px;
            line-height: 16px;
            letter-spacing: -0.1px;
            margin-bottom: 16px;

            color: #333333;
        }

        > div {
            display: flex;
            align-items: center;
            justify-content: space-between;

            .dropdown-quantity {
                border: 1px solid #9CA0AE;
                border-radius: 4px;
                width: 100%;
                max-width: 64px;
                height: 32px;
                padding: 8px;

                display: flex;
                align-items: center;
                justify-content: space-between;
            }

            > div {
                display: flex;
                align-items: center;
                gap: 16px;
                
                .selling-price-minicart {
                    font-weight: 600;
                    font-size: 14px;
                    line-height: 20px;
                    text-align: right;
                }
            }

        }
    }
`