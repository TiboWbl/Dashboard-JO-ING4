import React from 'react';
import Button from '../button/button';
import Medal from './medal';
import axios from 'axios';
import { map } from 'lodash';

let BACKEND_BASE_URL2 = "http://localhost:3001/medals";

export default class Pays extends React.Component {
  constructor() {
    super();
    
    this.state = {
      medals: [],
      addFilmInputValue: ''   
    }
  }

  componentDidMount() {
    this.getList();
  }
  
  getList= () => {
    axios.get(BACKEND_BASE_URL2).then((data) => data.data && data.data.medals && this.setState({ medals: data.data.medals}));
  }

  deleteMedals= (id) => {
    axios.delete(`${BACKEND_BASE_URL2}/${id}`).then((data) => this.getList());
  }
  
  renderCategory = (label, action) => {
    return (<div>
    <Button text={label} onClick={action} />
    </div>)
  }
  
  render() {  
    const { medals } = this.state;

    return (
      <div>
          <div className='medals'>
            <table className='romain'>
                    <thead>
                        <tr>
                            <th>Pays</th>
                            <th>	&#129351; </th>
                            <th>  &#129352; </th>
                            <th>	&#129353; </th>
                            <th>  Total     </th>
                            <th>  &#127942; </th>
                        </tr>
                    </thead>
                    <br/>
                      {map(medals, (medaille, index) => <Medal key={`medaille-${index}`} infos={medaille} deleteMedals={() => this.deleteMedals(medaille['_id'])}/>)}          
            </table>
          </div> 
      </div>
      )
    }
  }