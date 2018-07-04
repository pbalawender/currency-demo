import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import './FavoriteCurrencies.css';
import {clearFavoriteCurrencies, fetchCurrenciesList, toggleFavoriteCurrency} from "../actions";

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
        return (
            <div className="FavoriteCurrencies">
                {this.props.all.map((c) => <p key={c.code}>{c.code} - {c.currency}</p>)}
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
