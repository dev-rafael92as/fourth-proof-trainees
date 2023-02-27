import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    gap: 24px;
    flex-wrap: wrap;

    @media (max-width: 40rem) {
        gap:  8px;
    }
`