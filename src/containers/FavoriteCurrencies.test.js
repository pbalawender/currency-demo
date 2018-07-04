import React from 'react';
import renderer from 'react-test-renderer';
import FavoriteCurrencies from './FavoriteCurrencies';
import {Provider} from 'react-redux';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk'

const mockStore = configureMockStore([thunk]);

describe('FavoriteCurrencies component', () => {
    it('renders correctly with empty list', () => {
        const store = mockStore({
            currencies: {
                all: [],
                favoriteCodes: [],
                loading: false
            }
        });
        const tree = renderer.create(
            <Provider store={store}>
                <FavoriteCurrencies />
            </Provider>
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('renders correctly with non-empty list', () => {
        const store = mockStore({
            currencies: {
                all: [{
                    currency: 'bat (Tajlandia)',
                    code: 'THB',
                    mid: 0.1140
                }, {
                    currency: 'dolar amerykański',
                    code: 'USD',
                    mid: 3.7759
                }, {
                    currency: 'dolar australijski',
                    code: 'AUD',
                    mid: 2.7891
                }],
                favoriteCodes: ['USD'],
                loading: false
            }
        });
        const tree = renderer.create(
            <Provider store={store}>
                <FavoriteCurrencies />
            </Provider>
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });
    it('renders correctly while loading data', () => {
        const store = mockStore({
            currencies: {
                all: [],
                favoriteCodes: [],
                loading: true
            }
        });
        const tree = renderer.create(
            <Provider store={store}>
                <FavoriteCurrencies />
            </Provider>
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });
});