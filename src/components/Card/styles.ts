import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
    background: #3b4cca;
    border-radius: 8px;
    justify-content: center;
    font-family: 'Roboto';
    width: 210px;
    height: 340px;
    display: flex;
    flex-direction: column;
    @media (max-width: 470px) {
        width: 130px;
        height: 220px;
    }

    header {
        border-radius: 4px 4px 0px 0px;
        height: 200px;
        overflow: hidden;
        transition: 0.3s opacity;
        text-align: center;

        img {
            border-radius: 8px;
            margin-top: 8px;
            width: 188px;
            height: 190px;
            pointer-events: none;
            user-select: none;
            padding: 10px;
            background: #fff;
        }
        @media (max-width: 470px) {
            height: 120px;
            img {
                width: 115px;
                height: 100px;
            }
        }
    }

    section.body {
        flex: 1 0 auto;
        color: #ffde00;

        h2 {
            font-family: 'Roboto';
            font-weight: 700;
            text-align: center;
        }

        p {
            margin-top: 8px;
            font-family: 'Roboto';
            font-weight: 700;
            text-align: center;
            padding: 0px 12px;
        }

        .desc {
            font-family: 'Roboto';
            font-style: italic;
            font-weight: 300;
            margin-top: 15px;
            display: flex;
            flex-direction: row;
            justify-content: center;
            font-size: 14px;
            flex: 1;
            color: #3d3d4d;
            padding: 0px 12px;
        }

        .price {
            display: flex;
            flex-direction: row;
            justify-content: center;
            flex: 1;
            font-style: normal;
            font-size: 12x;
            line-height: 20px;
            padding: 0px 10px;

            b {
                font-weight: 600;
            }

            & + .price {
                padding: 0px 8px;
            }
        }
        @media (max-width: 470px) {
            h2 {
                font-size: 16px;
            }

            p {
                font-size: 14px;
            }

            .desc {
                margin-top: 6px;
            }

            .price {
                font-size: 10x;
                line-height: 10px;
                padding: 0px 10px;
            }
        }
    }

    section.footer {
        flex-shrink: 0;
        padding: 8px 8px;
        border-radius: 0px 0px 8px 8px;

        div.icon-container {
            display: flex;
            flex: 1;
            justify-content: center;

            .icon {
                font-family: 'Roboto';
                background: #b3a125;
                color: #4e4e4e;
                height: 40px;
                border-radius: 6px;
                border: 0;
                padding: 10px 0px;
                width: 170px;
                font-weight: 700;
                font-size: 14px;
                transition: background-color 0.2s;

                &:hover {
                    background: ${shade(0.2, '#4e4e4e')};
                    color: #ffde00;
                }

                @media (max-width: 470px) {
                    width: 120px;
                    height: 28px;
                    padding: 5px;
                    font-size: 11px;
                }
            }
        }
    }
`;
