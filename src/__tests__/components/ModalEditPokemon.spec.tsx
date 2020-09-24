import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import { IPokemon } from '../../store/modules/pokemonReducer/types';
import ModalEditPokemon from '../../components/ModalEditPokemon';

describe('ModalEditPokemon Component', () => {
    let isOpen = true;
    const setIsOpen = jest.fn(() => {
        isOpen = false;
    });
    const handleUpdatePokemon = jest.fn();

    it('should be able to render Modal', () => {
        const pokemon: IPokemon = {
            id: '1',
            name: 'Charmeleon',
            image: 'imageAdress',
            types: ['Fire', 'Fly'],
            attacks: {
                fast: [
                    {
                        name: 'attack1',
                        type: 'tipo1',
                        damage: 10,
                    },
                ],
                special: [
                    {
                        name: 'attack1',
                        type: 'tipo1',
                        damage: 10,
                    },
                ],
            },
            __typename: 'qualquer',
        };
        const { getByText } = render(
            <ModalEditPokemon
                isOpen={isOpen}
                setIsOpen={setIsOpen}
                editingPokemon={pokemon}
                handleUpdatePokemon={handleUpdatePokemon}
            />,
        );

        expect(getByText('Editar Pokemon')).toBeTruthy();
    });

    it('should be able to close Modal', () => {
        const pokemon: IPokemon = {
            id: '1',
            name: 'Charmeleon',
            image: 'imageAdress',
            types: ['Fire', 'Fly'],
            attacks: {
                fast: [
                    {
                        name: 'attack1',
                        type: 'tipo1',
                        damage: 10,
                    },
                ],
                special: [
                    {
                        name: 'attack1',
                        type: 'tipo1',
                        damage: 10,
                    },
                ],
            },
            __typename: 'qualquer',
        };
        const { getByText } = render(
            <ModalEditPokemon
                isOpen={isOpen}
                setIsOpen={setIsOpen}
                editingPokemon={pokemon}
                handleUpdatePokemon={handleUpdatePokemon}
            />,
        );

        const buttonElement = getByText('Confirmar Edição');

        fireEvent.click(buttonElement);

        expect(isOpen).not.toBeTruthy();
    });
});
