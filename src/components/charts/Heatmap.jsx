import React from "react";
import Chart from "react-apexcharts"

const Heatmap = ({ data }) => {
    // const newData = data.map(element => {
    // });
    let newData = [];
    // for (let index = 0; index < data.length; index++) {
    //     if (data[index][0] === "0") {
    //         newData.push({ x: index, y: data[index][3] })
    //     } else {
    //         break;
    //     }
    // }
    let maxNumProc = 0;
    data.map(element => {
        if (Number(element[0]) > maxNumProc) {
            maxNumProc = Number(element[0]);
        }
    });

    for (let i = 0; i <= maxNumProc; i++) {
        let mass = [];
        let strNum = 0;
        data.forEach(elem => {
            if (elem[0] == String(i)) {
                strNum++;
                mass.push({
                    x: strNum,
                    y: elem[3]
                })
            }
        });
        newData.push(mass);
    }

    const options = {
        series: newData.map((element, index) => {
            return {
                name: `Process ${index}`,
                data: element
            };
        }),
        plotOptions: {
            heatmap: {
                shadeIntensity: 0.5,
                radius: 0,
                useFillColorAsStroke: true,
                colorScale: {
                    ranges: [{
                        from: 0,
                        to: 20,
                        name: 'low',
                        color: '#00A100'
                    },
                    {
                        from: 20,
                        to: 30,
                        name: 'medium',
                        color: '#128FD9'
                    },
                    {
                        from: 30,
                        to: 40,
                        name: 'high',
                        color: '#FFB200'
                    },
                    {
                        from: 40,
                        to: 60,
                        name: 'extreme',
                        color: '#FF0000'
                    },
                    {
                        from: 60,
                        to: 99000,
                        name: 'MADNESS',
                        color: "#460C00"
                    }
                    ]
                }
            }
        },
        dataLabels: {
            enabled: false
        }
    }

    return (
        <div>
            <Chart options={options} type="heatmap" series={options.series} style={{ margin: "42px auto", width: "maxContent", maxWidth: "1200px" }} />
        </div>
    );
}

export default Heatmap;