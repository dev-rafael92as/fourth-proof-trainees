import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    border: 1.5px solid ${({ theme }) => theme.FONTS.LIGHT_OUTLINE};
    border-radius: 8px;
    height: 48px;

    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 12px 16px;

    input {
        border: none;
        background: transparent;
        width: 100%;
    }

    input::placeholder {
        font-weight: 500;
        font-size: 16px;
        line-height: 24px;
        color: ${({ theme }) => theme.FONTS.PLACEHOLDER_COLOR};
    }
`