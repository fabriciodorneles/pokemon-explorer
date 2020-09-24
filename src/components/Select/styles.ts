import styled from 'styled-components';

export const ContainerSelect = styled.div`
    display: flex;
    align-items: center;

    background: #fff;
    border-radius: 8px;
    padding: 12px 24px;
    width: 100%;
    font-size: 16px;
    height: 40px;
    margin-left: 8px;

    & + div {
        margin-top: 0px;
        @media (max-width: 450px) {
            margin-top: 12px;
        }
    }

    h1 {
        margin-bottom: 40px;
        font-weight: 600;
        font-size: 36px;
        line-height: 36px;
    }

    select {
        flex: 1;
        background: transparent;
        border: 0;
        color: #b7b7cc;

        &::placeholder {
            color: #b7b7cc;
        }
    }
`;
