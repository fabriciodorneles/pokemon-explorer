import {
    IPokemon,
    SearchPokemonsFormData,
} from '../../store/modules/pokemonReducer/types';

import * as actions from '../../store/modules/pokemonReducer/actions';

describe('actions', () => {
    it('should create an action to initialize state', () => {
        const pokemonList: IPokemon[] = [
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
        const expectedAction = {
            type: 'INITIALIZE_STATE',
            payload: {
                pokemonList: [
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
                ],
            },
        };
        expect(actions.initializeState(pokemonList)).toEqual(expectedAction);
    });

    it('should create an action to select Pokemon', () => {
        const pokemonId = '1';

        const expectedAction = {
            type: 'SELECT_POKEMON',
            payload: {
                pokemonId: '1',
            },
        };
        expect(actions.selectPokemon(pokemonId)).toEqual(expectedAction);
    });

    it('should create an action to update Pokemon', () => {
        const pokemonList: IPokemon = {
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

        const expectedAction = {
            type: 'UPDATE_POKEMON',
            payload: {
                pokemon: {
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
            },
        };
        expect(actions.updatePokemon(pokemonList)).toEqual(expectedAction);
    });

    it('should create an action to search Pokemons', () => {
        const formData: SearchPokemonsFormData = {
            content: 'poison',
            type: 'type',
        };

        const expectedAction = {
            type: 'SEARCH_POKEMONS',
            payload: {
                formData: {
                    content: 'poison',
                    type: 'type',
                },
            },
        };
        expect(actions.searchPokemons(formData)).toEqual(expectedAction);
    });
});
