/* eslint-disable @typescript-eslint/explicit-function-return-type */

import { ActionTypes, IPokemon, SearchPokemonsFormData } from './types';

export function initializeState(pokemonList: IPokemon[]) {
    return {
        type: ActionTypes.initializeState,
        payload: {
            pokemonList,
        },
    };
}
export function selectPokemon(pokemonId: string) {
    return {
        type: ActionTypes.selectPokemon,
        payload: {
            pokemonId,
        },
    };
}
export function updatePokemon(pokemon: IPokemon) {
    return {
        type: ActionTypes.updatePokemon,
        payload: {
            pokemon,
        },
    };
}
export function searchPokemons(formData: SearchPokemonsFormData) {
    return {
        type: ActionTypes.searchPokemons,
        payload: {
            formData,
        },
    };
}
