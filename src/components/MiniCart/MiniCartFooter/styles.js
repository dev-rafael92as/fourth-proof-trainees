import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    padding: 1.25rem;
    box-shadow: 0rem -0.0625rem 0rem #E5E5E5;
    
    > div {
        display: flex;
        align-items: center;
        justify-content: space-between;

        p:first-child {
            font-weight: 600;
            font-size: 0.875rem;
            line-height: 1.25rem;
        }

        .totalValueCart {
            font-weight: 600;
            font-size: 1rem;
            line-height: 1.5rem;
        }
    } 

    > p {
        font-weight: 500;
        font-size: 0.75rem;
        line-height: 1rem;

        text-align: right;
        letter-spacing: -0.0063rem;

        color: #333333;
    } 
`