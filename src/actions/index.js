const EXCHANGE_RATE_TABLE_URL = 'http://api.nbp.pl/api/exchangerates/tables/a?format=json';

export const FETCH_CURRENCIES_LIST_STARTED = 'FETCH_CURRENCIES_LIST_STARTED';
export const FETCH_CURRENCIES_LIST_FINISHED = 'FETCH_CURRENCIES_LIST_FINISHED';
export const FETCH_CURRENCIES_LIST_FAILED = 'FETCH_CURRENCIES_LIST_FAILED';
export const TOGGLE_FAVORITE_CURRENCY = 'TOGGLE_FAVORITE_CURRENCY';
export const CLEAR_FAVORITE_CURRENCIES = 'CLEAR_FAVORITE_CURRENCIES';

export const fetchCurrenciesList = () => (dispatch) => {
    dispatch({
        type: FETCH_CURRENCIES_LIST_STARTED
    });

    return fetch(EXCHANGE_RATE_TABLE_URL)
        .then(response => response.json())
        .then((data) => {
            if (data && data.length > 0) {
                const {rates} = data[0];
                if (rates && rates.length > 0) {
                    dispatch({
                        type: FETCH_CURRENCIES_LIST_FINISHED,
                        payload: rates
                    });
                    return;
                }
            }
            dispatch({
                type: FETCH_CURRENCIES_LIST_FINISHED,
                payload: []
            });
        }).catch((err) => {
            console.log(err);
            dispatch({
                type: FETCH_CURRENCIES_LIST_FAILED
            });
        });
};

export const toggleFavoriteCurrency = (code) => ({
    type: TOGGLE_FAVORITE_CURRENCY,
    payload: code
});

export const clearFavoriteCurrencies = () => ({
    type: CLEAR_FAVORITE_CURRENCIES
});

