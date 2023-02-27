import styled from "styled-components";

export const Container = styled.div`
    main {
        width: 100%;
        max-width: 86rem;
        margin: 3.25rem auto 0;

        @media (max-width:40rem) {
            padding: 0 1rem;
            margin-top: 2.5rem;
        }

        h2 {
            font-weight: 500;
            font-size: 1.75rem;
            line-height: 2.25rem;
            margin-bottom: 2rem;

            @media (max-width:40rem) {
                font-weight: 500;
                font-size: 1.5rem;
                line-height: 2rem;
            }
        }
    }

    .overlay {
        width: 100%;
        position: fixed;
        top: 0;
        left: 0;
        height: 100%;
        z-index: 1;
        opacity: .5;
        background-color: ${({ theme }) => theme.FONTS.LIGHT_SURFACE_VARIANT};
    }
`