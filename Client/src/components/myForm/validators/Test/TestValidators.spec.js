import React from 'react';
import {requiredField, validatePasswordCreator} from '../validators';

it ("Required Fields", () => {
    expect(requiredField(12)).toBe(undefined);
});

it ("Validator Min Length Password", () => {
    var minLength = 8
    expect(validatePasswordCreator(minLength)('1111')).toBe(`Длина символов должна быть не менее ${minLength}`);
})
