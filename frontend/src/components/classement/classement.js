import React from 'react';

export default class Classement extends React.Component {
    renderInfo(label, info) {
        return (<div className='infoLine'>
            <div className='infoLabel'>{label}</div>
            <div className='info'>{info}</div>
        </div>);
    }

    render() {
        const { infos } = this.props;
        const { discipline, nationalite, sportif, temps1, nationalite2, sportive, temps2 } = infos;

        return (
            <div className='sportif'>    
                <div className='infos'>
                    {this.renderInfo('Discipline', discipline)}
                    {this.renderInfo('Nationalité', nationalite)}
                    {this.renderInfo('Sportif', sportif)}
                    {this.renderInfo('Temps', temps1)}
                    {this.renderInfo('Nationalité', nationalite2)}
                    {this.renderInfo('Sportif', sportive)}
                    {this.renderInfo('Temps', temps2)}
                </div>       
            </div>
            )
    }
}