import React from 'react';
import '../sportif/sportif.css';

export default class Sportif2 extends React.Component {
    renderInfo(label, info) {
        return (<div className='infoLine'>
            <div className='infoLabel'>{label}</div>
            <div className='info'>{info}</div>
        </div>);
    }

    render() {
        const { infos, deleteSportif } = this.props;
        const { age, nationalite, nom, poids, prenom, sport, taille } = infos;

        return (
            <div className='sportif'>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" integrity="sha512-9usAa10IRO0HhonpyAIVpjrylPvoDwiPUiKdWk5t3PyolY1cOd4DSE0Ga+ri4AuTroPR5aQvXU9xC6qOPnzFeg==" crossorigin="anonymous" referrerpolicy="no-referrer" />    
                <div className='infos'>
                    {this.renderInfo('Prénom', prenom)}
                    {this.renderInfo('Nom', nom)}
                    {this.renderInfo('Âge', age)}
                    {this.renderInfo('Sport', sport)}
                    {this.renderInfo('Nationalité', nationalite)}
                    {this.renderInfo('Taille (cm)', taille)}
                    {this.renderInfo('Poids (kg)', poids)}
                </div>
                <button className="trash"  onClick={() => deleteSportif(nom)} > <i class="fa-solid fa-trash"></i> </button>           
            </div>
            )
    }
}