import React, { Component } from "react";
import axios from "axios";
import '@progress/kendo-theme-default/dist/all.css';
import {
  Chart,
  ChartTitle,
  ChartSeries,
  ChartSeriesItem,
  ChartLegend,
} from "@progress/kendo-react-charts";

class Graphe extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        error: null,
        isLoaded: false,
        items: []
      };
    }
  
    componentDidMount() {
      fetch("http://localhost:3001/graphes")
        .then(res => res.json())
        .then(
          (result) => {
            
            this.setState({
              isLoaded: true,
              items: result
            });

            console.log(this.state.items);
            console.log("use");
            console.log(this.state.items.graphes[0]);
        
        },
          // Note: it's important to handle errors here
          // instead of a catch() block so that we don't swallow
          // exceptions from actual bugs in components.

          (error) => {
            this.setState({
              isLoaded: true,
              error
            });
          }
        )
    }
  
    render() {


      const { error, isLoaded, items } = this.state;
      const datas = this.state.items;
      const test = "oui";
      if (error) {
        return <div>Error: {error.message}</div>;
      } else if (!isLoaded) {
        return <div>Loading...</div>;
      } else {
        const pieData = [
          {
            name: datas.graphes[0].sport1,
            share: datas.graphes[0].share1,
            color: "rgba(0, 128, 255, 1)",
          },
          {
            name: datas.graphes[0].sport2,
            share: datas.graphes[0].share2,
            color: "rgba(255, 153, 153, 1)",
            
          },
          {
            name: datas.graphes[0].sport3,
            share: datas.graphes[0].share3,
            color: "rgba(245, 0, 0, 1)",
            explode: true,
            
          },
          {
            name: datas.graphes[0].sport4,
            share: datas.graphes[0].share4,
            color: "rgba(0, 0, 245, 1)",
          },
          {
            name: datas.graphes[0].sport6,
            share: datas.graphes[0].share6,
            color: "rgba(255, 128, 0, 1)",
            
          },
          {
            name: datas.graphes[0].sport7,
            share: datas.graphes[0].share7,
            color: "rgba(0, 245, 0, 1)",
            
          },
          {
            name: datas.graphes[0].sport8,
            share: datas.graphes[0].share8,
            color: "rgba(153, 0, 153, 1)",
          },
      
          {
            name: datas.graphes[0].sport11,
            share: datas.graphes[0].share11,
            color: "rgba(192, 192, 192, 1)",
          },
      
        ];
        return (
           /*
            //   <NbaWidget  data={datas} />
           <div className="widget2">
            
            <p className="Titre">Resultats de la nuit</p>
               
                <div className="match">
                <div className="logo1"></div>
                    <div className="score"><p>{datas.graphes[0].sport1}  -  {datas.graphes[0].share1}</p></div>
                </div>  
           </div>
           */
           <div className="co">
           <div className="k">
             <Chart
               style={{
                 top: 40,
                 height: 230,
                 width: 270,
               }}
             >
               <ChartTitle text="Les sports les plus regardés" align="center"/>
               <ChartLegend position="right" orientation="vertical" />
               <ChartSeries>
                 <ChartSeriesItem
                   
                   type="donut"
                   overlay={{
                     gradient: "glass",
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
        );
      }
    }
  }

  export default Graphe;