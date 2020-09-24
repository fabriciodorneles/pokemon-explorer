import React, { useCallback, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FormHandles } from '@unform/core';
import {
    Container,
    Header,
    HeaderContent,
    MenuBar,
    Content,
    Section,
    ProductsContainer,
    Form,
} from './styles';
import logoImg from '../../assets/pokemon-logo.png';
import Card from '../../components/Card';
import { IState } from '../../store';
import {
    IPokemon,
    SearchPokemonsFormData,
} from '../../store/modules/pokemonReducer/types';
import Input from '../../components/Input';
import Select from '../../components/Select';
import { searchPokemons } from '../../store/modules/pokemonReducer/actions';

const PokemonsList: React.FC = () => {
    const dispatch = useDispatch();

    const formRef = useRef<FormHandles>(null);

    const poke = useSelector<IState, IPokemon[]>(
        (state) => state.pokemonReducer.currentPokemonList,
    );

    const handleSubmit = useCallback(
        (data: SearchPokemonsFormData) => {
            dispatch(searchPokemons(data));
        },
        [dispatch],
    );

    return (
        <Container>
            <Header>
                <HeaderContent>
                    <img src={logoImg} alt="EFeira" />
                    <h1>EXPLORER</h1>
                </HeaderContent>

                <MenuBar>
                    <Form ref={formRef} onSubmit={handleSubmit}>
                        <Input name="content" placeholder="Nome do Pokemon" />
                        <Select name="type" defaultValue="Tipo de Pesquisa">
                            <option key="name" value="name">
                                Nome
                            </option>
                            <option key="type" value="type">
                                Tipo
                            </option>
                        </Select>

                        <button type="submit">
                            <div className="text">Buscar</div>
                        </button>
                    </Form>
                </MenuBar>
            </Header>

            <Content>
                <h1>POKEMONS</h1>
                <Section>
                    <ProductsContainer data-testid="products-list">
                        {poke.map((product) => (
                            <Card key={product.id} pokemon={product} />
                        ))}
                    </ProductsContainer>
                </Section>
            </Content>
        </Container>
    );
};

export default PokemonsList;
