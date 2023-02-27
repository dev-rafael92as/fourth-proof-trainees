import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    border: 0.0938rem solid ${({ theme }) => theme.FONTS.LIGHT_OUTLINE};
    border-radius: 0.5rem;
    height: 3rem;

    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.75rem 1rem;

    input {
        border: none;
        background: transparent;
        width: 100%;
    }

    input::placeholder {
        font-weight: 500;
        font-size: 1rem;
        line-height: 1.5rem;
        color: ${({ theme }) => theme.FONTS.PLACEHOLDER_COLOR};
    }
`