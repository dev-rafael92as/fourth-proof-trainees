import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;

    .wrapper-footer-minicart {
        position: fixed;
        top: calc(50rem - 9rem);
        width: 100%;
        max-width: 25rem;
        transform: translateX(-1.5rem);

        @media (max-width: 40rem) {
            top: initial;
            bottom: 0;
            transform: translateX(-1.5rem);
        }
    }
`