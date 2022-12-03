import React from 'react';
import Button from '../button/button';
import { map, split } from 'lodash';

import './graphe.css'
import '../../App.css';
import '@progress/kendo-theme-default/dist/all.css';

import {
    Chart,
    ChartTitle,
    ChartSeries,
    ChartSeriesItem,
    ChartLegend,
  } from "@progress/kendo-react-charts";

export default class Graphe extends React.Component {
    renderInfo(label, info) {
        return (<div className='infoLine2'>
            <div className='infoLabel2'>{label}</div>
            <div className='info2'>{info}</div>
        </div>);
    }

    render() {
        const { infos, deleteMedal } = this.props;
        //console.log(infos);
        const { _id, sport1, sport2, sport3, sport4, share1, share2, share3, share4 } = infos;

        const pieData = [
            {
              name: this.renderInfo('',sport1),
              share: this.renderInfo('',share1),
              color: "rgba(0, 0, 0, .5)",
            },
            {
              name: this.renderInfo('',sport2),
              share: this.renderInfo('',share2),
              explode: true,
              
            },
            {
                name: this.renderInfo('',sport3),
                share: this.renderInfo('',share3),
              
            },
            {
                name: this.renderInfo('',sport4),
                share: this.renderInfo('',share4),
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