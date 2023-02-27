import styled from "styled-components";

export const Container = styled.div`
    width: 100%;

    button {
        width: 100%;
        background: transparent;
        border: none;

        display: flex;
        align-items: center;

        font-weight: 500;
        font-size: 14px;
        line-height: 20px;

        svg {
            margin: 0 15px;
            width: 24px;
            height: 20px;
        }
    }
`