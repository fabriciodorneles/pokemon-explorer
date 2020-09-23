import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import PokemonDetails from '../pages/PokemonDetails';

import ProductsList from '../pages/PokemonsList';

const Routes: React.FC = () => (
    <BrowserRouter>
        <Route path="/" exact component={ProductsList} />
        <Route path="/details" exact component={PokemonDetails} />
    </BrowserRouter>
);

export default Routes;
