import React from 'react';
import Button from '../button/button';
import Sportif from '../sportif/sportif';
import axios from 'axios';
import { map } from 'lodash';
import '../../App.css';

let BACKEND_BASE_URL = "http://localhost:3001/sportifs/";

export default class Add extends React.Component {
  constructor() {
    super();
    
    this.state = {
      sportifs: [],
      addSportifInputValue: ''   
    }
  }

  componentDidMount() {
    this.getList();
  }

  addSportifInputChange = event => {
    this.setState({ addSportifInputValue: event.target.value });
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
    const { sportifs, addSportifInputValue} = this.state;

    return (


      <html>
            <h1>Ajouter un sportif</h1>

            <form action="/add" method="get" class="forme">
                <div class="form">
                    <label for="name">Nom de l'athlète : </label>
                    <input type="text" name="name" id="name" required></input>
                </div>
                <div class="form">
                    <label for="prenom">Prénom de l'athlète : </label>
                    <input type="name" name="prenom" id="prenom" required></input>
                </div>
                <div class="form">
                    <label for="age">Âge de l'athlète : </label>
                    <input type="number" name="age" id="age" required></input>
                </div>
                <div class="form">
                    <label for="sport">Sport de l'athlète : </label>
                    <input type="name" name="sport" id="sport" required></input>
                </div>
                <div class="form">
                    <label for="nationalite">Nationalité de l'athlète : </label>
                    <input type="name" name="nationalite" id="nationalite" required></input>
                </div>
                <div class="form">
                    <label for="taille">Taille de l'athlète : </label>
                    <input type="number" name="taille" id="taille" required></input>
                </div>
                <div class="form">
                    <label for="poids">Poids de l'athlète : </label>
                    <input type="number" name="poids" id="poids" required></input>
                </div>
                <div class="form">
                    <input type="submit" value="Ajouter à la base de données !" onClick={this.addSportif}></input>
                </div>



                <div className='category'>
                        <input
                            type="text"
                            id="addSportif"
                            name="addSportif"
                            onChange={this.addSportifInputChange}
                            value={addSportifInputValue}
                        />
                        <Button text={'Add sportif'} onClick={this.addSportif} />
                </div>



            </form>
      </html>
      )
    }
  }