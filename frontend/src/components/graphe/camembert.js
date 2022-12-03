import React from 'react';
import Button from '../button/button';
import Graphe from './graphe';
import axios from 'axios';
import { map } from 'lodash';
import '../../App.css';
import './graphe.css'
import '@progress/kendo-theme-default/dist/all.css';

import {
    Chart,
    ChartTitle,
    ChartSeries,
    ChartSeriesItem,
    ChartLegend,
  } from "@progress/kendo-react-charts";

let BACKEND_BASE_URL3 = "http://localhost:3001/graphes";

export default class Camembert extends React.Component {

    constructor() {
        super();
        
        this.state = {
          graphes: [],
          addFilmInputValue: ''   
        }
      }

  componentDidMount() {
    this.getList();
  }
  
  getList= () => {
    axios.get(BACKEND_BASE_URL3).then((data) => data.data && data.data.graphes && this.setState({ graphes: data.data.graphes}));
  }

  deleteGraphes= (id) => {
    axios.delete(`${BACKEND_BASE_URL3}/${id}`).then((data) => this.getList());
  }
  

  renderInfo(label, info) {
    return (<div className='infoLine2'>
        <div className='infoLabel2'>{label}</div>
        <div className='info2'>{info}</div>
    </div>);
    }
  
  render() {  
        const { infos, deleteGraphes } = this.props;
        const { graphes, addFilmInputValue} = this.state;
        //console.log(infos);
        const { _id, sport1, sport2, sport3, sport4, share1, share2, share3, share4 } = infos;

        const pieData = [
            {
              name: infos.sport1,
              share: infos.share1,
              color: "rgba(0, 0, 0, .5)",
            },
            {
              name: infos.sport2,
              share: infos.share2,
              explode: true,
              
            },
            {
                name: infos.sport3,
                share: infos.share3,
              
            },
            {
                name: infos.sport4,
                share: infos.share4,
            },
        
          ];

    return (

        <div className="co">
                <div className="k">
                  <Chart
                    style={{
                      height: 350,
                    }}
                  >
                    <ChartTitle text="Stats sports" />
                    <ChartLegend position="bottom" orientation="horizontal" />
                    <ChartSeries>
                      <ChartSeriesItem
                        type="pie"
                        overlay={{
                          gradient: "roundedBevel",
                        }}
                        tooltip={{
                          visible: true,
                        }}
                        data={pieData} 
                        categoryField="name"
                        field="share"
                        color="color"
                      />
                    </ChartSeries>
                  </Chart>
                </div>
              </div>
      )
    }
  }