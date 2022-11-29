import './App.css';

function App() {
  return (
    <div className="App"> JEUX OLYMPIQUES 
    </div>
  );
}

export default App;


/*import React from 'react';
import Button from './components/button';
import Sportif from './components/sportif';
import axios from 'axios';
import { map } from 'lodash';
import './App.css';

const BACKEND_BASE_URL = "http://localhost:3001/sportifs/";

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
    axios.get(BACKEND_BASE_URL).then((data) => data.data && data.data.sportifs && this.setState({ sportifs: data.data.sportifs }));
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

    return (
      <div>
        {this.renderCategory('Refresh', this.getList)}
        <div className='category'>
              <input
                type="text"
                id="addFilm"
                name="addFilm"
                onChange={this.addFilmInputChange}
                value={addFilmInputValue}
              />
            <Button text={'Add sportif'} onClick={this.addSportif} />
        </div>

        <div className='sportifs'>
          {map(sportifs, (sportif, index) => <Sportif key={`sportif-${index}`} infos={sportif} deleteSportif={() => this.deleteSportif(sportif['_id'])}/>)}
        </div>
      </div>
      )
    }
  }*/