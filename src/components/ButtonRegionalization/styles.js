import styled from "styled-components";

export const Container = styled.button`
    background-color: transparent;
    border: 1px solid ${({ theme }) => theme.FONTS.LIGHT_SURFACE_VARIANT};
    border-radius: 8px;

    display: flex;
    align-items: center;

    width: 100%;
    max-width: 216px;
    height: 48px;
    justify-content: center;
    gap: 20px;

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