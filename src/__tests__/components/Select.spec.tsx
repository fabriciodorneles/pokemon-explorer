import { render } from '@testing-library/react';
import React from 'react';
import Select from '../../components/Select';

jest.mock('@unform/core', () => {
    return {
        useField() {
            return {
                fieldName: 'name',
                defaultValue: '',
                error: '',
                registerField: jest.fn(),
            };
        },
    };
});

describe('Input Component', () => {
    it('should be able to render select', () => {
        const { debug } = render(<Select name="Name" />);

        debug();
    });
});
