import React, {Component} from 'react';
import {connect} from "react-redux";
import './FavoriteCurrencies.css';

class FavoriteCurrencies extends Component {

    static propTypes = {

    };

    render() {
        return (
            <div className="FavoriteCurrencies">
                Hello FavoriteCurrencies!
            </div>
        );
    }
}


const mapsStateToProps = () => ({

});

export default connect(mapsStateToProps, {
})(FavoriteCurrencies);
