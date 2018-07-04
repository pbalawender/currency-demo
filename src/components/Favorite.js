import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import CurrencyList from './CurrencyList';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import './Favorite.css';

export default class Favorite extends PureComponent {
    static propTypes = {
        favoriteCurrencies: PropTypes.arrayOf(PropTypes.shape({
            code: PropTypes.string.isRequired,
            currency: PropTypes.string,
            mid: PropTypes.number,
            favorite: PropTypes.bool
        })).isRequired,
        toggleFavorite: PropTypes.func.isRequired,
        clearFavorite: PropTypes.func.isRequired
    };

    render() {
        if (!this.props.favoriteCurrencies || this.props.favoriteCurrencies.length === 0) {
            return <h3 className="empty">Start watching currency by selecting <FavoriteBorderIcon/> on the list below </h3>;
        }

        return (
            <div className="Favorite clearfix">
                <CurrencyList currencies={this.props.favoriteCurrencies} toggleFavorite={this.props.toggleFavorite}/>
                <Button className="clearAll" onClick={this.props.clearFavorite}>Clear all</Button>
            </div>
        );
    }
}
