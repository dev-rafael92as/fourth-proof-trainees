import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    margin-top: 16.375rem;
    gap: 1rem;

    svg {
        height: 2.5rem;
        width: 2.5rem;
        margin-bottom: 0.5rem;
        color: ${({ theme }) => theme.FONTS.LIGHT_SECONDARY};
    }

    .minicart-first-text {
        font-weight: 600;
        font-size: 1.25rem;
        line-height: 1.75rem;
        max-width: 14.125rem;
        text-align: center;
    }

    .minicart-last-text {
        font-weight: 400;
        font-size: 0.875rem;
        line-height: 1.25rem;
        text-align: center;
        max-width: 14.75rem;

        color: ${({ theme }) => theme.FONTS.MINICART_TEXT};
    }

`