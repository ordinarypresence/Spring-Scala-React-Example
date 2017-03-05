import React, { Component, PropTypes } from 'react';

class Link extends Component {
    render() {
        return(
            <li>
                <a className='smoothscroll' href={this.props.link}>{this.props.name}</a>
            </li>
        );
    }
}

Link.propTypes = {
    link: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
};

module.exports = Link;