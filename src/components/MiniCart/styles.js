import styled from "styled-components";

export const Container = styled.div`
    position: fixed;
    right: 0;
    top: 0;
    z-index: 2;

    background: ${({ theme }) => theme.FONTS.WHITE_BACKGROUND};
    box-shadow: 0rem 0.0625rem 0.125rem rgba(0, 0, 0, 0.3), 0rem 0.125rem 0.375rem 0.125rem rgba(0, 0, 0, 0.15);

    height: 50rem;
    max-width: 25rem;


    .header-miniCart {
        height: 4.75rem;
        display: flex;
        align-items: center;
        justify-content: space-between;
        min-width: 25rem;

        font-weight: 600;
        font-size: 1.25rem;
        line-height: 1.75rem;

        padding: 1.5rem 1.5rem 0 1.5rem;
        border-bottom: 0.0625rem solid ${({ theme }) => theme.FONTS.LIGHT_SURFACE_VARIANT};

        button {
            background-color: transparent;
            border: none;

            svg {
                width: 1.25rem;
                height: 1.25rem;
            }
        }
    }

    .main-content-minicart {
        padding: 1.5rem;
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