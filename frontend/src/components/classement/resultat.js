import React from 'react';
import Button from '../button/button';
import Classement from './classement';
import axios from 'axios';
import { map } from 'lodash';
import '../../App.css';

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

  addFilmInputChange = event => {
    this.setState({ addFilmInputValue: event.target.value });
    console.log('value is:', event.target.value);
  };
  
  getList= () => {
    axios.get(BACKEND_BASE_URL4).then((data) => data.data && data.data.sportifs && this.setState({ sportifs: data.data.sportifs}));
  }
  
  addClassement= () => {
    axios.put(BACKEND_BASE_URL4, { Classement: this.state.addFilmInputValue }).then((data) => this.getList());
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
    const { classements, addFilmInputValue} = this.state;

    /*async function refresh(event)  {

      BACKEND_BASE_URL = "http://localhost:3001/sportifs/";
    }*/

    async function handlesubmit(event)  {
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

       <div className='sportifs'>
       <form class="test" onSubmit={handlesubmit}>
          <input placeholder="Entrez le sportif..." required="required" size="15" className="id" type="id" name="id" id="id" pattern="[A-Za-z0-9]{1,20}"></input>
          <button className="refresh" type="submit"  ><i class="gg-search"></i></button>
          {this.renderCategory('Actualiser', this.getList)}
        </form>
          {map(classements, (sport, index) => <Classement key={`classement-${index}`} infos={sport} deleteClassement={() => this.deleteClassement(sport['_id'])}/>)}
        </div>
        
      </div>
      </html>
      )
    }
  }