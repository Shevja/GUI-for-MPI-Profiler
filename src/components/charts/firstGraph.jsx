import React from "react";
import Chart from "react-apexcharts"

const FirstGraph = ({data}) => {
    const newData = data.map(element => {
        return element[3];
    });
    const catData = data.map(element => {
        return element[4];
    });

    const options = {
        title: {
            text: "Zavisimost' dlya 0 processa",
            style: {
                fontSize: "24px"
            },
            align: "center"
        },
        chart: {
            type: 'area'
        },
        series: [{
            name: 'Duration',
            data: newData
        }],
        yaxis: {
            title: {
                text: "Duration",
                style: {
                    fontSize: "18px"
                }
            }
        },
        xaxis: {
            title: {
                text: "Message size",
                style: {
                    fontSize: "18px"
                }
            },
            name: "Message size",
            categories: catData
        }
    }
    
    return (
        <div>
            <Chart options={ options } type={ options.chart.type } series={ options.series } style={{ margin: "42px auto", width: "maxContent", maxWidth: "1200px"}}/>
        </div>
    );
}

export default FirstGraph