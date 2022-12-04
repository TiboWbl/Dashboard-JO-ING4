import React from 'react';
import './button.css';

export default class Button extends React.Component {
    render() {
        const { style, onClick } = this.props;
        return (
            <html>
                <head>
                    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
                </head>
                    
                <div>   
                    <p className='button' onClick={onClick} style={style}>
                        {<i class="fa fa-refresh"></i>}
                    </p>  
                </div>
            </html>)
            
    }
}