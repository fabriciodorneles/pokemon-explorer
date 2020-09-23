import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    flex-direction: column;
    align-items: center;
    background: #ffde00;
    padding-bottom: 40px;
`;

export const Header = styled.div`
    width: 100%;
    margin: 0;
    height: 240px;
    display: flex;
    flex-direction: column;
`;

export const HeaderContent = styled.div`
    margin: 0px 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 1 0 auto;
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
        height: 180px;
        position: relative;

        @media (max-width: 580px) {
            margin-left: -10px;
            height: 150px;
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
                margin-left: 12px;
                font-family: 'Roboto';
                color: #fff;
            }

            .fastAttacks {
                margin-top: 24px;
            }

            .specialAttacks {
                margin-top: 24px;
            }
        }
    }
    .adress {
        h3 {
            margin-top: 16px;
            font-size: 24px;
        }
        div {
            font-size: 20px;
            margin-top: 8px;
            & + div {
                margin-top: 2px;
            }
        }
        display: flex;
        flex-direction: column;
        justify-content: center;
        text-align: center;
    }
    @media (max-width: 450px) {
        h1 {
            font-size: 26px;
        }
    }

    .cart {
        margin-top: 24px;
        margin-bottom: 30px;
        background: rgba(206, 212, 207, 0.31);
        justify-content: center;
        font-family: 'Roboto';
        width: 370px;
        display: flex;
        flex-direction: column;
        border-radius: 8px;
        padding: 20px 20px;
        @media (max-width: 450px) {
            width: 350px;
        }

        header {
            margin-bottom: 16px;
            text-align: center;
            div.total {
                border-bottom: 1px solid #e5e5e5;
                margin-bottom: 8px;
            }
            h1 {
                padding-bottom: 16px;
                font-weight: 700;
                font-size: 24px;
            }
            button.completeOrder {
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

        section.body {
            flex: 1;
            justify-content: center;

            div.product {
                display: flex;
                align-items: center;
                margin-bottom: 4px;
                h2 {
                    margin-left: 20px;
                    font-family: 'Roboto';
                    font-size: 18px;
                    font-weight: 700;
                }

                div.productName {
                    h2 {
                        font-size: 16px;
                        width: 150px;
                    }
                    text-align: left;
                }

                div.quantity {
                    h2 {
                        font-size: 16px;
                        margin-left: 10px;
                    }
                    text-align: left;
                }

                div.price {
                    h2 {
                        font-size: 16px;
                    }
                    text-align: left;
                }

                @media (max-width: 450px) {
                    div.productName {
                        h2 {
                            font-size: 15px;
                            width: 140px;
                        }
                    }

                    div.quantity {
                        h2 {
                            font-size: 15px;
                            margin-left: 5px;
                        }
                    }

                    div.price {
                        h2 {
                            font-size: 15px;
                            margin-left: 12px;
                        }
                    }
                }

                div.quantityComponent {
                    margin-right: 20px;
                    display: flex;
                    align-items: center;
                    width: 30px;
                    height: 22px;
                    border-radius: 12px;

                    div.separator {
                        display: flex;
                        width: 2px;
                        height: 22px;
                        align-items: center;
                        justify-content: center;
                        padding: 1px;
                        background: #1e5323;
                        color: #1e5323;
                    }

                    button {
                        display: flex;
                        flex-direction: row;
                        align-items: center;
                        background: #378d3e;
                        color: #1e5323;

                        padding: 3px 4px;
                        border: 0;
                        transition: 0.1s;
                    }

                    button.plus {
                        border-radius: 12px 0px 0px 12px;
                    }
                    button.minus {
                        border-radius: 0px 12px 12px 0px;
                    }
                }
            }
            @media (max-width: 450px) {
            }
        }
        footer {
            margin-bottom: 16px;
            text-align: center;
            div.total {
                border-bottom: 1px solid #e5e5e5;
                margin-bottom: 8px;
            }
            h1 {
                padding-bottom: 16px;
                font-weight: 700;
                font-size: 24px;
            }
            button.completeOrder {
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
`;
