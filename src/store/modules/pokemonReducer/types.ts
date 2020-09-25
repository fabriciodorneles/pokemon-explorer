export enum ActionTypes {
    initializeState = 'INITIALIZE_STATE',
    selectPokemon = 'SELECT_POKEMON',
    updatePokemon = 'UPDATE_POKEMON',
    searchPokemons = 'SEARCH_POKEMONS',
    voidAction = 'VOID_ACTION',
}

export interface SearchPokemonsFormData {
    content: string;
    type: string;
}

export interface IAttack {
    name: string;
    type: string;
    damage: number;
}

export interface IAttacks {
    fast: IAttack[];
    special: IAttack[];
}

export interface IPokemon {
    id: string;
    name: string;
    image: string;
    types: string[];
    attacks: IAttacks;
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
