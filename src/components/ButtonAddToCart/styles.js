import styled from "styled-components";

export const Container = styled.button`
    height: 48px;
    border: none;
    background: ${({ theme }) => theme.FONTS.LIGHT_SECONDARY};
    color: ${({ theme }) => theme.FONTS.WHITE_BACKGROUND};
    border-radius: 8px;
    margin-top: 16px;
    width: 100%;

    :hover {
        filter: brightness(1);
        opacity: .8;
        transition: all ease-in-out .5s;
    }
`