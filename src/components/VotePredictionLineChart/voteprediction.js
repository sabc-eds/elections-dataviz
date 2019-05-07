import React, { Component } from "react";
import * as d3 from "d3";
import styles from "./voteprediction.css";
import {Chart} from "../VotePredictionLineChart/d3voteprediction";
import svgToPng from "save-svg-as-png";

import events from "../../events";
import config from "../../config";
import {
  getVotesPredictionData,
  getPartyColors
} from "../../api";
import {
  parseVotesPredictionData,
  getNationOrProvinceName,
  fetchDataFromOBJ,
  handleRegionChange
} from "../../utils";


var dataRefreshTime = 30 * 1000;
var chartOptions = {
  chartType: 'Votes prediction line charts',
};

function className(originName) {
  return styles[originName] || originName;
}

function cn(originName) {
  return className(config.CSS_PREFIX + originName);
}

var partyColorsData;

class VotePredictionLineChart extends Component {

    constructor(props) {
      super(props);
      this.state = {
        numParties: 100,
        eventDescription: "2019 National Election",
        regionType: "national",
        provinceName: "",
        muniName: "",
        muniCode: "",
        iecId: "",
        stylesheetFor: "web",
        componentID: 8
      }

      fetchDataFromOBJ(this.state, props);
      this.state["numParties"] = 100;

      this.chart = null;
      this.refreshIntervalID = 0;
      this.exportAsPNG = this.exportAsPNG.bind(this);
      this.exportAsPNGUri = this.exportAsPNGUri.bind(this);
      this.handleRegionChange = handleRegionChange.bind(this);
      this.handlePreviewEvent = this.handlePreviewEvent.bind(this);
    }
  
    componentDidMount() {
      var self = this;
      this.draw(this.getContainer(), this.state);
      this.refreshIntervalID = setInterval(() => {
        self.draw(self.getContainer(), self.state)
      }, dataRefreshTime);
      document.addEventListener(events.EXPORT_PNG, this.exportAsPNG);
      document.addEventListener(events.REGION_CHANGE, this.handleRegionChange);
      document.addEventListener(events.CHART_PREVIEW, this.handlePreviewEvent);
    }

    componentDidUpdate() {
        this.draw(this.getContainer(), this.state);
    }

    componentWillUnmount() {
      this.chart = null;
      document.removeEventListener(events.EXPORT_PNG, this.exportAsPNG);
      document.removeEventListener(events.REGION_CHANGE, this.handleRegionChange);
      document.removeEventListener(events.CHART_PREVIEW, this.handlePreviewEvent);
      clearInterval(this.refreshIntervalID);
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
      var targetState = event.detail;
      if (targetState.componentID != this.state.componentID)
        return;

      // TODO not sure what to change race-for-seats-horseshoe.... to
      svgToPng.saveSvgAsPng(this.refs.vizcontainer.childNodes[0], `race-for-seats-horseshoe-chart(${getNationOrProvinceName(this.state)}).png`);
    }

    handlePreviewEvent(event) {
      var newState = event.detail;
      if (this.chart)
        this.chart.destroy();
      this.chart = new Chart(this.getContainer(), null, null, className, chartOptions);
      this.setState(newState)
    }

    getContainer() {
      return d3.select(this.refs.vizcontainer)
    }
      
    render () {

      const {
        stylesheetFor,
        componentID
      } = this.state;

      var d = new Date();
      var hr = d.getHours();
      var min = d.getMinutes();
      if (min < 10) {
          min = "0" + min;
      }

      var date = d.getDate();
      var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
      var month = months[d.getMonth()];
      var year = d.getFullYear();

      var currentTimeText = hr + ":" + min + " on " + date + " " + month + " " + year;

      return (
          <div className={className("votepredictionlinechart") + " " + cn(`stylesheet-${stylesheetFor}`)}>
            {
                componentID != -1000 && <div className={cn("chart-title")}>{chartOptions.chartType} ({getNationOrProvinceName(this.state)}): </div>
            }
            <div className={cn("prediction-time")}> 
              Predictions at {currentTimeText}
            </div>
            <div 
              ref="vizcontainer" 
              className={cn("chart-body")} 
              ></div>
              <div className={cn("CSIR-bottom-label")}><b>CSIR's election prediction  model</b></div>
          </div>
        )
    }

    draw(container, props) {
      var self = this;
      var predictionDataLoader = getVotesPredictionData(props);
      var predictionDataLoader = null;
      var dataLoaders = [predictionDataLoader];

      if (!partyColorsData) {
        var partyColorsLoader = getPartyColors();
        dataLoaders.push(partyColorsLoader);
      }

      Promise.all(dataLoaders).then(function(values){ 
        var predictionData = values[0];
        partyColorsData = partyColorsData || values[1];         
        self.drawGraph(container, props, predictionData, partyColorsData);
      }).catch(error => console.error(error));
    }

    drawGraph(container, props, data, partyColorsData) {
        var chartData = parseVotesPredictionData(data, props);
        if (!this.chart)
          this.chart = new Chart(container, null, null, className, chartOptions);
        
        this.chart.draw(chartData, partyColorsData);
    }
}

export default VotePredictionLineChart;
