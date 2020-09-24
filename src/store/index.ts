import { createStore } from 'redux';
import { IPokemonState } from './modules/pokemonReducer/types';

import rootreducer from './modules/rootreducer';

export interface IState {
    pokemonReducer: IPokemonState;
}

const store = createStore(rootreducer);

export default store;
