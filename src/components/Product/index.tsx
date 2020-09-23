import React from 'react';

import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { goToDetailsPage } from '../../store/modules/pokemonReducer/actions';
import { IPokemon } from '../../store/modules/pokemonReducer/types';

import { Container } from './styles';

interface IProps {
    pokemon: IPokemon;
}

const Product: React.FC<IProps> = ({ pokemon }: IProps) => {
    const dispatch = useDispatch();

    function setPokemon(): void {
        dispatch(goToDetailsPage(pokemon.id));
    }

    return (
        <Container>
            <header>
                <img src={pokemon.image} alt={pokemon.name} />
            </header>
            <section className="body">
                <h2>{pokemon.name}</h2>
                {pokemon.types.map((pokeType) => (
                    <p key={pokeType} className="price">
                        <b>{pokeType}</b>
                    </p>
                ))}
            </section>
            <section className="footer">
                <div className="icon-container">
                    <Link to="/details">
                        <button
                            type="button"
                            className="icon"
                            onClick={setPokemon}
                        >
                            <p> DETALHES / EDITAR </p>
                        </button>
                    </Link>
                </div>
            </section>
        </Container>
    );
};

export default Product;
