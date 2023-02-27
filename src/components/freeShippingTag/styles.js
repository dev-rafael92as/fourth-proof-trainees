import styled from "styled-components";

export const Container = styled.div`
    font-weight: 600;
    font-size: 0.75rem;
    line-height: 1rem;

    letter-spacing: -0.0063rem;
    position: absolute;
    left: 1.625rem;
    right: 1.75rem;

    background-color: ${({ theme }) => theme.FONTS.DARK_TERTIARY};
    width: 100%;
    max-width: 4.6875rem;
    padding: 0.125rem 0.25rem;
    border-radius: 0.25rem;
`