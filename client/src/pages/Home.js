import React, { Component } from 'react';
import Card from '../components/Card';

class Home extends Component {
    render() {
        var name="HaeSook Yang";
        var title="Software engineer";
        var email="ordinarypresence@gmail.com";

        return (
            <Card photo="/resources/image/ddugi.jpg" name={name} title={title} email={email} />
        );
    }
}

export default Home;