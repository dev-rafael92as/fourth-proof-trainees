import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    padding: 20px;
    box-shadow: 0px -1px 0px #E5E5E5;
    
    > div {
        display: flex;
        align-items: center;
        justify-content: space-between;

        p:first-child {
            font-weight: 600;
            font-size: 14px;
            line-height: 20px;
        }

        .totalValueCart {
            font-weight: 600;
            font-size: 16px;
            line-height: 24px;
        }
    } 

    > p {
        font-weight: 500;
        font-size: 12px;
        line-height: 16px;

        text-align: right;
        letter-spacing: -0.1px;

        color: #333333;
    } 
`