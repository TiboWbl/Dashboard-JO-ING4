import React, { Component } from "react";
import axios from "axios";
import '@progress/kendo-theme-default/dist/all.css';
import {
    Chart,
    ChartTitle,
    ChartSeries,
    ChartSeriesItem,
    ChartCategoryAxis,
    ChartCategoryAxisItem,
  } from "@progress/kendo-react-charts";

class Audience extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        error: null,
        isLoaded: false,
        items: []
      };
    }
  
    componentDidMount() {
      fetch("http://localhost:3001/audiences")
        .then(res => res.json())
        .then(
          (result) => {
            
            this.setState({
              isLoaded: true,
              items: result
            });
        
        },

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

        const categories = [datas.audiences[0].jour, datas.audiences[1].jour, datas.audiences[2].jour, datas.audiences[3].jour, datas.audiences[4].jour, datas.audiences[5].jour, datas.audiences[5].jour,datas.audiences[6].jour, datas.audiences[7].jour, datas.audiences[8].jour, datas.audiences[9].jour, datas.audiences[10].jour, datas.audiences[11].jour, datas.audiences[12].jour,datas.audiences[13].jour, datas.audiences[14].jour, datas.audiences[15].jour, datas.audiences[16].jour];
        const firstSeries = [datas.audiences[0].USA, datas.audiences[1].USA, datas.audiences[2].USA, datas.audiences[3].USA, datas.audiences[4].USA, datas.audiences[5].USA, datas.audiences[5].USA,datas.audiences[6].USA, datas.audiences[7].USA, datas.audiences[8].USA, datas.audiences[9].USA, datas.audiences[10].USA, datas.audiences[11].USA, datas.audiences[12].USA,datas.audiences[13].USA, datas.audiences[14].USA, datas.audiences[15].USA, datas.audiences[16].USA];
        const secondSeries = [datas.audiences[0].GB, datas.audiences[1].GB, datas.audiences[2].GB, datas.audiences[3].GB, datas.audiences[4].GB, datas.audiences[5].GB, datas.audiences[5].GB,datas.audiences[6].GB, datas.audiences[7].GB, datas.audiences[8].GB, datas.audiences[9].GB, datas.audiences[10].GB, datas.audiences[11].GB, datas.audiences[12].GB,datas.audiences[13].GB, datas.audiences[14].GB, datas.audiences[15].GB, datas.audiences[16].GB];
        const thirdSeries = [datas.audiences[0].France, datas.audiences[1].France, datas.audiences[2].France, datas.audiences[3].France, datas.audiences[4].France, datas.audiences[5].France, datas.audiences[5].France,datas.audiences[6].France, datas.audiences[7].France, datas.audiences[8].France, datas.audiences[9].France, datas.audiences[10].France, datas.audiences[11].France, datas.audiences[12].France,datas.audiences[13].France, datas.audiences[14].France, datas.audiences[15].France, datas.audiences[16].France];
        
        return (
            <Chart style={{
                height: 305,
                width: 780,
                left: 18,
              }}>
            <ChartTitle text="Audiences (en millions de téléspectateurs)" />
            <ChartCategoryAxis>
              <ChartCategoryAxisItem
                categories={categories}
                title={{
                  text: "Jours",
                }}
              />
            </ChartCategoryAxis>
            <ChartSeries>
              <ChartSeriesItem type="area" name="USA" data={firstSeries} />
              <ChartSeriesItem type="area" name="Grande-Bretagne" data={secondSeries} />
              <ChartSeriesItem type="area" name="France" data={thirdSeries} />
            </ChartSeries>
          </Chart>
        );
      }
    }
  }

  export default Audience;