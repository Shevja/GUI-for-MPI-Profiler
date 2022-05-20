import React from "react";
import { ResponsiveSwarmPlotCanvas } from '@nivo/swarmplot'

const Line = ({ data }) => {


    let maxNumProc = 0;
    let minStartTime = data[0][1];
    let maxStartTime = 0;
    let minEndTime = data[0][2];
    let maxEndTime = 0;
    data.map(element => {
        if (Number(element[0]) > maxNumProc) {
            maxNumProc = Number(element[0]);
        };
        if (Number(element[1]) > maxStartTime) {
            maxStartTime = Number(element[1])
        };
        if (Number(element[1]) < minStartTime) {
            minStartTime = Number(element[1]);
        };
    });
    console.log("MinStime:", minStartTime, "MaxSTime", maxStartTime)

    const lineData = [];
    for (let i = 0; i <= maxNumProc; i++) {
        let mass = [];
        let strNum = 0;
        data.forEach(elem => {
            if (elem[0] == String(i)) {
                strNum++;
                mass.push({
                    x: i,
                    y: Number(elem[1]) / 100000
                })
            }
        });
        lineData.push({
            id: String(i),
            color: "hsl(66, 70%, 50%)",
            data: mass
        });
    }
    let tickLineX = [], tickLineY = [];

    let tick = (maxStartTime - minStartTime) / 5;
    for (let timeGrid = minStartTime; timeGrid <= maxStartTime; timeGrid += tick) {
        tickLineX.push(Math.round(timeGrid / 1000000));
    }
    tick = maxNumProc / 5;
    for (let timeGrid = 0; timeGrid < maxNumProc; timeGrid += tick) {
        tickLineY.push(timeGrid);
    }

    console.log("lineData: ", lineData)
    console.log("exData: ", data)
    // console.log("tickX: ", tickLineX)
    // console.log("tickY: ", tickLineY)

    return (
        <div style={{ width: "100%", height: "900px" }}>
            <ResponsiveSwarmPlotCanvas
                data={data}
                groups={[
                    'group A',
                    'group B',
                    'group C',
                    'group D',
                    'group E',
                    'group F',
                    'group G'
                ]}
                identity="id"
                value="price"
                valueFormat="$.2f"
                valueScale={{ type: 'linear', min: 0, max: 500, reverse: false }}
                size={{
                    key: 'volume',
                    values: [
                        4,
                        20
                    ],
                    sizes: [
                        4,
                        12
                    ]
                }}
                spacing={1}
                simulationIterations={60}
                colors={{ scheme: 'paired' }}
                borderColor={{
                    from: 'color',
                    modifiers: [
                        [
                            'darker',
                            0.6
                        ]
                    ]
                }}
                margin={{ top: 80, right: 100, bottom: 80, left: 100 }}
                axisTop={{
                    orient: 'top',
                    tickSize: 10,
                    tickPadding: 5,
                    tickRotation: 0,
                    legend: 'group if vertical, price if horizontal',
                    legendPosition: 'middle',
                    legendOffset: -46
                }}
                axisRight={{
                    orient: 'right',
                    tickSize: 10,
                    tickPadding: 5,
                    tickRotation: 0,
                    legend: 'price if vertical, group if horizontal',
                    legendPosition: 'middle',
                    legendOffset: 76
                }}
                axisBottom={{
                    orient: 'bottom',
                    tickSize: 10,
                    tickPadding: 5,
                    tickRotation: 0,
                    legend: 'group if vertical, price if horizontal',
                    legendPosition: 'middle',
                    legendOffset: 46
                }}
                axisLeft={{
                    orient: 'left',
                    tickSize: 10,
                    tickPadding: 5,
                    tickRotation: 0,
                    legend: 'price if vertical, group if horizontal',
                    legendPosition: 'middle',
                    legendOffset: -76
                }}
                useMesh={true}
            />
        </div>
    )
}
export default Line;