import reducer from './currencies';
import * as actions from '../actions';

describe('currencies reducer', () => {
    it('creates default state', () => {
        expect(reducer(undefined, {})).toEqual({
            loading: false,
            all: [],
            favoriteCodes: []
        });
    });

    it('handles action FETCH_CURRENCIES_LIST_STARTED', () => {
        const action = {
            type: actions.FETCH_CURRENCIES_LIST_STARTED
        };
        expect(reducer(undefined, action)).toMatchObject({
            loading: true,
            all: [],
            favoriteCodes: []
        });
    });

    it('handles action FETCH_CURRENCIES_LIST_FINISHED', () => {
        const action = {
            type: actions.FETCH_CURRENCIES_LIST_FINISHED,
            payload: [{code: 'PLN'}]
        };
        expect(reducer(undefined, action)).toMatchObject({
            loading: false,
            all: [{code: 'PLN'}],
            favoriteCodes: []
        });
    });

    it('handles action FETCH_CURRENCIES_LIST_FAILED', () => {
        const action = {
            type: actions.FETCH_CURRENCIES_LIST_FAILED
        };
        expect(reducer(undefined, action)).toMatchObject({
            loading: false,
            all: [],
            favoriteCodes: []
        });
    });

    it('handles action TOGGLE_FAVORITE_CURRENCY adds currency to favorite list', () => {
        const action = {
            type: actions.TOGGLE_FAVORITE_CURRENCY,
            payload: 'PLN'
        };
        expect(reducer({
            favoriteCodes: []
        }, action)).toMatchObject({
            favoriteCodes: ['PLN']
        });
    });

    it('handles action TOGGLE_FAVORITE_CURRENCY removes currency to favorite list', () => {
        const action = {
            type: actions.TOGGLE_FAVORITE_CURRENCY,
            payload: 'PLN'
        };
        expect(reducer({
            favoriteCodes: ['PLN']
        }, action)).toMatchObject({
            favoriteCodes: []
        });
    });

    it('handles action CLEAR_FAVORITE_CURRENCIES on empty favorite list', () => {
        const action = {
            type: actions.CLEAR_FAVORITE_CURRENCIES
        };
        expect(reducer({
            favoriteCodes: []
        }, action)).toMatchObject({
            favoriteCodes: []
        });
    });

    it('handles action CLEAR_FAVORITE_CURRENCIES on non-empty favorite list', () => {
        const action = {
            type: actions.CLEAR_FAVORITE_CURRENCIES
        };
        expect(reducer({
            favoriteCodes: ['PLN', 'USD']
        }, action)).toMatchObject({
            favoriteCodes: []
        });
    });

});
