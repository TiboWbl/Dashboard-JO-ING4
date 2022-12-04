import React, { Component } from "react";
import '@progress/kendo-theme-default/dist/all.css';
import {
    Chart,
    ChartTitle,
    ChartSeries,
    ChartSeriesItem,
    ChartCategoryAxis,
    ChartCategoryAxisTitle,
    ChartCategoryAxisItem,
} from "@progress/kendo-react-charts";

class Nation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: []
        };
    }

    componentDidMount() {
        fetch("http://localhost:3001/nations")
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

            const [firstSeries] = [
                [datas.nations[0].nations, datas.nations[1].nations, datas.nations[2].nations, datas.nations[3].nations],
            ];
            const categories = [datas.nations[0].hote, datas.nations[1].hote, datas.nations[2].hote, datas.nations[3].hote];

            return (
                <Chart style={{
                    height: 282,
                    width: 270,
                    left: 23,
                    top: 16,
                  }}>
                    <ChartTitle text="Nations participantes" />
                    <ChartCategoryAxis>
                        <ChartCategoryAxisItem categories={categories}>
                            <ChartCategoryAxisTitle/>
                        </ChartCategoryAxisItem>
                    </ChartCategoryAxis>
                    <ChartSeries>
                        <ChartSeriesItem tooltip={{
                     visible: true,
                   }} type="bar" gap={2} spacing={0} data={firstSeries} />
                    </ChartSeries>
                </Chart>
            );
        }
    }
}

export default Nation;