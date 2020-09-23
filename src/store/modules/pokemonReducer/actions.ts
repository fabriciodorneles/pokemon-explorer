/* eslint-disable @typescript-eslint/explicit-function-return-type */

import { ActionTypes, IPokemon } from './types';

export function initializeState(pokemonList: IPokemon[]) {
    return {
        type: ActionTypes.initializeState,
        payload: {
            pokemonList,
        },
    };
}
export function goToDetailsPage(pokemonId: string) {
    return {
        type: ActionTypes.goToDetailsPage,
        payload: {
            pokemonId,
        },
    };
}
export function editPokemon(pokemon: IPokemon) {
    return {
        type: ActionTypes.editPokemon,
        payload: {
            pokemon,
        },
    };
}
