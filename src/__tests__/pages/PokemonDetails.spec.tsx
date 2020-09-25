import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import PokemonDetails from '../../pages/PokemonDetails';
import { IPokemon } from '../../store/modules/pokemonReducer/types';

const mockDispatch = jest.fn();
jest.mock('react-redux', () => ({
    useDispatch: () => mockDispatch,
    useSelector: jest.fn(() => {
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

        return pokemon;
    }),
}));

jest.mock('react-router-dom', () => {
    return {
        Link: ({ children }: { children: React.ReactNode }) => children,
    };
});

describe('PokemonsList Page', () => {
    it('should be able to detail pokemons', () => {
        const { debug } = render(<PokemonDetails />);

        debug();
    });

    it('should be able to open modal', () => {
        const { getByText } = render(<PokemonDetails />);
        const editButton = getByText('EDITAR POKEMON');
        fireEvent.click(editButton);
        const modal = getByText('Confirmar Edição');

        expect(modal).toBeTruthy();
    });

    it('should be able to handle update', () => {
        const { getByText } = render(<PokemonDetails />);
        const editButton = getByText('EDITAR POKEMON');
        fireEvent.click(editButton);
        const modalButton = getByText('Confirmar Edição');
        fireEvent.click(modalButton);

        expect(mockDispatch).toHaveBeenCalled();
    });
});
