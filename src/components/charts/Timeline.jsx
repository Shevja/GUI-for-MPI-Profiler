import React, { Component } from "react";
import * as d3 from "d3";
import {
    color,
    max,
    min,
    scaleBand,
    scaleLinear,
    select
} from "d3";

class Timeline extends Component {
    constructor(props) {
        super(props);
    };



    parseData = (data) => {
        let callId = null;
        let callData = {};

        // convert data to:
        // <process number>: {
        //      callStartTime: <callStartTime>,
        //      callDuration: <callDuration> 
        // },
        // ...
        data.forEach(element => {
            if (callId !== element[0]) {
                callId = element[0];

                if (callData[callId] === undefined) {
                    callData[callId] = [];
                }
            }
            callData[callId].push({
                callStartTime: Number(element[1]),
                callDuration: Number(element[3])
            })
        });
        return callData;
        // console.log(callData);
    }

    componentDidMount() {
        // create gantt chart
        const caData = [{
            callStartTime: 2,
            callDuration: 2
        },
        {
            callStartTime: 6,
            callDuration: 10
        },
        {
            callStartTime: 25,
            callDuration: 20
        },
        {
            callStartTime: 70,
            callDuration: 30
        },
        {
            callStartTime: 110,
            callDuration: 40
        },
        {
            callStartTime: 160,
            callDuration: 50
        },
        {
            callStartTime: 240,
            callDuration: 10
        }]
        // const callData = this.parseData(this.props.data);
        // for(let i = 0; i < 1; i++) {
        //     this.draw(callData[i]);
        // }
        this.draw(caData)
    }
    draw = (data) => {
        let endTime = 0;
        let maxDuration = 0;

        data.forEach(element => {
            endTime = Math.max(endTime, element.callStartTime + element.callDuration);
            maxDuration = Math.max(maxDuration, element.callDuration);
        });
        const boundary = Math.floor(maxDuration / 2);

        const svg = d3.select(this.refs.canvas)
            .append("svg")
            .attr("width", 1000)
            .attr("height", 100)
            .style("border", "1px solid black")

        const margin = {
            top: 30,
            right: 20,
            bottom: 30,
            left: 20
        };
        const width = svg.attr('width');
        const height = svg.attr('height');

        const xScale = scaleLinear()
            .domain([0, endTime])
            .range([0, width])

        const getXPos = (time) => {
            return time * (width / endTime);
        }

        const getColor = (value) => {
            let percentOfBound = value / boundary;
            let startColorRange;
            let hexColor;
            if (percentOfBound > 1) {
                percentOfBound -= 1;

                value = Math.floor(200 * percentOfBound);
                startColorRange = parseInt('c8c800', 16);
                value = value << 8;

                hexColor = (startColorRange - value).toString(16);
            } else {
                value = Math.floor(200 * percentOfBound);
                startColorRange = parseInt('00c800', 16);
                value = value << 16;

                hexColor = (startColorRange | value).toString(16);
            }

            return `#${hexColor}`
        }

        // Axes
        // var x_axis = d3.axisBottom()
        //     .scale(xScale)

        // svg.append("g")
        //     .call(x_axis);

        // var y_axis = d3.axisLeft()
        //     .scale(xScale);

        // svg.append("g")
        //     .attr("transform", "translate(50, 10)")
        //     .call(y_axis);
        //

        svg.selectAll("rect")
            .data(data).enter()
            .append("rect")
            .attr('x', d => getXPos(d.callStartTime))
            .attr("width", d => xScale(d.callDuration))
            .attr("height", 50)
            .attr("fill", d => getColor(d.callDuration)) //00c800 c8c800 #c80000 (з, ж, к)
            // .attr('margin', 20)
    }

    render() {
        return (
            <div>
                all will be good
                <div ref="canvas"></div>
            </div>
        );
    }
}
export default Timeline;