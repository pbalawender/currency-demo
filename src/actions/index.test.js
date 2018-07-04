import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk'
import fetchMock from 'fetch-mock';
import * as actions from './index';

const mockStore = configureMockStore([thunk]);

describe('actions', () => {
    afterEach(() => {
        fetchMock.reset();
        fetchMock.restore();
    });

    it('creates FETCH_CURRENCIES_LIST_FINISHED action after successful api call', () => {

        const mockData = [{
            rates: [{
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
            }]
        }];

        fetchMock.getOnce('http://api.nbp.pl/api/exchangerates/tables/a?format=json', {
            body: mockData,
            headers: {'content-type': 'application/json'}
        });

        const expectedActions = [
            {type: actions.FETCH_CURRENCIES_LIST_STARTED},
            {type: actions.FETCH_CURRENCIES_LIST_FINISHED, payload: mockData[0].rates}
        ];
        const store = mockStore({});

        return store.dispatch(actions.fetchCurrenciesList()).then(() => {
            expect(store.getActions()).toEqual(expectedActions)
        });
    });

    it('creates FETCH_CURRENCIES_LIST_FINISHED action after empty response', () => {

        const mockData = [];

        fetchMock.getOnce('http://api.nbp.pl/api/exchangerates/tables/a?format=json', {
            body: mockData,
            headers: {'content-type': 'application/json'}
        });

        const expectedActions = [
            {type: actions.FETCH_CURRENCIES_LIST_STARTED},
            {type: actions.FETCH_CURRENCIES_LIST_FINISHED, payload: []}
        ];
        const store = mockStore({});

        return store.dispatch(actions.fetchCurrenciesList()).then(() => {
            expect(store.getActions()).toEqual(expectedActions)
        });
    });

    it('creates FETCH_CURRENCIES_LIST_FAILED action after failed api call', () => {

        fetchMock.getOnce('http://api.nbp.pl/api/exchangerates/tables/a?format=json', {
            body: "Mocked error on API side",
            status: 400
        });

        const expectedActions = [
            {type: actions.FETCH_CURRENCIES_LIST_STARTED},
            {type: actions.FETCH_CURRENCIES_LIST_FAILED}
        ];
        const store = mockStore({});

        return store.dispatch(actions.fetchCurrenciesList()).then(() => {
            expect(store.getActions()).toEqual(expectedActions)
        });
    });

    it('creates TOGGLE_FAVORITE_CURRENCY action properly', () => {
        const expectedActions = {
            type: actions.TOGGLE_FAVORITE_CURRENCY,
            payload: 'PLN'
        };
        expect(actions.toggleFavoriteCurrency('PLN')).toEqual(expectedActions);
    });

    it('creates CLEAR_FAVORITE_CURRENCY action properly', () => {
        const expectedActions = {
            type: actions.CLEAR_FAVORITE_CURRENCIES
        };
        expect(actions.clearFavoriteCurrencies()).toEqual(expectedActions);
    });

});
