import React, { Component } from "react";
import * as d3 from "d3";
import { scaleLinear } from "d3";

class Timeline extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mainframe: {
                margin: {
                    top: 30,
                    right: 10,
                    bottom: 30,
                    left: 60
                }
            },
            rect: {
                width: 600,
                height: 50,
                borderBottomWidth: 2
            },
            chank: {
                size: 0,
                bounds: [],
                lastBound: 0
            },
            data: 0
        }
    };

    parseData1 = () => {
        return {
            totalProcesses: 1,
            endTime: 255,
            0: [{
                callStartTime: 2,
                callDuration: 2,
                color: 'rgb(16, 200, 0)'
            },
            {
                callStartTime: 6,
                callDuration: 10,
                color: 'rgb(80, 200, 0)'
            },
            {
                callStartTime: 25,
                callDuration: 20,
                color: 'rgb(160, 200, 0)'
            },
            {
                callStartTime: 70,
                callDuration: 30,
                color: 'rgb(200, 161, 0)'
            },
            {
                callStartTime: 110,
                callDuration: 40,
                color: 'rgb(200, 80, 0)'
            },
            {
                callStartTime: 160,
                callDuration: 50,
                color: 'rgb(200, 0, 0)'
            },
            {
                callStartTime: 240,
                callDuration: 15,
                color: 'rgb(120, 200, 0)'
            }]
        }
    }

    parseData = (data) => {
        let callId = 0;
        let callData = {};
        let maxDuration = 0;
        let startTime = null;
        let endTime = 0;

        data.forEach(element => {
            maxDuration = Math.max(maxDuration, Number(element[3]));
            startTime = Math.min(Number(element[2]));
            endTime = Math.max(endTime, Number(element[1]) + Number(element[3]));
            callId = Math.max(callId, Number(element[0]))
        });
        callData.totalProcesses = callId;
        callData.startTime = startTime;
        callData.endTime = endTime;

        const boundary = Math.floor(maxDuration / 2);//for getColor()

        const getColor = (duration) => {
            let red = 200, green = 200;
            let percentOfBound = duration / boundary;

            if (percentOfBound > 1) {
                percentOfBound -= 1;
                green = green - Math.floor(200 * percentOfBound);
            } else {
                red = Math.floor(200 * percentOfBound);
            }

            return `rgb(${red}, ${green}, 0)`
        }

        // convert data to:
        // <process number>: {
        //      callStartTime: <callStartTime>,
        //      callDuration: <callDuration> 
        // },
        // ...
        callId = null;
        data.forEach(element => {
            if (callId !== element[0]) {
                callId = element[0];

                if (callData[callId] === undefined) {
                    callData[callId] = [];
                }
            }
            callData[callId].push({
                callStartTime: Number(element[1]),
                callDuration: Number(element[3]),
                color: getColor(Number(element[3]))
            })
        });

        return callData;
    }

    initChankBound = (chankSize, totalProcesses) => {
        let totalChank = totalProcesses / chankSize;
        let chankBound = [];
        if (String(totalChank).includes('.')) {
            totalChank = Math.floor(totalChank);
            chankBound.push({
                bound: totalProcesses,
                loaded: false
            })
        }
        for (let chankId = totalChank; chankId > 0; chankId--) {
            chankBound.unshift({
                bound: chankSize * chankId,
                loaded: false
            })
        }

        return chankBound;
    }

    getXPos = (time) => {
        return time * (this.state.rect.width / this.state.data.endTime);
    }

    drawChank = (caData, mainframe, chankId, xScale, yScale) => {
        const chank = this.state.chank.bounds[chankId];
        let processId = (chankId == 0) ? 0 : this.state.chank.bounds[chankId - 1].bound;
        for (; processId < chank.bound; processId++) {
            try {
                const yPosition = this.state.mainframe.margin.top + processId * (this.state.rect.height + this.state.rect.borderBottomWidth);//processId - номер процесса
                this.drawRect(mainframe, caData[processId], processId, yPosition, xScale, yScale)
            } catch {
                console.log('bound!')
            }
        }
        this.state.chank.bounds[chankId].loaded = true;
        // console.log(this.state.chank)
    }

    handleScroll = (event, callData, mainframe, xScale, yScale) => {
        const upperBound = Math.floor(document.documentElement.scrollTop / (this.state.rect.height + this.state.rect.borderBottomWidth))
        const lowerBound = Math.floor((document.documentElement.scrollTop + window.innerHeight) / (this.state.rect.height + this.state.rect.borderBottomWidth))
        
        let chankIdPrev = this.state.chank.bounds.findIndex(currentBound => currentBound.bound > upperBound);
        let chankIdNext = this.state.chank.bounds.findIndex(currentBound => currentBound.bound > lowerBound);
        chankIdPrev = chankIdPrev < 0? 0 : chankIdPrev;
        chankIdNext = chankIdNext < 0? 0 : chankIdNext;

        if (!this.state.chank.bounds[chankIdPrev].loaded) {
            this.drawChank(callData, mainframe, chankIdPrev, xScale, yScale);
        }
        if (!this.state.chank.bounds[chankIdNext].loaded) {
            this.drawChank(callData, mainframe, chankIdNext, xScale, yScale);
        }
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    async componentDidMount() {
        // init values
        const callData = this.parseData1(); // debug data
        // const callData = this.parseData(this.props.data);
        const chankSize = Math.floor(window.innerHeight / (this.state.rect.height + this.state.rect.borderBottomWidth)); //60
        console.log(callData)
        const chankBound = this.initChankBound(chankSize, callData.totalProcesses)
        //

        await this.setState({
            chank: {
                size: chankSize,
                bounds: chankBound,
                lastBound: 0
            },
            data: callData
        });

        const xScale = scaleLinear()
            .domain([0, this.state.data.endTime])
            .range([0, this.state.rect.width])

        const yScale = scaleLinear()
            .domain([0, 0])
            .range([0, 0])

        console.log(this.state.chank)
        console.log('draw')
        const mainframe = this.drawTimeline(this.state.data, xScale, yScale);

        window.addEventListener('scroll', event => this.handleScroll(event, this.state.data, mainframe, xScale, yScale));
    }

    drawTimeline = (callData, xScale, yScale) => {
        const mainframe = d3.select(this.refs.canvas)
            .append("svg")
            .attr("width", this.state.rect.width + (this.state.mainframe.margin.right + this.state.mainframe.margin.left))
            .attr("height", ((this.state.rect.height + this.state.rect.borderBottomWidth) * this.state.data.totalProcesses)
                + this.state.mainframe.margin.top + this.state.mainframe.margin.bottom)
            .style("border", "1px solid darkgray")
            .style('background', 'ghostwhite')

        //////////// x Axis
        let x_axis = d3.axisTop()
            .tickSize(mainframe.attr('height') - this.state.mainframe.margin.top)
            .scale(xScale)

        mainframe.append('g')
            .attr('transform', `translate(${this.state.mainframe.margin.left}, ${mainframe.attr('height')})`)
            .attr('stroke-dasharray', '2,2')
            .call(x_axis)

        this.drawChank(callData, mainframe, 0, xScale, yScale);

        return mainframe;
    }


    drawRect = (mainframe, data, processNum, yPosition, xScale, yScale) => {
        const svg = d3.select("svg")
            .append('svg')
            .attr('width', this.state.rect.width)
            .attr('height', this.state.rect.height)
            .attr('x', this.state.mainframe.margin.left)
            .attr('y', yPosition)
            .style('border', '2px solid black')
            .style('background', 'black')

        //////////// y Axis
        let y_axis = d3.axisLeft()
            .tickFormat(`Process ${processNum}`) // processNum - номер процесса
            .scale(yScale)

        mainframe.append("g")
            .attr('transform', `translate(${this.state.mainframe.margin.left}, 
                        ${Number(yPosition) + this.state.rect.height * 0.5})`)//processNum - номер процесса
            .call(y_axis)
        ///////////// Duration rectangle
        svg.selectAll('rect')
            .data(data).enter()
            .append('rect')
            .attr('x', d => this.getXPos(d.callStartTime))
            .attr('width', d => xScale(d.callDuration))
            .attr('height', this.state.rect.height)
            .attr('fill', d => d.color)
    }

    render() {
        return (
            <div>
                <div style={{ textAlign: "center", fontSize: "20px", margin: "10px" }} ref="canvas"></div>
            </div>
        );
    }
}
export default Timeline;