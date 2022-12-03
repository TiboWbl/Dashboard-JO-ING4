import React from 'react';
import Button from '../button/button';
import { map, split } from 'lodash';

import './medal.css'
import '../../App.css';

export default class Medal extends React.Component {
    renderInfo(label, info) {
        return (<div className='infoLine2'>
            <div className='infoLabel2'>{label}</div>
            <div className='info2'>{info}</div>
        </div>);
    }

    render() {
        const { infos, deleteMedal } = this.props;
        //console.log(infos);
        const { _id, Pays, Or, Argent, Bronze, Classement, Total_medailles } = infos;

        return (
                    <tr>
                        <td>{this.renderInfo('', Pays)}</td>
                        <td>{this.renderInfo('', Or)}</td>
                        <td>{this.renderInfo('', Argent)}</td>
                        <td>{this.renderInfo('', Bronze)}</td>
                        <td>{this.renderInfo('', Total_medailles)}</td>
                        <td>{this.renderInfo('', Classement)}</td>
                    </tr>
           
           )
    }
}