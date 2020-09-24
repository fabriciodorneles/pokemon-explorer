import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Container, Header, HeaderContent, Content } from './styles';
import logoImg from '../../assets/pokemon-logo.png';
import { IState } from '../../store';
import { IPokemon } from '../../store/modules/pokemonReducer/types';
import ModalEditPokemon from '../../components/ModalEditPokemon';
import { editPokemon } from '../../store/modules/pokemonReducer/actions';

interface IProduct {
    id: string;
    name: string;
    avatar: string;
    price: number;
    quantity: number;
    description: string;
}

const PokemonDetails: React.FC = () => {
    const [editModalOpen, setEditModalOpen] = useState(false);
    const dispatch = useDispatch();
    const selectedPokemon = useSelector<IState, IPokemon>(
        (state) => state.pokemonReducer.currentPokemon,
    );

    async function handleUpdatePokemon(pokemon: IPokemon): Promise<void> {
        pokemon.id = selectedPokemon.id;
        dispatch(editPokemon(pokemon));
    }
    function toggleEditModal(): void {
        setEditModalOpen(!editModalOpen);
    }

    return (
        <Container>
            <Header>
                <HeaderContent>
                    <Link to="/">
                        <img src={logoImg} alt="Pokemon" />
                    </Link>
                </HeaderContent>
            </Header>
            <ModalEditPokemon
                isOpen={editModalOpen}
                setIsOpen={toggleEditModal}
                editingPokemon={selectedPokemon}
                handleUpdatePokemon={handleUpdatePokemon}
                data-testid="pokemon-edit"
            />
            <Content>
                <div className="pokemonCard">
                    <div className="avatarName">
                        <h1 className="titt">{selectedPokemon.name}</h1>
                        <img
                            src={selectedPokemon.image}
                            alt={selectedPokemon.name}
                        />
                        <footer>
                            <button
                                className="completeOrder"
                                type="button"
                                onClick={toggleEditModal}
                            >
                                EDITAR POKEMON
                            </button>
                        </footer>
                    </div>
                    <div className="pokemonInfo">
                        <div className="types">
                            <h2>Type</h2>
                            <div className="attackList">
                                {selectedPokemon.types.map((type) => (
                                    <h3 key={type}>{type}</h3>
                                ))}
                            </div>
                        </div>
                        <div className="fastAttacks">
                            <h2>Fast Attacks</h2>
                            <div className="attackList">
                                {selectedPokemon.attacks.fast.map((attack) => (
                                    <div className="attackContainer">
                                        <h3>{attack.name}</h3>
                                        <h3>{attack.type}</h3>
                                        <h3>{attack.damage}</h3>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="specialAttacks">
                            <h2>Special Attacks</h2>
                            <div className="attackList">
                                {selectedPokemon.attacks.special.map(
                                    (attack) => (
                                        <div className="attackContainer">
                                            <h3>{attack.name}</h3>
                                            <h3>{attack.type}</h3>
                                            <h3>{attack.damage}</h3>
                                        </div>
                                    ),
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </Content>
        </Container>
    );
};

export default PokemonDetails;
