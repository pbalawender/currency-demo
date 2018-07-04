import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import './FavoriteCurrencies.css';
import {clearFavoriteCurrencies, fetchCurrenciesList, toggleFavoriteCurrency} from "../actions";
import CurrencyList from "../components/CurrencyList";

class FavoriteCurrencies extends Component {

    static propTypes = {
        all: PropTypes.array,
        favoriteCodes: PropTypes.array,
        loading: PropTypes.bool,
        fetchCurrenciesList: PropTypes.func,
        toggleFavoriteCurrency: PropTypes.func,
        clearFavoriteCurrencies: PropTypes.func
    };

    componentDidMount() {
        this.props.fetchCurrenciesList();
    }

    render() {
        if (this.props.loading) {
            return "Loading...";
        }

        const currenciesExt = this.props.all.map((currency) => ({...currency, favorite: this.props.favoriteCodes.includes(currency.code)}));

        return (
            <div className="FavoriteCurrencies">
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
