import React, { Component } from 'react';
import Link from './link';
import config from './config';

class Navigation extends Component {
    render() {
        return (
            <nav id='nav-wrap' className='opaque'>
                <ul id='nav' className='nav'>
                    {Object.keys(config.navigation).map(function (navigationLink, index) {
                        const navigationName = config.navigation[navigationLink];
                        return (
                            <Link key={index} link={navigationLink} name={navigationName}/>
                        );
                    })}
                </ul>
            </nav>
        );
    }
}

export default Navigation;