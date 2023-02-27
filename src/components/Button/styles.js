import styled from "styled-components";

export const Container = styled.button`
    width: 100%;
    max-width: 8.625rem;
    height: 3rem;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.375rem;

    border: none;
    background: ${({ theme }) => theme.FONTS.LIGHT_SECONDARY};
    color: ${({ theme }) => theme.FONTS.WHITE_BACKGROUND};
    border-radius: 0.5rem;

    svg {
        height: 1.25rem;
        width: 1.25rem;
    }

    @media (max-width: 40rem) {
        max-width: 100%;
    }

`