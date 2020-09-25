import styled from 'styled-components';
import { Form as Unform } from '@unform/web';

export const ScrollableDiv = styled.div`
    overflow: auto;
`;

export const Form = styled(Unform)`
    padding: 48px 40px;
    display: flex;
    flex-direction: column;
    max-height: 100vh;
    @media (max-width: 760px) {
        padding: 12px 40px;
    }

    h1 {
        font-weight: 600;
        font-size: 36px;
        line-height: 36px;
        margin-bottom: 40px;
        @media (max-width: 760px) {
            font-size: 28px;
            margin-bottom: 20px;
            text-align: center;
        }
    }

    .typesContainer {
        display: flex;
        text-align: center;
        flex-direction: column;
        margin-top: 16px;
        & + .typesContainer {
            margin-top: 0px;
        }

        .attack {
            display: flex;
            flex-direction: column;
            justify-content: center;
            justify-items: center;
            & + .attack {
                margin-left: 12px;
            }
            @media (max-width: 760px) {
                width: 150px;
                & + .attack {
                    margin-left: 4px;
                }
            }
        }
    }
    .types {
        margin: 16px 0px 16px 0px;
        display: flex;
        flex-direction: row;
        justify-content: center;
        @media (max-width: 760px) {
            margin: 8px 0px 8px 0px;
        }
    }
    .typesSpecial {
        margin: 16px 0px 16px 0px;
        display: flex;
        flex-direction: row;
        justify-content: center;
        @media (max-width: 760px) {
            margin: 8px 0px 8px 0px;
            flex-direction: column;
        }
    }
    .specialAttacks {
        display: flex;
        margin-left: 12px;
        flex-direction: row;
        justify-content: center;
        @media (max-width: 760px) {
            margin: 0;
        }
    }

    button {
        align-self: flex-end;
        margin-top: 16px;
        margin-bottom: 24px;
        font-family: 'Roboto';
        color: #ffde00;
        font-weight: 600;
        border-radius: 8px;
        border: 0;
        background: #b3a125;
        display: flex;
        flex-direction: row;
        align-items: center;

        .text {
            padding: 16px 24px;
        }

        .icon {
            display: flex;
            padding: 12px 12px;
            background: #7f721a;
            border-radius: 0 8px 8px 0;
            margin: 0 auto;
        }
        @media (max-width: 760px) {
            height: 32px;
            .icon {
                padding: 8px 8px;
                svg {
                    height: 16px;
                }
            }
        }
    }
`;
