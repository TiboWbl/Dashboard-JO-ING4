import React from 'react';
import './classement.css';

export default class Classement extends React.Component {
    renderInfo(label, info) {
        return (<div className='infoLineClassement'>
            <div className='infoLabelClassement'>{label}</div>
            <div className='infoClassement'>{info}</div>
        </div>);
    }

    render() {
        const { infos } = this.props;
        const { discipline, nationalite, sportif, temps1, nationalite2, sportive, temps2 } = infos;

        return (
            <div className='champion'>    
                <div className='infosClassement'>

                    <div className='titre'>
                        {this.renderInfo('Discipline:', discipline)}
                        <br/>
                    </div>
                   
                    <div className='bleu'>
                        {this.renderInfo('Sportif:', sportif)}
                        {this.renderInfo('Nationalité:', nationalite)}
                        {this.renderInfo('Temps:', temps1)}
                        <br/>
                    </div>

                    <div className='coral'>
                        {this.renderInfo('Sportive:', sportive)}
                        {this.renderInfo('Nationalité:', nationalite2)}
                        {this.renderInfo('Temps:', temps2)}
                    </div>
        
                </div>       
            </div>
            )
    }
}