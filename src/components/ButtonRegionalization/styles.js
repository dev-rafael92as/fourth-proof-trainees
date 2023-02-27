import styled from "styled-components";

export const Container = styled.button`
    background-color: transparent;
    border: 0.0625rem solid ${({ theme }) => theme.FONTS.LIGHT_SURFACE_VARIANT};
    border-radius: 0.5rem;

    display: flex;
    align-items: center;

    width: 100%;
    max-width: 13.5rem;
    height: 3rem;
    justify-content: center;
    gap: 1.25rem;

    :hover {
        background-color: ${({ theme }) => theme.FONTS.LIGHT_SURFACE_VARIANT};
        filter: brightness(1);
        transition: all ease-in-out .3s;
    }

    @media (max-width:40rem) {
        max-width: 100%;
        background-color: ${({ theme }) => theme.FONTS.WHITE_BACKGROUND};
    }
`