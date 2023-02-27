import styled from "styled-components";

export const Container = styled.button`
    height: 3rem;
    border: none;
    background: ${({ theme }) => theme.FONTS.LIGHT_SECONDARY};
    color: ${({ theme }) => theme.FONTS.WHITE_BACKGROUND};
    border-radius: 0.5rem;
    margin-top: 1rem;
    width: 100%;

    :hover {
        filter: brightness(1);
        opacity: .8;
        transition: all ease-in-out .5s;
    }
`