import styled from "styled-components";

export const Container = styled.div`
    main {
        width: 100%;
        max-width: 1376px;
        margin: 52px auto 0;

        @media (max-width:40rem) {
            padding: 0 16px;
            margin-top: 40px;
        }

        h2 {
            font-weight: 500;
            font-size: 28px;
            line-height: 36px;
            margin-bottom: 32px;

            @media (max-width:40rem) {
                font-weight: 500;
                font-size: 24px;
                line-height: 32px;
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