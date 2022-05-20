import React, { useEffect, useRef } from "react";
import { ResponsiveHeatMapCanvas } from '@nivo/heatmap'

const Heat = ({ data }) => {
    console.log("data", data)
    let maxNumProc = 0;
    let minStartTime = data[0][1];
    let maxStartTime = 0;
    let minEndTime = data[0][2];
    let maxEndTime = 0;

    data.map(element => {
        if (Number(element[0]) > maxNumProc) {
            maxNumProc = Number(element[0]);
        }
    });
    data.map(element => {
        if (Number(element[1]) > maxStartTime) {
            maxStartTime = Number(element[1])
        };
        if (Number(element[1]) < minStartTime) {
            minStartTime = Number(element[1]);
        }
    });
    console.log("range для времени начала:", (maxStartTime - minStartTime) / 1000000);
    data.map(element => {
        if (Number(element[2]) > maxEndTime) {
            maxEndTime = Number(element[2])
        };
        if (Number(element[2]) < minEndTime) {
            minEndTime = Number(element[2]);
        }
    });
    // console.log("range для времени конца:", (maxEndTime - minEndTime) / 1000000);
    // console.log("last time end:", maxEndTime / 1000000)

    const heatData = [];
    for (let i = 0; i <= maxNumProc; i++) {
        let mass = [];
        let strNum = 0;
        data.forEach(elem => {
            if (elem[0] == String(i)) {
                strNum++;
                mass.push({
                    x: strNum,
                    y: Number(elem[3])
                })
            }
        });
        heatData.push({
            id: i,
            data: mass
        });
    }
    // console.time("time parse")
    let delimiter = 50;
    let newHeatData = [];
    for (let index = 0; index < Math.ceil(maxNumProc / delimiter); index++) {
        let tempArr = [];
        for (let i = 0; i < delimiter; i++) {
            if (heatData[delimiter * index + i]) {
                tempArr.push(heatData[delimiter * index + i]);
            }
        }
        newHeatData.push(tempArr);
    }
    // console.timeEnd("time parse")
    console.log(heatData)

    let firstHeatData = newHeatData[0];
    newHeatData.splice(0, 1);
    return (
        <div style={{ textAlign: "center", fontSize: "20px", margin: "20px" }}>
            Время выполнения операции MPI_Allreduce
            <div style={{ width: "100%", height: "900px" }}>
                <ResponsiveHeatMapCanvas
                    data={firstHeatData}
                    margin={{ top: 100, right: 60, bottom: 0, left: 80 }}
                    valueFormat=" >-.2s"
                    pixelRatio={2}
                    axisTop={{
                        tickSize: 8,
                        tickPadding: 3,
                        tickRotation: -90,
                        legend: 'Номер вызова',
                        legendOffset: -48
                    }}
                    axisRight={{
                        tickSize: 6,
                        tickPadding: 5,
                        tickRotation: 0,
                        legend: 'Процессы',
                        legendPosition: 'middle',
                        legendOffset: 40
                    }}
                    axisLeft={null}
                    colors={{
                        type: 'quantize',
                        scheme: 'yellow_green',
                        steps: 16,
                        minValue: 0,
                        maxValue: 100
                    }}
                    emptyColor="#555555"
                    inactiveOpacity={1}
                    borderWidth={1}
                    borderColor="#000000"
                    enableLabels={false}
                    legends={[
                        {
                            anchor: 'top',
                            translateX: -41,
                            translateY: -60,
                            length: 500,
                            thickness: 20,
                            direction: 'row',
                            tickPosition: 'before',
                            tickSize: 6,
                            tickSpacing: 6,
                            tickOverlap: false,
                            title: 'Value',
                            titleAlign: 'middle',
                            titleOffset: 3
                        }
                    ]}
                    annotations={[]}
                    isInteractive={false}
                    animate={false}
                />
                { console.time("drw time") }
                {newHeatData.map(heatData => {
                    return (
                        <ResponsiveHeatMapCanvas
                            data={heatData}
                            margin={{ top: 0, right: 60, bottom: 0, left: 80 }}
                            valueFormat=" >-.2s"
                            pixelRatio={2}
                            axisTop={null}
                            axisRight={{
                                tickSize: 6,
                                tickPadding: 5,
                                tickRotation: 0,
                                
                                legendPosition: 'middle',
                                legendOffset: 40
                            }}
                            axisLeft={null}
                            colors={{
                                type: 'quantize',
                                scheme: 'yellow_green',
                                steps: 10,
                                minValue: 0,
                                maxValue: 100
                            }}
                            emptyColor="#555555"
                            inactiveOpacity={1}
                            borderWidth={1}
                            borderColor="#000000"
                            enableLabels={false}
                            annotations={[]}
                            isInteractive={false}
                            animate={false}
                        />
                    );
                })}
                { console.timeEnd("drw time") }
            </div>
        </div>
    );
}
export default Heat