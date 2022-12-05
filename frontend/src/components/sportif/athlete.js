import React from 'react';
import Button from '../button/button';
import Sportif from './sportif';
import axios from 'axios';
import { map } from 'lodash';

let BACKEND_BASE_URL = "http://localhost:3001/sportifs/Riner";

export default class Athlete extends React.Component {
  constructor() {
    super();
    
    this.state = {
      sportifs: [],
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
    axios.get(BACKEND_BASE_URL).then((data) => data.data && data.data.sportifs && this.setState({ sportifs: data.data.sportifs}));
  }
  
  addSportif= () => {
    axios.put(BACKEND_BASE_URL, { sportif: this.state.addFilmInputValue }).then((data) => this.getList());
  }

  deleteSportif= (nom) => {
    axios.delete(`${BACKEND_BASE_URL}/${nom}`).then((data) => this.getList());
  }
  
  renderCategory = (label, action) => {
    return (<div>
    <Button text={label} onClick={action} />
    </div>)
  }
  
  render() {  
    const { sportifs } = this.state;

    async function handlesubmit(event)  {
        event.preventDefault();
        const id=event.target.id.value;
        BACKEND_BASE_URL = "http://localhost:3001/sportifs/"+id;
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
                  {map(sportifs, (sport, index) => <Sportif key={`sportif-${index}`} infos={sport} deleteSportif={() => this.deleteSportif(sport['_id'])}/>)}
              </div>  
        </div>
      </html>
      )
    }
  }