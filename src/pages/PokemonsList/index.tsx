import React from 'react';
import { useSelector } from 'react-redux';
import {
    Container,
    Header,
    HeaderContent,
    MenuBar,
    Content,
    Section,
    ProductsContainer,
} from './styles';
import logoImg from '../../assets/pokemon-logo.png';
import Product from '../../components/Product';
import { IState } from '../../store';
import { IPokemon } from '../../store/modules/pokemonReducer/types';

interface IPokemonVars {
    first: number;
}

const Dashboard: React.FC = () => {
    const poke = useSelector<IState, IPokemon[]>(
        (state) => state.pokemonReducer.currentPokemonList,
    );

    return (
        <Container>
            <Header>
                <HeaderContent>
                    <img src={logoImg} alt="EFeira" />
                </HeaderContent>

                <MenuBar>
                    <h1>POKEMON EXPLORER</h1>
                </MenuBar>
            </Header>

            <Content>
                <h1>POKEMONS</h1>
                <Section>
                    <ProductsContainer data-testid="products-list">
                        {poke ? (
                            poke.map((product) => (
                                <Product key={product.id} pokemon={product} />
                            ))
                        ) : (
                            <h1>LOADING...</h1>
                        )}
                    </ProductsContainer>
                </Section>
            </Content>
        </Container>
    );
};

export default Dashboard;
