import React from 'react';
import validatePasswordCreator from '../validators/validators';
import renderer from 'react-test-renderer';

it ("render correctly text component", () => {
    const TextFormsControls = renderer.create(validatePasswordCreator).toJSON();
    expect(TextFormsControls).toMatchSnapshot();
});