import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import './FavoriteCurrencies.css';
import {clearFavoriteCurrencies, fetchCurrenciesList, toggleFavoriteCurrency} from '../actions';
import CurrencyList from '../components/CurrencyList';
import Favorite from '../components/Favorite';
import CircularProgress from '@material-ui/core/CircularProgress';
import { getCurrencies, getFavoriteCurrencies } from '../selectors';

class FavoriteCurrencies extends Component {

    static propTypes = {
        currencies: PropTypes.arrayOf(PropTypes.shape({
            code: PropTypes.string.isRequired,
            currency: PropTypes.string,
            mid: PropTypes.number,
            favorite: PropTypes.bool
        })).isRequired,
        favoriteCurrencies: PropTypes.arrayOf(PropTypes.shape({
            code: PropTypes.string.isRequired,
            currency: PropTypes.string,
            mid: PropTypes.number,
            favorite: PropTypes.bool
        })).isRequired,
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

        return (
            <div className="FavoriteCurrencies">
                <h2>My favorite</h2>
                <Favorite favoriteCurrencies={this.props.favoriteCurrencies}
                          toggleFavorite={this.props.toggleFavoriteCurrency}
                          clearFavorite={this.props.clearFavoriteCurrencies}/>
                <h2>All currencies</h2>
                <CurrencyList currencies={this.props.currencies}
                              toggleFavorite={this.props.toggleFavoriteCurrency}/>
            </div>
        );
    }
}


const mapsStateToProps = (state) => ({
    currencies: getCurrencies(state),
    favoriteCurrencies: getFavoriteCurrencies(state),
    loading: state.currencies.loading
});

export default connect(mapsStateToProps, {
    fetchCurrenciesList,
    toggleFavoriteCurrency,
    clearFavoriteCurrencies
})(FavoriteCurrencies);
