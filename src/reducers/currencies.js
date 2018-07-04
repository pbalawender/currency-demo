import * as actions from '../actions';

const defaultState = {
    loading: false,
    all: [],
    favoriteCodes: []
};
export default (state = defaultState, action) => {
    const {type, payload} = action;

    switch (type) {
        case actions.FETCH_CURRENCIES_LIST_STARTED: {
            return {
                ...state,
                loading: true,
                all: [],
                favoriteCodes: []
            };
        }
        case actions.FETCH_CURRENCIES_LIST_FINISHED: {
            return {
                ...state,
                loading: false,
                all: payload,
                favoriteCodes: []
            };
        }
        case actions.FETCH_CURRENCIES_LIST_FAILED: {
            return {
                ...state,
                loading: false,
                all: [],
                favoriteCodes: []
            };
        }
        case actions.CLEAR_FAVORITE_CURRENCIES: {
            return {
                ...state,
                favoriteCodes: []
            };
        }
        case actions.TOGGLE_FAVORITE_CURRENCY: {
            if (state.favoriteCodes.includes(payload)) {
                return {
                    ...state,
                    favoriteCodes: state.favoriteCodes.filter((code) => code !== payload)
                };
            }
            return {
                ...state,
                favoriteCodes: [...state.favoriteCodes, payload]
            };
        }

        default:
            return state;
    }
}
