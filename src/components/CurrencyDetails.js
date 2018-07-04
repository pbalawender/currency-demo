import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import './CurrencyDetails.css';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';

export default class CurrencyDetails extends PureComponent {

    static propTypes = {
        code: PropTypes.string.isRequired,
        currency: PropTypes.string,
        mid: PropTypes.number,
        favorite: PropTypes.bool,
        toggleFavorite: PropTypes.func.isRequired
    };

    handleFavoriteToggle = () => {
        this.props.toggleFavorite(this.props.code);
    };

    render() {
        return (
            <div className="CurrencyDetails">
                <div className="code">{this.props.code}</div>
                <div className="currency">{this.props.currency}</div>
                <div className="mid">{this.props.mid}</div>
                <FormControlLabel
                    className="favorite"
                    control={
                        <Checkbox
                            checked={this.props.favorite}
                            onChange={this.handleFavoriteToggle}
                            value={this.props.code}
                            icon={<FavoriteBorderIcon />}
                            checkedIcon={<FavoriteIcon/>}
                        />
                    }
                    label="" />

            </div>
        );
    }
}

