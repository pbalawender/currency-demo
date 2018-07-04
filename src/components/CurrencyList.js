import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import './CurrencyList.css';
import CurrencyDetails from './CurrencyDetails';

export default class CurrencyList extends PureComponent {

    static propTypes = {
        currencies: PropTypes.array,
        toggleFavorite: PropTypes.func
    };

    render() {
        return (
            <div className="CurrencyList">
                <div className="CurrencyDetails header">
                    <div className="code">Code</div>
                    <div className="currency">Currency name</div>
                    <div className="mid">Rate</div>
                    <div className="favorite">&nbsp;</div>

                </div>
                {this.props.currencies.map((currency) =>
                    <CurrencyDetails key={currency.code} {...currency} toggleFavorite={this.props.toggleFavorite}/>
                )}
            </div>
        );
    }
}
