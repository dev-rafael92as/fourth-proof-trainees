import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    margin-top: 262px;
    gap: 16px;

    svg {
        height: 40px;
        width: 40px;
        margin-bottom: 8px;
        color: ${({ theme }) => theme.FONTS.LIGHT_SECONDARY};
    }

    .minicart-first-text {
        font-weight: 600;
        font-size: 20px;
        line-height: 28px;
        max-width: 226px;
        text-align: center;
    }

    .minicart-last-text {
        font-weight: 400;
        font-size: 14px;
        line-height: 20px;
        text-align: center;
        max-width: 236px;

        color: ${({ theme }) => theme.FONTS.MINICART_TEXT};
    }

`