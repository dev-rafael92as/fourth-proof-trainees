import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    background-color: ${({ theme }) => theme.FONTS.LIGHT_SURFACE_VARIANT};

    height: 40px;

    div {
        display: flex;
        align-items: center;
        gap: 18px;
    }

    button {
        position: absolute;
        right: 8px;

        background-color: transparent;
        border: none;
        opacity: 0.6;
    }

    @media (max-width: 40rem) {
        display: none;
    }
`