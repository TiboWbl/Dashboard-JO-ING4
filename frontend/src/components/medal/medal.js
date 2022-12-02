import React from 'react';
import Button from '../button/button';
import { map, split } from 'lodash';
import '../sportif/sportif.css';

export default class Medal extends React.Component {
    renderInfo(label, info) {
        return (<div className='infoLine'>
            <div className='infoLabel'>{label}</div>
            <div className='info'>{info}</div>
        </div>);
    }

    render() {
        const { infos, deleteMedal } = this.props;
        //console.log(infos);
        const { _id, Pays, Or, Argent, Bronze, Classement, Total_medailles } = infos;

        return (
           

            <div>
                <table class="romain">
                    <tr class="tibo">
                        <td>{this.renderInfo('Pays', Pays)}</td>
                        <td>{this.renderInfo('Or', Or)}</td>
                        <td>{this.renderInfo('Argent', Argent)}</td>
                        <td>{this.renderInfo('Bronze', Bronze)}</td>
                        <td>{this.renderInfo('Total Médailles', Total_medailles)}</td>
                        <td>{this.renderInfo('Classement', Classement)}</td>
                    </tr>
                </table>
            </div>
           
           )
    }
}