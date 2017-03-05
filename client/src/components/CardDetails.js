import React, { Component, PropTypes } from 'react';

class CardDetails extends Component {
    render() {
        return (
            <div className="card_details">
                <div className="card_name">
                    <h1>{this.props.name}</h1>
                </div>
                <div className="card_title">
                    <h2>{this.props.title}</h2>
                </div>
                <div className="card_email">
                    <h3>{this.props.email}</h3>
                </div>
            </div>
        )
    }
}

CardDetails.propTypes = {
    name: PropTypes.String,
    title: PropTypes.String,
    email: PropTypes.String
};

export default CardDetails;