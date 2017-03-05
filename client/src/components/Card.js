import React, { Component, PropTypes } from 'react';
import CardPortrait from './CardPortrait';
import CardDetails from './CardDetails';

class Card extends Component {
    render() {
        return (
            <div className="card">
                <CardPortrait photo={this.props.photo}/>
                <CardDetails name={this.props.name} title={this.props.title} email={this.props.email}/>
            </div>
        );
    }
}

Card.propTypes = {
    photo: PropTypes.String,
    name: PropTypes.String,
    title: PropTypes.String,
    email: PropTypes.String
};

export default Card;