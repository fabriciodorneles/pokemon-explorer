import React, {
    useEffect,
    useRef,
    useState,
    useCallback,
    SelectHTMLAttributes,
} from 'react';

import { IconBaseProps } from 'react-icons';
import { useField } from '@unform/core';

import { ContainerSelect } from './styles';

interface ISelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
    name: string;
    icon?: React.ComponentType<IconBaseProps>;
}

const Select: React.FC<ISelectProps> = ({
    name,
    icon: Icon,
    children,
    ...rest
}) => {
    const selectRef = useRef<HTMLSelectElement>(null);

    const [isFocused, setIsFocused] = useState(false);
    const [isFilled, setIsFilled] = useState(false);

    const { fieldName, defaultValue, registerField } = useField(name);

    const handleInputFocus = useCallback(() => {
        setIsFocused(true);
    }, []);

    const handleInputBlur = useCallback(() => {
        setIsFocused(false);

        setIsFilled(!!selectRef.current?.value);
    }, []);

    useEffect(() => {
        registerField({
            name: fieldName,
            ref: selectRef.current,
            path: 'value',
        });
    }, [fieldName, registerField]);

    return (
        <ContainerSelect isFilled={isFilled} isFocused={isFocused}>
            {Icon && <Icon size={20} />}

            <select
                onFocus={handleInputFocus}
                onBlur={handleInputBlur}
                defaultValue={defaultValue}
                ref={selectRef}
                {...rest}
            >
                {children}
            </select>
        </ContainerSelect>
    );
};

export default Select;
