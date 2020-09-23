import styled, { css } from 'styled-components';

interface IContainerProps {
    isFocused: boolean;
    isFilled: boolean;
}

export const Container = styled.div<IContainerProps>`
    display: flex;
    align-items: center;

    background: #fff;
    border-radius: 8px;
    padding: 12px 24px;
    width: 100%;
    font-size: 16px;

    margin-top: 24px;
    & + div {
        margin-top: 8px;
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

    ${(props) =>
        props.isFocused &&
        css`
            color: #ff9000;
            border-color: #ff9000;
        `}

    ${(props) =>
        props.isFilled &&
        css`
            color: #ff9000;
        `}

  input {
        flex: 1;
        background: transparent;
        border: 0;
        color: #b7b7cc;

        &::placeholder {
            color: #b7b7cc;
        }
    }

    svg {
        margin-right: 16px;
    }
`;
