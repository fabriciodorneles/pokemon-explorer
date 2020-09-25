import { fireEvent, render } from '@testing-library/react';
import React from 'react';
import PokemonsList from '../../pages/PokemonsList';
import { IPokemon } from '../../store/modules/pokemonReducer/types';

const mockDispatch = jest.fn();
jest.mock('react-redux', () => ({
    useDispatch: () => mockDispatch,
    useSelector: jest.fn(() => {
        const pokemon: IPokemon[] = [
            {
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
            },
        ];
        return pokemon;
    }),
}));

jest.mock('react-router-dom', () => {
    return {
        Link: ({ children }: { children: React.ReactNode }) => children,
    };
});

describe('PokemonsList Page', () => {
    it('should be able to list pokemons', () => {
        const { getByText } = render(<PokemonsList />);
        const card = getByText('Charmeleon');
        expect(card).toBeTruthy();
    });

    it('should be able to search pokemons', () => {
        const { getByText } = render(<PokemonsList />);
        const buttonSearch = getByText('Buscar');
        fireEvent.click(buttonSearch);
        expect(mockDispatch).toHaveBeenCalled();
    });

    // it('should be able to load pokemons', () => {
    //     const pokemonid = {
    //         payload: { pokemonId: '1' },
    //         type: 'GO_TO_DETAILS_PAGE',
    //     };
    //     const { getByText } = render(<PokemonsList />);
    //     expect(mockSelector).toHaveBeenCalledWith(pokemonid);
    // });
});
