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
            color: "rgba(0, 0, 0, .5)",
          },
          {
            name: datas.graphes[0].sport2,
            share: datas.graphes[0].share2,
            explode: true,
            
          },
          {
            name: datas.graphes[0].sport3,
            share: datas.graphes[0].share3,
            
          },
          {
            name: datas.graphes[0].sport4,
            share: datas.graphes[0].share4,
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
        );
      }
    }
  }

  export default Graphe;