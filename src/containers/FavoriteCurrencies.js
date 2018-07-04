import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import './FavoriteCurrencies.css';
import {clearFavoriteCurrencies, fetchCurrenciesList, toggleFavoriteCurrency} from '../actions';
import CurrencyList from '../components/CurrencyList';
import Favorite from '../components/Favorite';
import CircularProgress from '@material-ui/core/CircularProgress';

class FavoriteCurrencies extends Component {

    static propTypes = {
        all: PropTypes.arrayOf(PropTypes.shape({
            code: PropTypes.string.isRequired,
            currency: PropTypes.string,
            mid: PropTypes.number
        })).isRequired,
        favoriteCodes: PropTypes.array.isRequired,
        loading: PropTypes.bool,
        fetchCurrenciesList: PropTypes.func.isRequired,
        toggleFavoriteCurrency: PropTypes.func.isRequired,
        clearFavoriteCurrencies: PropTypes.func.isRequired
    };

    componentDidMount() {
        this.props.fetchCurrenciesList();
    }

    render() {
        if (this.props.loading) {
            return <CircularProgress className="loader" size={80} />;
        }

        const currenciesExt = this.props.all.map((currency) => ({
            ...currency,
            favorite: this.props.favoriteCodes.includes(currency.code)
        }));

        return (
            <div className="FavoriteCurrencies">
                <h2>My favorite</h2>
                <Favorite favoriteCurrencies={currenciesExt.filter((currency) => currency.favorite)}
                          toggleFavorite={this.props.toggleFavoriteCurrency}
                          clearFavorite={this.props.clearFavoriteCurrencies}/>
                <h2>All currencies</h2>
                <CurrencyList currencies={currenciesExt}
                              toggleFavorite={this.props.toggleFavoriteCurrency}/>
            </div>
        );
    }
}


const mapsStateToProps = (state) => ({
    all: state.currencies.all,
    favoriteCodes: state.currencies.favoriteCodes,
    loading: state.currencies.loading
});

export default connect(mapsStateToProps, {
    fetchCurrenciesList,
    toggleFavoriteCurrency,
    clearFavoriteCurrencies
})(FavoriteCurrencies);
