import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    flex-direction: column;
    align-items: center;
    background: #ffde00;
    padding-bottom: 40px;
    border-radius: 8px;
    @media (max-width: 850px) {
    }
`;

export const Header = styled.div`
    width: 100%;
    margin: 0;
    height: 240px;
    display: flex;
    flex-direction: column;
    @media (max-width: 850px) {
        height: 120px;
    }
`;

export const HeaderContent = styled.div`
    margin: -40px 20px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    flex: 1 0 auto;
    .back {
        padding: 4px;
        border-radius: 4px;
        margin-top: -40px;
        .voltar {
            font-family: 'Roboto';
            background: #b3a125;
            color: #000;
            height: 35px;
            border-radius: 6px;
            border: 0;
            padding: 10px;
            width: 100px;
            font-weight: 700;
            font-size: 14px;
            transition: background-color 0.2s;

            &:hover {
                background: ${shade(0.2, '#378d3e')};
            }
        }
    }
    @media (max-width: 580px) {
        margin: 0px 10px;
    }

    img {
        @media (min-width: 1260px) {
            margin-top: -15px;
            display: flex;
            position: relative;
            height: 230px;
        }
        display: flex;
        height: 150px;
        position: relative;

        @media (max-width: 580px) {
            margin-left: -10px;
        }
    }
`;

export const Content = styled.main`
    margin-top: 20px;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    flex: 1;
    width: 100%;
    .pokemonCard {
        display: flex;
        flex-direction: row;
        background: #3b4cca;
        border-radius: 8px;
        padding: 10px 20px;

        .avatarName {
            display: flex;
            flex-direction: column;
            text-align: center;
            h1 {
                margin: 12px;
            }
            img {
                border-radius: 8px;
            }
            footer {
                padding: 16px;
                button {
                    font-family: 'Roboto';
                    margin-top: 16px;
                    margin-bottom: 16px;
                    background: #378d3e;
                    height: 40px;
                    border-radius: 6px;
                    border: 0;
                    color: #fff;
                    padding: 10px;
                    width: 250px;
                    font-weight: 500;
                    transition: background-color 0.2s;

                    &:hover {
                        background: ${shade(0.2, '#378d3e')};
                    }
                }
            }
        }
        .pokemonInfo {
            margin-left: 20px;
            text-align: center;
            padding-top: 50px;
            .types {
                div {
                    margin-top: 16px;
                    display: flex;
                }
                h3 {
                    font-family: 'Roboto';
                    color: #fff;
                    background: #378d3e;
                    padding: 12px;
                    border-radius: 8px;
                    margin-left: 8px;
                }
            }
            .attackList {
                margin-top: 16px;
                display: flex;
                flex: 1;
                justify-content: center;
            }

            .attackContainer {
                background: #378d3e;
                padding: 12px;
                border-radius: 8px;
                font-family: 'Roboto';
                color: #fff;
                & + .attackContainer {
                    margin-left: 12px;
                }
            }

            .fastAttacks {
                margin-top: 24px;
            }

            .specialAttacks {
                margin-top: 24px;
            }
        }
        @media (max-width: 850px) {
            flex-direction: column;
            width: 360px;

            .avatarName {
                align-content: center;
                align-items: center;
                img {
                    width: 188px;
                    height: 190px;
                }
                footer {
                    padding: 0px;

                    button {
                        margin: 8px;
                    }
                }
            }
            .pokemonInfo {
                padding-top: 8px;
                margin-left: 0px;
                .attackContainer {
                    font-size: 14px;
                }
                .fastAttacks {
                    margin-top: 8px;
                }

                .specialAttacks {
                    margin-top: 8px;
                }
            }
        }
    }
`;
