import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
    align-items: center;
`;

export const Header = styled.div`
    width: 100%;
    height: 255px;
    background: #3b4cca;
    display: flex;
    flex-direction: column;
`;

export const HeaderContent = styled.div`
    max-width: 1120px;
    display: flex;
    align-items: center;
    flex: 1 0 auto;
    @media (max-width: 1260px) {
        justify-content: center;
    }

    > img {
        @media (min-width: 1260px) {
            display: flex;
            margin-left: 20px;
            margin-top: -18px;
            margin-bottom: -61px;
            position: relative;
            height: 276px;
        }
        display: flex;
        height: 180px;
        position: relative;

        @media (max-width: 580px) {
            height: 150px;
        }
    }
`;

export const MenuBar = styled.div`
    background: #cc0000;
    color: #000;
    height: 22%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;

    @media (max-width: 580px) {
        height: 90px;
        h1 {
            text-align: center;
        }
    }
    @media (max-width: 450px) {
        height: 80px;
        h1 {
            max-width: 300px;
            text-align: center;
            font-size: 23px;
        }
    }
`;

export const Content = styled.main`
    max-width: 1120px;
    margin-top: 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    flex: 1;

    .addProduct {
        margin-top: 16px;
        font-family: 'Roboto';
        color: #1e5323;
        font-weight: 600;
        border-radius: 8px;
        border: 0;
        background: #39b100;
        display: flex;
        flex-direction: row;
        align-items: center;

        .text {
            padding: 16px 24px;
        }

        .icon {
            display: flex;
            padding: 12px 12px;
            background: #41c900;
            border-radius: 0 8px 8px 0;
            margin: 0 auto;
        }
        @media (max-width: 450px) {
            .text {
                padding: 10px 14px;
            }
        }
    }
`;

export const Section = styled.aside`
    margin-top: 32px;
    display: flex;
    flex-direction: column;
    justify-content: center;

    h1 {
        align-self: center;
    }

    > p {
        color: #999591;
    }
`;

export const ProductsContainer = styled.div`
    width: 900px;
    max-width: 1280px;
    display: grid;

    grid-template-columns: repeat(4, 1fr);
    grid-gap: 16px;

    @media (max-width: 930px) {
        width: 675px;
        grid-template-columns: repeat(3, 1fr);
        grid-gap: 12px;
    }

    @media (max-width: 700px) {
        width: 450px;
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 12px;
    }

    @media (max-width: 450px) {
        width: 270px;
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 6px;
    }
`;
