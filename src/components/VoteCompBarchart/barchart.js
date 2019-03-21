import React, { Component } from "react";
import * as d3 from "d3";
import styles from "../BarChart/barchart.css";
import {Chart} from "../BarChart/d3barchart";
import svgToPng from "save-svg-as-png";

import events from "../../events";
import config from "../../config";
import {
  getVotesDataForComparison,
  getPartyColors,
  getProvincesData
} from "../../api";
import {
  parseVotesComparisonData,
  getRegionName
} from "../../utils";

var provincesData = getProvincesData();

var dataRefreshTime = 30 * 1000;

function className(originName) {
  return styles[originName] || originName;
}

var chart;
var partyColorsData;
var refreshIntervalID = 0;

var chartOptions = {
  chartType: "Race For Votes Comparison",
  yAxisLabel: "PERCENTAGE VOTES",
  yValue: d => d.percOfVotes,
  yValueFormat: value => value + '%'
}

class BarChart extends Component {

    constructor(props) {
      super(props);
      this.state = {
        partyAbbr: "ANC",
        eventDescriptions: [
            "National Elections 1999",
            // "Provincial Elections 1999",
            "14 Apr 2004 National Election",
            // "14 Apr 2004 Provincial Election",
            "22 Apr 2009 National Election",
            // "22 Apr 2009 Provincial Election",
            "2014 National Election",
            // "2014 Provincial Election",
            "2019 NATIONAL ELECTION",
            // "2019 PROVINCIAL ELECTION",
        ],
        regionType: "national",
        provinceName: "",
        muniName: "",
        muniCode: "",
        iecId: ""
      }
      if (props.partyAbbr) {
        this.state.partyAbbr = props.partyAbbr;
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
      if (chart) {
        chart.destroy();
        chart = null;
      }
      document.removeEventListener(events.EXPORT_PNG, this.exportAsPNG);
      document.removeEventListener(events.REGION_CHANGE, this.handleRegionChange);
      document.removeEventListener(events.CHART_PREVIEW, this.handlePreviewEvent);
      clearInterval(refreshIntervalID);
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
      svgToPng.saveSvgAsPng(this.refs.vizcontainer.childNodes[0], `race-for-votes-comparation-barchart(${getRegionName(this.state)}).png`);
    }

    handleRegionChange(event) {
      var newState = event.detail;
      this.setState(newState)
    }

    handlePreviewEvent(event) {
      var newState = event.detail;
      if (chart)
        chart.destroy();
      chart = new Chart(this.getContainer(), null, null, className);
      this.setState(newState)
    }

    getContainer() {
      return d3.select(this.refs.vizcontainer)
    }
      
    render () {
      return (
          <div className={className("barchart")}>
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
      var votesDataLoader = getVotesDataForComparison(props);
      var dataLoaders = [votesDataLoader];

      if (!partyColorsData) {
        var partyColorsLoader = getPartyColors();
        dataLoaders.push(partyColorsLoader);
      }

      Promise.all(dataLoaders).then(function(values){ 
        var votesData = values[0];
        partyColorsData = partyColorsData || values[1];          
        self.drawGraph(container, props, votesData, partyColorsData);
      }).catch(error => console.error(error));
    }

    drawGraph(container, props, data, partyColorsData) {
        var chartData = parseVotesComparisonData(data, props);

        if (!chart)
          chart = new Chart(container, null, null, className);
        chart.draw(chartData, partyColorsData);
    }
}

export default BarChart;