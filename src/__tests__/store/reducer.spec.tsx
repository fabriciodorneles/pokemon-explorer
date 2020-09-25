import { AnyAction } from 'redux';
import {
    ActionTypes,
    IPokemon,
    IPokemonState,
    SearchPokemonsFormData,
} from '../../store/modules/pokemonReducer/types';

import * as actions from '../../store/modules/pokemonReducer/actions';

import reducer from '../../store/modules/pokemonReducer/reducer';

describe('Pokemon reducer', () => {
    const INITIAL_STATE: IPokemonState = {
        totalPokemonList: [],
        currentPokemonList: [],
        currentPokemon: {
            id: '',
            name: '',
            image: '',
            types: [],
            attacks: {
                fast: [],
                special: [],
            },
            __typename: '',
        },
    };

    const pokemon1: IPokemon = {
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

    const pokemon2: IPokemon = {
        id: '2',
        name: 'Ivysaur',
        image: 'imageAdress2',
        types: ['Poison', 'Grass'],
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

    const INITIALZED_STATE: IPokemonState = {
        totalPokemonList: [pokemon1, pokemon2],
        currentPokemonList: [pokemon1, pokemon2],
        currentPokemon: {
            id: '',
            name: '',
            image: '',
            types: [],
            attacks: {
                fast: [],
                special: [],
            },
            __typename: '',
        },
    };

    it('should initialize the state', () => {
        const pokemonList: IPokemon[] = [pokemon1, pokemon2];
        expect(
            reducer(INITIAL_STATE, {
                type: ActionTypes.initializeState,
                payload: {
                    pokemonList,
                },
            }),
        ).toEqual(INITIALZED_STATE);
    });

    it('should select currentPokemon', () => {
        const pokemonId = '2';
        expect(
            reducer(INITIALZED_STATE, {
                type: ActionTypes.selectPokemon,
                payload: {
                    pokemonId,
                },
            }),
        ).toEqual({
            totalPokemonList: [pokemon1, pokemon2],
            currentPokemonList: [pokemon1, pokemon2],
            currentPokemon: pokemon2,
        });
    });

    it('should do nothing if selected pokemon don´t exists', () => {
        const pokemonId = '3';
        expect(
            reducer(INITIALZED_STATE, {
                type: ActionTypes.selectPokemon,
                payload: {
                    pokemonId,
                },
            }),
        ).toEqual({
            totalPokemonList: [pokemon1, pokemon2],
            currentPokemonList: [pokemon1, pokemon2],
            currentPokemon: {
                id: '',
                name: '',
                image: '',
                types: [],
                attacks: {
                    fast: [],
                    special: [],
                },
                __typename: '',
            },
        });
    });

    it('should update Pokemon in totalList, currentList and currentPokemon', () => {
        const pokemon2Updated = {
            id: '2',
            name: 'IVVVVVVIIII',
            image: 'imageAdress222',
            types: ['Poison', 'Grass'],
            attacks: {
                fast: [
                    {
                        name: 'UNIVERSAL PUNCH',
                        type: 'tipo1',
                        damage: 10,
                    },
                    {
                        name: 'STAR BLAZER',
                        type: 'tipo1',
                        damage: 1110,
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

        expect(
            reducer(INITIALZED_STATE, {
                type: ActionTypes.updatePokemon,
                payload: {
                    pokemon: pokemon2Updated,
                },
            }),
        ).toEqual({
            totalPokemonList: [pokemon1, pokemon2Updated],
            currentPokemonList: [pokemon1, pokemon2Updated],
            currentPokemon: pokemon2Updated,
        });
    });

    it('should search Pokemon totalList by NAME and return in currentList', () => {
        const formData: SearchPokemonsFormData = {
            content: 'ivy',
            type: 'name',
        };

        expect(
            reducer(INITIALZED_STATE, {
                type: ActionTypes.searchPokemons,
                payload: {
                    formData,
                },
            }),
        ).toEqual({
            totalPokemonList: [pokemon1, pokemon2],
            currentPokemonList: [pokemon2],
            currentPokemon: {
                id: '',
                name: '',
                image: '',
                types: [],
                attacks: {
                    fast: [],
                    special: [],
                },
                __typename: '',
            },
        });
    });
    it('should search by NAME Pokemon totalList and return in currentList', () => {
        const formData: SearchPokemonsFormData = {
            content: 'ivy',
            type: 'name',
        };

        expect(
            reducer(INITIALZED_STATE, {
                type: ActionTypes.searchPokemons,
                payload: {
                    formData,
                },
            }),
        ).toEqual({
            totalPokemonList: [pokemon1, pokemon2],
            currentPokemonList: [pokemon2],
            currentPokemon: {
                id: '',
                name: '',
                image: '',
                types: [],
                attacks: {
                    fast: [],
                    special: [],
                },
                __typename: '',
            },
        });
    });

    it('should search by TYPE Pokemon totalList and return in currentList', () => {
        const formData: SearchPokemonsFormData = {
            content: 'grass',
            type: 'type',
        };

        expect(
            reducer(INITIALZED_STATE, {
                type: ActionTypes.searchPokemons,
                payload: {
                    formData,
                },
            }),
        ).toEqual({
            totalPokemonList: [pokemon1, pokemon2],
            currentPokemonList: [pokemon2],
            currentPokemon: {
                id: '',
                name: '',
                image: '',
                types: [],
                attacks: {
                    fast: [],
                    special: [],
                },
                __typename: '',
            },
        });
    });

    it('should do nothing if search is not NAME or TYPE', () => {
        const formData: SearchPokemonsFormData = {
            content: 'grass',
            type: 'EYES',
        };

        expect(
            reducer(INITIALZED_STATE, {
                type: ActionTypes.searchPokemons,
                payload: {
                    formData,
                },
            }),
        ).toEqual({
            totalPokemonList: [pokemon1, pokemon2],
            currentPokemonList: [pokemon1, pokemon2],
            currentPokemon: {
                id: '',
                name: '',
                image: '',
                types: [],
                attacks: {
                    fast: [],
                    special: [],
                },
                __typename: '',
            },
        });
    });

    it('should do nothing if action dont exists', () => {
        expect(
            reducer(INITIALZED_STATE, {
                type: 'NON_EXISTENT_ACTION',
                payload: {},
            }),
        ).toEqual({
            totalPokemonList: [pokemon1, pokemon2],
            currentPokemonList: [pokemon1, pokemon2],
            currentPokemon: {
                id: '',
                name: '',
                image: '',
                types: [],
                attacks: {
                    fast: [],
                    special: [],
                },
                __typename: '',
            },
        });
    });
    // it('should handle ADD_TODO', () => {
    //     expect(
    //         reducer([], {
    //             type: types.ADD_TODO,
    //             text: 'Run the tests',
    //         }),
    //     ).toEqual([
    //         {
    //             text: 'Run the tests',
    //             completed: false,
    //             id: 0,
    //         },
    //     ]);

    //     expect(
    //         reducer(
    //             [
    //                 {
    //                     text: 'Use Redux',
    //                     completed: false,
    //                     id: 0,
    //                 },
    //             ],
    //             {
    //                 type: types.ADD_TODO,
    //                 text: 'Run the tests',
    //             },
    //         ),
    //     ).toEqual([
    //         {
    //             text: 'Run the tests',
    //             completed: false,
    //             id: 1,
    //         },
    //         {
    //             text: 'Use Redux',
    //             completed: false,
    //             id: 0,
    //         },
    //     ]);
    // });
});
