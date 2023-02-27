import styled from "styled-components";

export const Container = styled.div`
    font-weight: 600;
    font-size: 12px;
    line-height: 16px;

    letter-spacing: -0.1px;
    position: absolute;
    left: 26px;
    right: 28px;

    background-color: ${({ theme }) => theme.FONTS.DARK_TERTIARY};
    width: 100%;
    max-width: 75px;
    padding: 2px 4px;
    border-radius: 4px;
`