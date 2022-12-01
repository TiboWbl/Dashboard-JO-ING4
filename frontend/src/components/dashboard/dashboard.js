import React from 'react';
import './dashboard.css';
import '../../widgetInfos.css';
import '../../App.css';
import fond1 from '../img/fond1.jpg';
import fond2 from '../img/fond2.jpg';
import logo from '../img/logo.png';

export default class Dashboard extends React.Component {
    render() {
        return (
            <div className="dashboard">
                <td>
                    <div className='App'> JEUX OLYMPIQUES</div>
                    <img class="fond1" src={fond1} alt='' />
                    <img class="fond2" src={fond2} alt='' />
                    <img class="logo" src={logo} alt='' />
                </td>
                <div className='cadre'></div>
                <div className='cadre2'></div>
                <div className='cadre3'></div>
                <div className='cadre4'></div>
                <div className='cadre5'></div>
                <div className='graphe'></div>
            </div>);
    }
}


