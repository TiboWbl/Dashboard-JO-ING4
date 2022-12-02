import React from 'react';
import './button.css';

export default class Button extends React.Component {
    render() {
        const { text, style, onClick, type } = this.props;

        return (
            <p className='button' onClick={onClick} style={style} type={type}>
                {text}
            </p>)
    }
}