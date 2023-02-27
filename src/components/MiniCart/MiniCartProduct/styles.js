import styled from "styled-components";

export const Container = styled.div`
    border: 0.0625rem solid #E6E7EB;
    border-radius: 0.25rem;
    padding: 1rem;
    width: 100%;

    display: flex;
    gap: 1rem;

    img {
        width: 4rem;
        height: 4rem;
    }

    >div {
        width: 100%;

        h3 {
            font-weight: 500;
            font-size: 0.75rem;
            line-height: 1rem;
            letter-spacing: -0.0063rem;
            margin-bottom: 1rem;

            color: #333333;
        }

        > div {
            display: flex;
            align-items: center;
            justify-content: space-between;

            .dropdown-quantity {
                border: 0.0625rem solid #9CA0AE;
                border-radius: 0.25rem;
                width: 100%;
                max-width: 4rem;
                height: 2rem;
                padding: 0.5rem;

                display: flex;
                align-items: center;
                justify-content: space-between;
            }

            > div {
                display: flex;
                align-items: center;
                gap: 1rem;
                
                .selling-price-minicart {
                    font-weight: 600;
                    font-size: 0.875rem;
                    line-height: 1.25rem;
                    text-align: right;
                }
            }

        }
    }
`