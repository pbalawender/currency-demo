import React from 'react';
import renderer from 'react-test-renderer';
import CurrencyList from './CurrencyList';

describe('CurrencyList component', () => {
    it('renders correctly with empty list', () => {
        const tree = renderer.create(
            <CurrencyList currencies={[]}
                          toggleFavorite={() => {}}/>
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('renders correctly with non-empty list', () => {
        const mockData = [{
            rates: [{
                currency: 'bat (Tajlandia)',
                code: 'THB',
                mid: 0.1140
            }, {
                currency: 'dolar amerykański',
                code: 'USD',
                mid: 3.7759,
                favorite: true
            }, {
                currency: 'dolar australijski',
                code: 'AUD',
                mid: 2.7891
            }]
        }];
        const tree = renderer.create(
            <CurrencyList currencies={mockData}
                          toggleFavorite={() => {}}/>
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });
});