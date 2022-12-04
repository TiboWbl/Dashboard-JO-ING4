import React from 'react';
import Button from '../button/button';
import axios from 'axios';
import { map } from 'lodash';
import '../../App.css';
import Sportif2 from './sportif2';

let BACKEND_BASE_URL = "http://localhost:3001/sportifs/";

export default class Tout extends React.Component {
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
    axios.delete(`${BACKEND_BASE_URL}${nom}`).then((data) => this.getList());
  }
  
  renderCategory = (label, action) => {
    return (<div>
    <Button text={label} onClick={action} />
    </div>)
  }
  
  render() {  
    const { sportifs, addFilmInputValue} = this.state;

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

        <div className='toutsportifs'>
              <form class="test2" onSubmit={handlesubmit}>
                <input placeholder="Rechercher un sportif..." required="required" size="15" className="id2" type="id" name="id" id="id"></input>
                    <button className="refresh2" type="submit"  ><i class="gg-search"></i></button>
                    {this.renderCategory('Actualiser', this.getList)}
              </form>
                {map(sportifs, (sport, index) => <Sportif2 key={`sportif-${index}`} infos={sport} deleteSportif={() => this.deleteSportif(sport['nom'])}/>)}
                
              <div className='sportif'> 
                  <div className='infos2'>
                    <form action="/add">
                        <button className="plus" type="submit"  ><i class="fa fa-plus" aria-hidden="true"></i></button>
                    </form>
                  </div>
              </div>
          </div>
        
      </div>
      </html>
      )
    }
  }