import React from 'react';
import './dashboard.css';
import './widgetInfos.css';
import './App.css';
import App from './App';
import fond1 from './fond1.jpg';
import fond2 from './fond2.jpg';

export default class Dashboard extends React.Component {
    render() {
        return (
        <div className='dashboard'>
         <App></App>
         <img src={fond1} alt='wesh'/>
         <img src={fond2} alt='wesh'/>
         <div className='cadre'></div>
         <div className='cadre2'></div>
         <div className='cadre3'></div>
         <div className='cadre4'></div>
         <div className='cadre5'></div>
         <div className='graphe'></div>
        </div>);
    }
}


