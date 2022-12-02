/*import './App.css';

function App() {
  return (
    <div className="App"> JEUX OLYMPIQUES 
    </div>
  );
}

export default App;*/


import React from 'react';
import Button from './components/button/button';
import Sportif from './components/sportif/sportif';
import axios from 'axios';
import { map } from 'lodash';
import './App.css';

let BACKEND_BASE_URL = "http://localhost:3001/sportifs/1";

export default class App extends React.Component {
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

  
  deleteSportif= (id) => {
    axios.delete(`${BACKEND_BASE_URL}/${id}`).then((data) => this.getList());
  }
  
  renderCategory = (label, action) => {
    return (<div className='category'>
    <Button text={label} onClick={action} />
    </div>)
  }
  
  render() {  
    const { sportifs, addFilmInputValue} = this.state;

    /*async function refresh(event)  {

      BACKEND_BASE_URL = "http://localhost:3001/sportifs/";
    }*/

    async function handlesubmit(event)  {
        event.preventDefault();
        const id=event.target.id.value;
        BACKEND_BASE_URL = "http://localhost:3001/sportifs/"+id;
    }

    return (
      
      <div>
        <form onSubmit={handlesubmit}>
          <input type="id" name="id" id="id"></input><br/>
          <button type="submit" >Click</button>
        
        </form>
        
        {this.renderCategory('Actualiser', this.getList)}

        <div className='sportifs'>
          {map(sportifs, (sport, index) => <Sportif key={`sportif-${index}`} infos={sport} deleteSportif={() => this.deleteSportif(sport['_id'])}/>)}
        </div>
        
      </div>
      )
    }
  }