import React from 'react';
import { useDispatch } from 'react-redux';

import { useQuery } from 'react-apollo';
import GlobalStyle from './styles/global';
import Routes from './routes';
import { GET_POKEMONS } from './graphql/get-pokemons';
import { IPokemonList } from './store/modules/pokemonReducer/types';
import { initializeState } from './store/modules/pokemonReducer/actions';

interface IPokemonVars {
    first: number;
}
const App: React.FC = () => {
    const dispatch = useDispatch();

    const { data: { pokemons = [] } = {} } = useQuery<
        IPokemonList,
        IPokemonVars
    >(GET_POKEMONS, {
        variables: { first: 151 },
    });
    dispatch(initializeState(pokemons));

    return (
        <>
            <Routes />
            <GlobalStyle />
        </>
    );
};

export default App;
