import React, { Component } from "react";
import * as d3 from "d3";
import styles from "../BarChart/barchart.css";
import {Chart} from "../BarChart/d3barchart";
import svgToPng from "save-svg-as-png";

import events from "../../events";
import config from "../../config";
import {
  getTurnoutDataForAllEvents,
} from "../../api";
import {
  parseTurnoutDataForAllEvents,
  getRegionName
} from "../../utils";


var dataRefreshTime = 30 * 1000;
var chartOptions = {
  chartType: 'Turnout Barchart',
  yAxisLabel: 'PERCENTAGE',
  noXaxisByParty: true,
  yValue: function(d) {
    return d.percVoterTurnout;
  },
  yValueFormat: function(percVoterTurnout) {
    return percVoterTurnout + '%';
  } 
};

function className(originName) {
  return styles[originName] || originName;
}

var chart;
var refreshIntervalID = 0;

class BarChart extends Component {

    constructor(props) {
      super(props);
      var self = this;
      this.state = {
        eventType: "national",
        regionType: "national",
        provinceName: "",
        muniName: "",
        muniCode: "",
        iecId: "",
      }
      if (props.regionType) {
        this.state.regionType = props.regionType;
      }
      if (props.provinceName) {
        this.state.provinceName = props.provinceName;
      }
      if (props.muniName) {
        this.state.muniName = props.muniName;
      }
      if (props.muniCode) {
        this.state.muniCode = props.muniCode;
      }
      if (props.iecId) {
        this.state.iecId = props.iecId;
      }

      this.exportAsPNG = this.exportAsPNG.bind(this);
      this.exportAsPNGUri = this.exportAsPNGUri.bind(this);
      this.handleRegionChange = this.handleRegionChange.bind(this);
      this.handlePreviewEvent = this.handlePreviewEvent.bind(this);
    }
  
    componentDidMount() {
      var self = this;
      this.draw(this.getContainer(), this.state);
      refreshIntervalID = setInterval(() => {
        self.draw(self.getContainer(), self.state)
      }, dataRefreshTime);
      document.addEventListener(events.EXPORT_PNG, this.exportAsPNG);
      document.addEventListener(events.REGION_CHANGE, this.handleRegionChange);
      document.addEventListener(events.CHART_PREVIEW, this.handlePreviewEvent);
    }

    componentDidUpdate() {
      this.draw(this.getContainer(), this.state)
    }

    componentWillUnmount() {
      chart = null;
      document.removeEventListener(events.EXPORT_PNG, this.exportAsPNG);
      document.removeEventListener(events.REGION_CHANGE, this.handleRegionChange);
      document.removeEventListener(events.CHART_PREVIEW, this.handlePreviewEvent);
      clearInterval(refreshIntervalID);
    }

    handleRegionChange(event) {
      var newState = event.detail;
      this.setState(newState)
    }

    exportAsPNGUri() {
      var self = this;
      return new Promise(function(resolve, reject) {
        svgToPng.svgAsPngUri(self.refs.vizcontainer.childNodes[0], {}, function(uri) {
          resolve(uri.split(',')[1]);
        });
      });
    }

    exportAsPNG(event) {
      svgToPng.saveSvgAsPng(this.refs.vizcontainer.childNodes[0], `turnout-barchart(${getRegionName(this.state)}).png`);
    }

    handlePreviewEvent(event) {
      var newState = event.detail;
      if (chart)
        chart.destroy();
      chart = new Chart(this.getContainer(), null, null, className, chartOptions);
      this.setState(newState)
    }

    getContainer() {
      return d3.select(this.refs.vizcontainer)
    }
      
    render () {
      return (
          <div className="barchart">
            <div className={className(config.CSS_PREFIX + "chart-title")}>{chartOptions.chartType} ({getRegionName(this.state)}): </div>
            <div 
              ref="vizcontainer" 
              className={className("chart-body")} 
              ></div>
          </div>
        )
    }

    draw(container, props) {
      var self = this;
      var turnoutDataLoader = getTurnoutDataForAllEvents(props);
      var dataLoaders = [turnoutDataLoader];

      Promise.all(dataLoaders).then(function(values){ 
        var turnoutData = values[0];
        self.drawGraph(container, props, turnoutData, 'rgb(157,51,55)');
      }).catch(error => console.error(error));
    }

    drawGraph(container, props, data, colorsData) {
        var chartData = parseTurnoutDataForAllEvents(data, props);
        if (!chart)
          chart = new Chart(container, null, null, className, chartOptions);
        
        chart.draw(chartData, colorsData);
    }
}

export default BarChart;