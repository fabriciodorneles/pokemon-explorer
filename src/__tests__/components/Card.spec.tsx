import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import Card from '../../components/Card';
import { IPokemon } from '../../store/modules/pokemonReducer/types';

jest.mock('react-router-dom', () => {
    return {
        Link: ({ children }: { children: React.ReactNode }) => children,
    };
});

const mockDispatch = jest.fn();
jest.mock('react-redux', () => {
    return {
        useDispatch: () => mockDispatch,
    };
});

describe('Card Component', () => {
    it('should be able to dispacth action selectPokemon', () => {
        const pokemonid = {
            payload: { pokemonId: '1' },
            type: 'SELECT_POKEMON',
        };
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
        const { getByText } = render(<Card pokemon={pokemon} />);

        const buttonGoToDetails = getByText('DETALHES / EDITAR');

        fireEvent.click(buttonGoToDetails);

        expect(mockDispatch).toHaveBeenCalledWith(pokemonid);
    });

    it('should be able to render Card', () => {
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
        const { getByTestId } = render(<Card pokemon={pokemon} />);

        expect(getByTestId('card-container')).toBeTruthy();
    });
});
jest.mock('react-redux');
