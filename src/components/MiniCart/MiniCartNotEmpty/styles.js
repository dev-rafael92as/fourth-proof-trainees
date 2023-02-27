import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;

    .wrapper-footer-minicart {
        position: fixed;
        top: calc(800px - 144px);
        width: 100%;
        max-width: 400px;
        transform: translateX(-24px);

        @media (max-width: 40rem) {
            top: initial;
            bottom: 0;
            transform: translateX(-24px);
        }
    }
`