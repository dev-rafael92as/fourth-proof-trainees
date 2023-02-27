import styled from "styled-components";

export const Container = styled.div`
    background-color: ${({ theme }) => theme.FONTS.WHITE_BACKGROUND};
    
    .container-regionalizationInfos {
        width: 100%;
        max-width: 1376px;
        margin: 0 auto;
        height: 100px;
        
        display: flex;
        justify-content: space-between;
        align-items: center;
        
        .container-infos {

            .wrapper-firstInfos {
                display: flex;
                align-items: center;
                margin-bottom: 8px;

                .store-name {
                    font-weight: 700;
                    font-size: 16px;
                    line-height: 32px;
                    margin-right: 20px;
                }

                p:last-child {
                    display: flex;
                    align-items: center;
                    /* width: 100%; */
                    max-width: 723px;

                    span {
                        padding: 0 10px;
                    }

                    svg {
                        color: ${({ theme }) => theme.FONTS.LIGHT_SECONDARY};
                        height: 21px;
                        width: 18px;
                        /* transform: translateY(6px); */
                    }
                }
            }
            
            .wrapper-lastInfos {
                display: flex;
                align-items: center;
                
                p:first-child {
                    margin-right: 51px;
                }

                p {
                    display: flex;
                    align-items: center;


                    svg {
                        color: ${({ theme }) => theme.FONTS.LIGHT_SECONDARY};
                        height: 21px;
                        width: 18px;
                        margin-right: 19px;
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
            padding: 0 16px;
            background: ${({ theme }) => theme.FONTS.LIGHT_SURFACE_VARIANT};
        }
        
        .mobile-dropdown {
            display: flex;
            align-items: center;
            justify-content: space-between;

            > svg {
                height: 24px;
                width: 24px;
            }
            
            .store-name {
                font-weight: 700;
                font-size: 16px;
                line-height: 20px;
                margin: 20px 0;
            }
        }

        .dropdown-close {
            height: 0;
            opacity: 0;
            visibility: hidden;
            /* transition: all ease-in-out .3s; */
        }

        .dropdown-open {
            margin-bottom: 15px;
        }

        .wrapper-firstInfos {
            display: flex;
            align-items: center;
            gap: 12px;
            margin-bottom: 12px;

            svg {
                color: ${({ theme }) => theme.FONTS.LIGHT_SECONDARY};
                height: 40px;
                width: 40px;
            }
        }

        .wrapper-lastInfos {
            display: flex;
            flex-direction: column;
            gap: 12px;

            p {
                display: flex;
                align-items: center;
                gap: 12px;
                svg {
                    color: ${({ theme }) => theme.FONTS.LIGHT_SECONDARY};
                    height: 20px;
                    width: 20px;
                }
            }
        }
    }

`