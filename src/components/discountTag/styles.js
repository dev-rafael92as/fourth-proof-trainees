import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    color: ${({ theme }) => theme.FONTS.WHITE_BACKGROUND};
    background-color: ${({ theme }) => theme.FONTS.LIGHT_PRIMARY};
    border-radius: 0.25rem;

    font-weight: 600;
    font-size: 0.75rem;
    line-height: 1rem;
    letter-spacing: -0.0063rem;

    width: 100%;
    max-width: 3rem;
    height: 1.25rem;
    padding: 0.25rem;

    svg {
        height: 0.75rem;
        width: 0.75rem;
    }

`