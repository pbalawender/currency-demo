import React from 'react';
import renderer from 'react-test-renderer';
import Favorite from './Favorite';

describe('Favorite component', () => {
    it('renders correctly with empty list', () => {
        const tree = renderer.create(
            <Favorite favoriteCurrencies={[]}
                      toggleFavorite={() => {}}
                      clearFavorite={() => {}} />
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('renders correctly with non-empty list', () => {
        const mockData = [{
            currency: 'dolar amerykański',
            code: 'USD',
            mid: 3.7759,
            favorite: true
        }];
        const tree = renderer.create(
            <Favorite favoriteCurrencies={mockData}
                      toggleFavorite={() => {}}
                      clearFavorite={() => {}} />
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });
});
