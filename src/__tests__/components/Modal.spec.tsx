import React from 'react';
import { render } from '@testing-library/react';
import Modal from '../../components/Modal';

describe('Modal Component', () => {
    const isOpen = true;
    const setIsOpen = jest.fn();
    it('should be able to render Modal', () => {
        const { getByText } = render(
            <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
                <h1>Editar Pokemon</h1>
            </Modal>,
        );

        expect(getByText('Editar Pokemon')).toBeTruthy();
    });
});
jest.mock('react-redux');
