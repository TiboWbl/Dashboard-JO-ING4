import React from "react";
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

      const { error, isLoaded } = this.state;
      const datas = this.state.items;
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
          <div className='test'>
           <div className="co">
            <div className="k">
              <Chart
                style={{
                  top: 19,
                  left: 17,
                  height: 282,
                  width: 270,
                }}
              >
                <ChartTitle text="Les sports les plus regardés" align="center" />
                <ChartLegend position="right" orientation="vertical" align="middle" />
                <ChartSeries >
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
        </div>
        );
      }
    }
  }

  export default Graphe;