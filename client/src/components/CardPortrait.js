import React, { Component, PropTypes } from 'react';

class CardPortrait extends Component {
    render() {
        return (
            <div className="card_portrait">
                <img src={this.props.photo} />
            </div>
        );
    }
}

CardPortrait.propTypes = {
    photo: PropTypes.String
};

export default CardPortrait;