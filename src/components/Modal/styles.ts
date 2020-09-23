import styled from 'styled-components';
import ReactModal from 'react-modal';

export const StyledModal = styled(ReactModal)`
    top: 50%;
    left: 50%;
    position: fixed;
    right: auto;
    bottom: auto;
    transform: translate(-50%, -50%);
    background: #f0f0f5;
    color: #000000;
    border-radius: 8px;
    width: 736px;
    border: none;
    max-height: 100vh;
    @media (max-width: 750px) {
        width: 450px;
    }
    @media (max-width: 450px) {
        width: 330px;
        padding: 8px;
    }
`;
