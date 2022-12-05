import React from 'react';
import Button from '../button/button';
import Classement from './classement';
import axios from 'axios';
import { map } from 'lodash';
import './classement.css';

let BACKEND_BASE_URL4 = "http://localhost:3001/classements/100m";

export default class Resultat extends React.Component {
  constructor() {
    super();
    
    this.state = {
      classements: [],
      addFilmInputValue: ''   
    }
  }

  componentDidMount() {
    this.getList();
  }
  
  getList= () => {
    axios.get(BACKEND_BASE_URL4).then((data) => data.data && data.data.classements && this.setState({ classements: data.data.classements}));
  }
  
  deleteClassement= (discipline) => {
    axios.delete(`${BACKEND_BASE_URL4}/${discipline}`).then((data) => this.getList());
  }
  
  renderCategory = (label, action) => {
    return (<div>
    <Button text={label} onClick={action} />
    </div>)
  }
  
  render() {  
    const { classements } = this.state;

    async function handlesubmit2(event)  {
        event.preventDefault();
        const id=event.target.id.value;
        BACKEND_BASE_URL4 = "http://localhost:3001/classements/"+id;
    }

    return (

      <html>
          <head>  
              <link href='https://css.gg/search.css' rel='stylesheet'></link>
          </head>
          
          <div>
              <div className='vainqueurs'>
                 <form class="test" onSubmit={handlesubmit2}>
                    <input placeholder="Entrez le sport..." required="required" size="15" className="id" type="id" name="id" id="id" pattern="[A-Za-z0-9 ]{1,20}"></input>
                    <button className="refreshVainqueurs" type="submit"  ><i class="gg-search"></i></button>
                    {this.renderCategory('Actualiser', this.getList)}
                 </form>
                  {map(classements, (classement, index) => <Classement key={`classement-${index}`} infos={classement} deleteClassement={() => this.deleteClassement(classement['_id'])}/>)}
               </div>
          </div>
      </html>
      )
    }
  }