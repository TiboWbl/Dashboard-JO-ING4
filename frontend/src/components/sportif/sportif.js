import React from 'react';
import Button from '../button/button';
// eslint-disable-next-line
import { map, split } from 'lodash';
import './sportif.css';

export default class Sportif extends React.Component {
    renderInfo(label, info) {
        return (<div className='infoLine'>
            <div className='infoLabel'>{label}</div>
            <div className='info'>{info}</div>
        </div>);
    }

    render() {
        const { infos, deleteSportif } = this.props;
        //console.log(infos);
        const { _id, age, nationalite, nom, poids, prenom, sport, taille } = infos;

        return (
            <div className='sportif'>
                <div className='infos'>
                    {this.renderInfo('Prénom', prenom)}
                    {this.renderInfo('Nom', nom)}
                    {this.renderInfo('Âge', age)}
                    {this.renderInfo('Sport', sport)}
                    {this.renderInfo('Nationalité', nationalite)}
                    {this.renderInfo('Taille (cm)', taille)}
                    {this.renderInfo('Poids (kg)', poids)}
                </div>
            </div>
            )
    }
}