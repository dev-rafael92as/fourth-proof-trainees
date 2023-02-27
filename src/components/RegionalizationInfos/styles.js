import styled from "styled-components";

export const Container = styled.div`
    background-color: ${({ theme }) => theme.FONTS.WHITE_BACKGROUND};
    
    .container-regionalizationInfos {
        width: 100%;
        max-width: 86rem;
        margin: 0 auto;
        height: 6.25rem;
        
        display: flex;
        justify-content: space-between;
        align-items: center;
        
        .container-infos {

            .wrapper-firstInfos {
                display: flex;
                align-items: center;
                margin-bottom: 0.5rem;

                .store-name {
                    font-weight: 700;
                    font-size: 1rem;
                    line-height: 2rem;
                    margin-right: 1.25rem;
                }

                p:last-child {
                    display: flex;
                    align-items: center;
                    /* width: 100%; */
                    max-width: 45.1875rem;

                    span {
                        padding: 0 0.625rem;
                    }

                    svg {
                        color: ${({ theme }) => theme.FONTS.LIGHT_SECONDARY};
                        height: 1.3125rem;
                        width: 1.125rem;
                        /* transform: translateY(0.375rem); */
                    }
                }
            }
            
            .wrapper-lastInfos {
                display: flex;
                align-items: center;
                
                p:first-child {
                    margin-right: 3.1875rem;
                }

                p {
                    display: flex;
                    align-items: center;


                    svg {
                        color: ${({ theme }) => theme.FONTS.LIGHT_SECONDARY};
                        height: 1.3125rem;
                        width: 1.125rem;
                        margin-right: 1.1875rem;
                    }
                }
            }
        }
        @media (max-width: 40rem) {
            display: none;
        }
    }

    .container-regionalizationInfos-mobile {
        display: none;
        @media (max-width: 40rem ) {
            display: flex;
            flex-direction: column;
            padding: 0 1rem;
            background: ${({ theme }) => theme.FONTS.LIGHT_SURFACE_VARIANT};
        }
        
        .mobile-dropdown {
            display: flex;
            align-items: center;
            justify-content: space-between;

            > svg {
                height: 1.5rem;
                width: 1.5rem;
            }
            
            .store-name {
                font-weight: 700;
                font-size: 1rem;
                line-height: 1.25rem;
                margin: 1.25rem 0;
            }
        }

        .dropdown-close {
            height: 0;
            opacity: 0;
            visibility: hidden;
            /* transition: all ease-in-out .3s; */
        }

        .dropdown-open {
            margin-bottom: 0.9375rem;
        }

        .wrapper-firstInfos {
            display: flex;
            align-items: center;
            gap: 0.75rem;
            margin-bottom: 0.75rem;

            svg {
                color: ${({ theme }) => theme.FONTS.LIGHT_SECONDARY};
                height: 2.5rem;
                width: 2.5rem;
            }
        }

        .wrapper-lastInfos {
            display: flex;
            flex-direction: column;
            gap: 0.75rem;

            p {
                display: flex;
                align-items: center;
                gap: 0.75rem;
                svg {
                    color: ${({ theme }) => theme.FONTS.LIGHT_SECONDARY};
                    height: 1.25rem;
                    width: 1.25rem;
                }
            }
        }
    }

`