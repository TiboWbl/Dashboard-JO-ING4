import React from 'react';
import Button from '../button/button';
// eslint-disable-next-line
import { map, split } from 'lodash';
import './sportif.css';

/**
 * Data reçu :
 *  movie, // Titre
    yearOfRelease,
    duration // en minutes,
    actors,
    poster, // lien vers une image d'affiche,
    boxOffice, // en USD$,
    rottenTomatoesScore
 */

export default class Sportif extends React.Component {
    renderInfo(label, info) {
        return (<div className='infoLine'>
            <div className='infoLabel'>{label}</div>
            <div className='info'>{info}</div>
        </div>);
    }

    renderInfos(label, infos) {
        return (<div className='infoLine'>
            <div className='infoLabel'>{label}</div>
            <div>{map(infos, info => <div className='info' key ={`infoList-${info}`}>{info}</div>)}</div>
        </div>);
    }

    render() {
        const { infos, deleteSportif } = this.props;
        const { id, age, nationalite, nom, poids, prenom, sport, taille } = infos;

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
                <Button text={'Supprimer Athlète'} onClick={() => deleteSportif(id)} />
            </div>)
    }
}