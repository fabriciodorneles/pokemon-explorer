import React, { useRef, useCallback } from 'react';

import { FiCheckSquare } from 'react-icons/fi';
import { FormHandles } from '@unform/core';
import { ScrollableDiv, Form } from './styles';
import Modal from '../Modal';
import Input from '../Input';
import { IPokemon } from '../../store/modules/pokemonReducer/types';

interface IProduct {
    id: number;
    name: string;
    avatar: string;
    price: string;
    quantity: string;
    description: string;
}

interface IModalProps {
    isOpen: boolean;
    setIsOpen: () => void;
    handleUpdatePokemon: (pokemon: IPokemon) => void;
    editingPokemon: IPokemon;
}

const ModalEditPokemon: React.FC<IModalProps> = ({
    isOpen,
    setIsOpen,
    editingPokemon,
    handleUpdatePokemon,
}) => {
    const formRef = useRef<FormHandles>(null);

    const handleSubmit = useCallback(
        async (data: IPokemon) => {
            handleUpdatePokemon(data);
            setIsOpen();
        },
        [handleUpdatePokemon, setIsOpen],
    );

    return (
        <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
            <ScrollableDiv>
                <Form
                    ref={formRef}
                    onSubmit={handleSubmit}
                    initialData={editingPokemon}
                >
                    <h1>Editar Pokemon</h1>
                    <Input
                        name="image"
                        placeholder="Cole um link da imagem do Pokemon"
                    />
                    <Input name="name" placeholder="Nome do Pokemon" />
                    <div className="typesContainer">
                        <h3>Types</h3>
                        <div className="types">
                            <div className="attack">
                                <Input
                                    className="typeInput"
                                    name="types[0]"
                                    placeholder="Type 1"
                                />
                            </div>
                            <div className="attack">
                                <Input
                                    className="typeInput"
                                    name="types[1]"
                                    placeholder="Type 2"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="typesContainer">
                        <h3>Fast Attacks</h3>
                        <div className="types">
                            <div className="attack">
                                <Input
                                    name="attacks.fast[0].name"
                                    placeholder="Fast Attack 1"
                                />
                                <Input
                                    name="attacks.fast[0].type"
                                    placeholder="Type"
                                />
                                <Input
                                    name="attacks.fast[0].damage"
                                    placeholder="Damage"
                                />
                            </div>
                            <div className="attack">
                                <Input
                                    name="attacks.fast[1].name"
                                    placeholder="Fast Attack 2"
                                />
                                <Input
                                    name="attacks.fast[1].type"
                                    placeholder="Type"
                                />
                                <Input
                                    name="attacks.fast[1].damage"
                                    placeholder="Damage"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="typesContainer">
                        <h3>Special Attacks</h3>
                        <div className="typesSpecial">
                            <div className="types">
                                <div className="attack">
                                    <Input
                                        name="attacks.special[0].name"
                                        placeholder="Special Attack 1"
                                    />
                                    <Input
                                        name="attacks.special[0].type"
                                        placeholder="Type"
                                    />
                                    <Input
                                        name="attacks.special[0].damage"
                                        placeholder="Damage"
                                    />
                                </div>
                                <div className="attack">
                                    <Input
                                        name="attacks.special[1].name"
                                        placeholder="Special Attack 2"
                                    />
                                    <Input
                                        name="attacks.special[1].type"
                                        placeholder="Type"
                                    />
                                    <Input
                                        name="attacks.special[1].damage"
                                        placeholder="Damage"
                                    />
                                </div>
                            </div>
                            <div className="specialAttacks">
                                <div className="attack">
                                    <Input
                                        name="attacks.special[2].name"
                                        placeholder="Special Attack 3"
                                    />
                                    <Input
                                        name="attacks.special[2].type"
                                        placeholder="Type"
                                    />
                                    <Input
                                        name="attacks.special[2].damage"
                                        placeholder="Damage"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <button type="submit">
                        <div className="text">Confirmar Edição</div>
                        <div className="icon">
                            <FiCheckSquare size={24} />
                        </div>
                    </button>
                </Form>
            </ScrollableDiv>
        </Modal>
    );
};

export default ModalEditPokemon;
