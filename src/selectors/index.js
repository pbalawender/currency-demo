import { createSelector } from 'reselect';

const getAll = (state) => state.currencies.all;
const getFavoriteCodes = (state) => state.currencies.favoriteCodes;

export const getCurrencies = createSelector(
    [getAll, getFavoriteCodes],
    (all, favoriteCodes) => {
        return all.map((currency) => ({
            ...currency,
            favorite: favoriteCodes.includes(currency.code)
        }));
    }
);

export const getFavoriteCurrencies = createSelector(
    [getCurrencies],
    (currencies) => {
        return currencies.filter((currency) => currency.favorite);
    }
);


