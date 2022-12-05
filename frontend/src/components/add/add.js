import React from 'react';
import './add.css';
import Navbar from '../navbar/navbar';

export default class Add extends React.Component {

  render() {
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
            <a href="/">
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