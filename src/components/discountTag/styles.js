import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    color: ${({ theme }) => theme.FONTS.WHITE_BACKGROUND};
    background-color: ${({ theme }) => theme.FONTS.LIGHT_PRIMARY};
    border-radius: 4px;

    font-weight: 600;
    font-size: 12px;
    line-height: 16px;
    letter-spacing: -0.1px;

    width: 100%;
    max-width: 48px;
    height: 20px;
    padding: 4px;

    svg {
        height: 12px;
        width: 12px;
    }

`