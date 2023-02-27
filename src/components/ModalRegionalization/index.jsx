import React, { useEffect, useState } from 'react'
import { Container } from './styles'
import Modal from 'react-modal'
import { ContentModal1 } from './ContentModal1';
import { ContentModal2 } from './ContentModal2';
import { REGIONALIZATION } from '../../graphql/regionalization'
import { useRegionalization } from '../../hooks/regionalization';
import { useMutation, useQuery } from '@apollo/client';
Modal.setAppElement('#root');

export const ModalRegionalization = () => {
    const { selectedState, setDataInfosStore, modalIsOpen, setModalIsOpen, modalContent, setNoRegionalization } = useRegionalization()
    
    const email = 'rafael.almeida@b8one.com'
    if (localStorage.getItem('atomic@b8one')) {
        const { loading, error, data } = useQuery(REGIONALIZATION, {
            variables: {
                input: {
                    email: email,
                    state: localStorage.getItem('atomic@b8one'),
                },
            },
        });
    if (loading) return <p>Carregando...</p>;
    if (error) return alert("Erro :/");
    setDataInfosStore(data)
    setNoRegionalization(false)
    } else {
        const { loading, error, data } = useQuery(REGIONALIZATION, {
            variables: {
                input: {
                    email: email,
                    state: selectedState,
                },
            },
        });
        if (loading) return <p>Carregando...</p>;
        if (error) return alert("Erro :/");
        setDataInfosStore(data)
    }
    
    

    function openModal() {
        setModalIsOpen(true);
    }

    function closeModal() {
        setModalIsOpen(false);
    }
    return (
        <Container>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                contentLabel="Exemplo de modal"
                style={{
                    content: {
                        border: 'none',
                        maxWidth: '656px',
                        margin: '0 auto',
                        height: '664px',
                        padding: '40px',
                        borderRadius: '16px'
                    },
                    overlay: {
                        background: 'rgba(000, 000, 000, 0.3)'
                    }
                }}
            >
            {modalContent === "modal1" ? <ContentModal1 /> : <ContentModal2 />}
            </Modal>

        </Container>
    )
}
