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
import Resultat from '../classement/resultat';
import Graphe from '../graphe/graphe';

export default class Dashboard extends React.Component {
    render() {
        return (
            <div>
                <div>
                    <Navbar />
                </div>
                <div className='centrage'>
                    <div className="dashboard">
                        <div className="entete">
                    
                            <div className='App'> 
                                JEUX OLYMPIQUES TOKYO 2020
                            </div>
                            <div className='image'>
                                <img class="fond1" src={fond1} alt='' />
                                <img class="fond2" src={fond2} alt='' />
                            </div>
                            
                            <img class="logo" src={logo} alt='' />
                        
                        </div>
                            <div className='dash'>
                                <div className='widget1'>
                                    <p></p>
                                </div>

                                <div className='widget2'>
                                    <Resultat />
                                </div>
                            </div>

                            <div className='dash'>
                            
                            <div className='widget3'>
                                <Pays />
                                <p></p>
                            </div>
                            <div className='widget3'>
                                <p></p>
                            </div>
                            <div className='widget3'>
                                <Graphe />
                                <p></p>
                            </div>
                            <div className='widget3'>
                                <Athlete />  
                                <p></p>
                            </div>
                        
                            </div>
                    </div>
                
                </div>
            </div>
            );
    }
}


