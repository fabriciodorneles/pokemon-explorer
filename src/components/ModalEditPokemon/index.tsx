import React, { useRef, useCallback } from 'react';

import { FiCheckSquare } from 'react-icons/fi';
import { FormHandles } from '@unform/core';
import { Form } from './styles';
import Modal from '../Modal';
import Input from '../Input';
import { IPokemon } from '../../store/modules/pokemonReducer/types';
import Input50 from '../Input50';
import Input30 from '../Input30';

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
    handleUpdateProduct: (product: IPokemon) => void;
    editingProduct: IPokemon;
}

const ModalEditPokemon: React.FC<IModalProps> = ({
    isOpen,
    setIsOpen,
    editingProduct,
    handleUpdateProduct,
}) => {
    const formRef = useRef<FormHandles>(null);

    const handleSubmit = useCallback(
        async (data: IPokemon) => {
            handleUpdateProduct(data);
            setIsOpen();
        },
        [handleUpdateProduct, setIsOpen],
    );

    return (
        <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
            <Form
                ref={formRef}
                onSubmit={handleSubmit}
                initialData={editingProduct}
            >
                <h1>Editar Pokemon</h1>
                <Input
                    name="image"
                    placeholder="Cole um link da imagem do produto"
                />
                <Input name="name" placeholder="Nome do Pokemon" />
                <div className="typesContainer">
                    <h3>Types</h3>
                    <div className="types">
                        <Input50
                            className="typeInput"
                            name="types[0]"
                            placeholder="Tipo 1"
                        />
                        <Input50
                            className="typeInput"
                            name="types[1]"
                            placeholder="Tipo 2"
                        />
                    </div>
                </div>
                <div className="typesContainer">
                    <h3>Fast Attacks</h3>
                    <div className="types">
                        <div className="attack">
                            <Input30
                                name="attacks.fast[0].name"
                                placeholder="Name"
                            />
                            <Input30
                                name="attacks.fast[0].type"
                                placeholder="Type"
                            />
                            <Input30
                                name="attacks.fast[0].damage"
                                placeholder="Damage"
                            />
                        </div>
                        <div className="attack">
                            <Input30
                                name="attacks.fast[1].name"
                                placeholder="Fast Attack 2"
                            />
                            <Input30
                                name="attacks.fast[1].type"
                                placeholder="Type"
                            />
                            <Input30
                                name="attacks.fast[1].damage"
                                placeholder="Damage"
                            />
                        </div>
                    </div>
                </div>
                <div className="typesContainer">
                    <h3>Special Attacks</h3>
                    <div className="types">
                        <div className="attack">
                            <Input30
                                name="attacks.special[0].name"
                                placeholder="Name"
                            />
                            <Input30
                                name="attacks.special[0].type"
                                placeholder="Type"
                            />
                            <Input30
                                name="attacks.special[0].damage"
                                placeholder="Damage"
                            />
                        </div>
                        <div className="attack">
                            <Input30
                                name="attacks.special[1].name"
                                placeholder="special Attack 2"
                            />
                            <Input30
                                name="attacks.special[1].type"
                                placeholder="Type"
                            />
                            <Input30
                                name="attacks.special[1].damage"
                                placeholder="Damage"
                            />
                        </div>
                        <div className="attack">
                            <Input30
                                name="attacks.special[2].name"
                                placeholder="special Attack 2"
                            />
                            <Input30
                                name="attacks.special[2].type"
                                placeholder="Type"
                            />
                            <Input30
                                name="attacks.special[2].damage"
                                placeholder="Damage"
                            />
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
        </Modal>
    );
};

export default ModalEditPokemon;
