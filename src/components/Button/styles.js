import styled from "styled-components";

export const Container = styled.button`
    width: 100%;
    max-width: 138px;
    height: 48px;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 6px;

    border: none;
    background: ${({ theme }) => theme.FONTS.LIGHT_SECONDARY};
    color: ${({ theme }) => theme.FONTS.WHITE_BACKGROUND};
    border-radius: 8px;

    svg {
        height: 20px;
        width: 20px;
    }

    @media (max-width: 40rem) {
        max-width: 100%;
    }

`