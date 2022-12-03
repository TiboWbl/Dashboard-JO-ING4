import React from 'react';
import './dashboard.css';
import '../../App.css';
import fond1 from '../../img/fond1.jpg';
import fond2 from '../../img/fond2.jpg';
import logo from '../../img/logo.png';
import App from '../../App';
import Athlete from '../sportif/athlete';
import Pays from '../medal/pays';
import Navbar from '../navbar/navbar';

export default class Dashboard extends React.Component {
    render() {
        return (
            <div>
                <Navbar />
                <div className="dashboard">
                <td>
                    <div className='App'> JEUX OLYMPIQUES TOKYO 2020</div>
                    <img class="fond1" src={fond1} alt='' />
                    <img class="fond2" src={fond2} alt='' />
                    <img class="logo" src={logo} alt='' />
                </td>
                <Athlete />
                <Pays />
                
               
            </div>
            </div>
            );
    }
}


