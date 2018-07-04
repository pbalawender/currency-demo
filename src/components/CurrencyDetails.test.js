import React from 'react';
import renderer from 'react-test-renderer';
import CurrencyDetails from './CurrencyDetails';

describe('CurrencyDetails component', () => {
    it('renders correctly', () => {
        const tree = renderer.create(
            <CurrencyDetails
                code="USD"
                currency="Dolar"
                mid={2.66}
                favorite={false}
                toggleFavorite={() => {}}/>
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('renders correctly favorite currency', () => {
        const tree = renderer.create(
            <CurrencyDetails
                code="USD"
                currency="Dolar"
                mid={2.66}
                favorite={true}
                toggleFavorite={() => {}}/>
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });
});