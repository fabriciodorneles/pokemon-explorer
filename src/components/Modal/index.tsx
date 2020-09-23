import React, { useState, useEffect } from 'react';

import { StyledModal } from './styles';

interface IFoodPlate {
    id: number;
    name: string;
    image: string;
    price: string;
    description: string;
    available: boolean;
}

interface IModalProps {
    children: any;
    isOpen: boolean;
    setIsOpen: () => void;
}

const Modal: React.FC<IModalProps> = ({ children, isOpen, setIsOpen }) => {
    const [modalStatus, setModalStatus] = useState(isOpen);

    useEffect(() => {
        setModalStatus(isOpen);
    }, [isOpen]);

    return (
        <StyledModal
            shouldCloseOnOverlayClick={!false}
            onRequestClose={setIsOpen}
            isOpen={modalStatus}
            ariaHideApp={false}
            style={{
                overlay: {
                    backgroundColor: '#121214e6',
                },
            }}
        >
            {children}
        </StyledModal>
    );
};

export default Modal;
