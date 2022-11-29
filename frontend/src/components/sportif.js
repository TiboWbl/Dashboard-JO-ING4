import React from 'react';
import Button from './button';
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
                    {this.renderInfo('Age', age)}
                    {this.renderInfo('Nationalite', nationalite)}
                    {this.renderInfo('Nom', nom)}
                    {this.renderInfos('Poids', poids)}
                    {this.renderInfo('Prenom', prenom)}
                    {this.renderInfo('Sport', sport)}
                    {this.renderInfo('Taille', taille)}
                </div>
                <Button text={'Delete sportif'} onClick={() => deleteSportif(id)} />
            </div>)
    }
}