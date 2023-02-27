import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    background-color: ${({ theme }) => theme.FONTS.LIGHT_SURFACE_VARIANT};

    height: 2.5rem;

    div {
        display: flex;
        align-items: center;
        gap: 1.125rem;
    }

    button {
        position: absolute;
        right: 0.5rem;

        background-color: transparent;
        border: none;
        opacity: 0.6;
    }

    @media (max-width: 40rem) {
        display: none;
    }
`