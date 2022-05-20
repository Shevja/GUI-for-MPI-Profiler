import React from "react";
import { ResponsiveBullet } from '@nivo/bullet'

const Bullet = ({ data }) => {
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

    const bulletData = [];
    for (let i = 0; i <= maxNumProc; i++) {
        let mass = [];
        data.forEach(elem => {
            if (elem[0] == String(i)) {
                mass.push(Number(elem[1]) / 1000000);
                mass.push(Number(elem[2]) / 1000000);
            }
        });
        bulletData.push({
            id: String(i),
            ranges: mass,
            measures: [0],
            markers: [0]
        });
    }

    let delimiter = 100;
    let granularBulletData = [];
    for (let index = 0; index < Math.ceil(maxNumProc / delimiter); index++) {
        let tempArr = [];
        for (let i = 0; i < delimiter; i++) {
            if (bulletData[delimiter * index + i]) {
                tempArr.push(bulletData[delimiter * index + i]);
            }
        }
        granularBulletData.push(tempArr);
    }
    console.log(granularBulletData);

    console.log("out!")

    return (
        <div style={{ width: "100%", height: "4000px" }}>
            {granularBulletData.map(bulletData => {
                return(
                <ResponsiveBullet
                    data={bulletData}
                    margin={{ top: 50, right: 90, bottom: 50, left: 90 }}
                    spacing={10}
                    maxValue={maxStartTime / 1000000}
                    minValue={minStartTime / 1000000}
                    titleAlign="start"
                    titleOffsetX={-70}
                    titleOffsetY={-7}
                    rangeBorderColor="#ffffff"
                    rangeBorderWidth={1}
                    measureBorderColor={{ from: 'color', modifiers: [] }}
                    measureBorderWidth={0}
                    measureSize={0}
                    markerSize={0}
                    axisPosition="before"
                    rangeColors="seq:warm"
                    animate={false}
                />
                )
            })}
            <p> plotted</p>
        </div>
    )
}

export default Bullet;