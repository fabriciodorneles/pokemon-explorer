export enum ActionTypes {
    initializeState = 'INITIALIZE_STATE',
    goToDetailsPage = 'GO_TO_DETAILS_PAGE',
    editPokemon = 'EDIT_POKEMON',
    searchPokemons = 'SEARCH_POKEMONS',
}

export interface SearchPokemonsFormData {
    content: string;
    type: string;
}

export interface Attack {
    name: string;
    type: string;
    damage: number;
}

export interface Attacks {
    fast: Attack[];
    special: Attack[];
}

export interface IPokemon {
    id: string;
    name: string;
    image: string;
    types: string[];
    attacks: Attacks;
    __typename: string;
}

export interface IPokemonList {
    pokemons: IPokemon[];
}

export interface IPokemonState {
    totalPokemonList: IPokemon[];
    currentPokemonList: IPokemon[];
    currentPokemon: IPokemon;
}
