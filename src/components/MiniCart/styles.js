import styled from "styled-components";

export const Container = styled.div`
    position: fixed;
    right: 0;
    top: 0;
    z-index: 2;

    background: ${({ theme }) => theme.FONTS.WHITE_BACKGROUND};
    box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.3), 0px 2px 6px 2px rgba(0, 0, 0, 0.15);

    height: 800px;
    max-width: 400px;


    .header-miniCart {
        height: 76px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        min-width: 400px;

        font-weight: 600;
        font-size: 20px;
        line-height: 28px;

        padding: 24px 24px 0 24px;
        border-bottom: 1px solid ${({ theme }) => theme.FONTS.LIGHT_SURFACE_VARIANT};

        button {
            background-color: transparent;
            border: none;

            svg {
                width: 20px;
                height: 20px;
            }
        }
    }

    .main-content-minicart {
        padding: 24px;
    }

    @media (max-width: 40rem) {
        max-width: 100%;
        width: 100%;
        height: 100%;

        .header-miniCart {
            min-width: initial;
            max-width: 100%;
            width: 100%;
        }
    }
`