import React from 'react';
import Navbar from '../navbar/navbar';
import Tout from '../toutSportifs/toutSportif';

export default class Api extends React.Component {
    render() {
        return (
            <div>
                <Navbar /><br/><br/>
                <Tout />   
            </div>);
    }
}