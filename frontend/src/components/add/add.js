import React from 'react';
import Button from '../button/button';
import Sportif from '../sportif/sportif';
import axios from 'axios';
import { map } from 'lodash';
import '../../App.css';
import './add.css';
import Navbar from '../navbar/navbar';

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

  getList = () => {
    axios.get(BACKEND_BASE_URL).then((data) => data.data && data.data.sportifs && this.setState({ sportifs: data.data.sportifs }));
  }

  addSportif = () => {
    axios.put(BACKEND_BASE_URL, { sportif: this.state.addFilmInputValue }).then((data) => this.getList());
  }


  deleteSportif = (nom) => {
    axios.delete(`${BACKEND_BASE_URL}/${nom}`).then((data) => this.getList());
  }

  renderCategory = (label, action) => {
    return (<div>
      <Button text={label} onClick={action} />
    </div>)
  }

  render() {
    const { sportifs, addSportifInputValue } = this.state;

    return (

      <html>
        <div>
              <Navbar />  
        </div>
        <div class="login-box">
          <h2>Ajouter un sportif</h2>
          <form>
            <div class="user-box">
              <input type="text" name="" required=""></input>
                <label>Prénom</label>
            </div>
            <div class="user-box">
              <input type="password" name="" required=""></input>
                <label>Nom</label>
            </div>
            <div class="user-box">
              <input type="text" name="" required=""></input>
                <label>Âge</label>
            </div>
            <div class="user-box">
              <input type="text" name="" required=""></input>
                <label>Sport</label>
            </div>
            <div class="user-box">
              <input type="text" name="" required=""></input>
                <label>Nationalité</label>
            </div>
            <div class="user-box">
              <input type="text" name="" required=""></input>
                <label>Taille (cm)</label>
            </div>
            <div class="user-box">
              <input type="text" name="" required=""></input>
                <label>Poids (kg)</label>
            </div>
            <a href="#">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              Submit
            </a>
            <a className='retour' href="/api">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              Retour
            </a>
          </form>    
        </div>
        <div className='espacement'><p> </p></div>
      </html>
    )
  }
}