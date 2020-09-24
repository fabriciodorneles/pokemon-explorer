import React, { useEffect, useRef, SelectHTMLAttributes } from 'react';

import { IconBaseProps } from 'react-icons';
import { useField } from '@unform/core';

import { ContainerSelect } from './styles';

interface ISelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
    name: string;
    icon?: React.ComponentType<IconBaseProps>;
}

const Select: React.FC<ISelectProps> = ({ name, children, ...rest }) => {
    const selectRef = useRef<HTMLSelectElement>(null);

    const { fieldName, defaultValue, registerField } = useField(name);

    useEffect(() => {
        registerField({
            name: fieldName,
            ref: selectRef.current,
            path: 'value',
        });
    }, [fieldName, registerField]);

    return (
        <ContainerSelect>
            <select defaultValue={defaultValue} ref={selectRef} {...rest}>
                {children}
            </select>
        </ContainerSelect>
    );
};

export default Select;
