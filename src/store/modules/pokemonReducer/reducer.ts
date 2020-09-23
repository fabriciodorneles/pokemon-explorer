import { Reducer } from 'redux';
import produce from 'immer';
import { ActionTypes, IPokemonState } from './types';

interface IPokemonVars {
    first: number;
}

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

const pokemonReducer: Reducer<IPokemonState> = (
    state = INITIAL_STATE,
    action,
) => {
    return produce(state, (draft) => {
        switch (action.type) {
            case ActionTypes.initializeState: {
                const { pokemonList } = action.payload;
                draft.totalPokemonList = pokemonList;
                draft.currentPokemonList = pokemonList;
                break;
            }
            case ActionTypes.goToDetailsPage: {
                const { pokemonId } = action.payload;
                const selectedPokemon = state.currentPokemonList.find(
                    (pokemon) => pokemon.id === pokemonId,
                );
                if (!selectedPokemon) break;
                draft.currentPokemon = selectedPokemon;
                break;
            }
            case ActionTypes.editPokemon: {
                const { pokemon } = action.payload;
                const updatedPokemonList = state.totalPokemonList.map(
                    (pokemonItem) => {
                        if (pokemonItem.id === pokemon.id) {
                            const updatedPokemon = {
                                id: pokemon.id,
                                name: pokemon.name,
                                image: pokemon.image,
                                types: pokemon.types,
                                attacks: pokemon.attacks,
                                // eslint-disable-next-line no-underscore-dangle
                                __typename: pokemon.__typename,
                            };
                            return updatedPokemon;
                        }
                        return pokemonItem;
                    },
                );
                draft.currentPokemon = pokemon;
                draft.totalPokemonList = updatedPokemonList;
                draft.currentPokemonList = updatedPokemonList;
                break;
            }
            case ActionTypes.searchPokemons: {
                const { formData } = action.payload;
                switch (formData.type) {
                    case 'name': {
                        draft.currentPokemonList = state.totalPokemonList.filter(
                            (pokemon) =>
                                pokemon.name
                                    .toLowerCase()
                                    .includes(formData.content.toLowerCase()),
                        );
                        break;
                    }
                    case 'type': {
                        draft.currentPokemonList = state.totalPokemonList.filter(
                            (pokemon) => {
                                let hasType = false;
                                pokemon.types.map((type) => {
                                    if (
                                        type
                                            .toLowerCase()
                                            .includes(
                                                formData.content.toLowerCase(),
                                            )
                                    )
                                        hasType = true;
                                    return hasType;
                                });
                                if (hasType) return true;
                                return false;
                            },
                        );
                        break;
                    }
                    default: {
                        break;
                    }
                }
                // draft.currentPokemon = pokemon;
                // draft.totalPokemonList = updatedPokemonList;
                // draft.currentPokemonList = updatedPokemonList;
                break;
            }
            default: {
                return draft;
            }
        }
    });
};

export default pokemonReducer;
