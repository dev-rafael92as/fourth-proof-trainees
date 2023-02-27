import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    gap: 1.5rem;
    flex-wrap: wrap;

    @media (max-width: 40rem) {
        gap:  0.5rem;
    }
`