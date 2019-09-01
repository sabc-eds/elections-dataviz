import React, { Component } from "react";
import * as d3 from "d3";
import styles from "../BarChart/barchart.css";
import {Chart} from "../BarChart/d3barchart";
import svgToPng from "save-svg-as-png";

import events from "../../events";
import config from "../../config";
import {
  getPartyColors,
  getSeatsDataForComparison
} from "../../api";
import {
  parseSeatsComparisonData,
  getNationOrProvinceName,
  fetchDataFromOBJ,
  handleRegionChange
} from "../../utils";


var dataRefreshTime = 30 * 1000;
var chartOptions = {
  chartType: 'Race For Seats Comparison',
  yAxisLabel: 'Seats Count',
  dynamicYAxisFromValues: true,
  yValue: function(d) {
    return d.seats;
  },
  yValueFormat: function(seats) {
    return seats;
  },
  showLegend: true
};

function className(originName) {
  return styles[originName] || originName;
}

function cn(originName) {
  return className(config.CSS_PREFIX + originName);
}

var partyColorsData;

class BarChart extends Component {

    constructor(props) {
      super(props);
      this.state = {
        partyAbbr: "ANC",
        partyIecId: null,
        eventDescriptions: [
            "National Elections 1999",
            "Provincial Elections 1999",
            "14 Apr 2004 National Election",
            "14 Apr 2004 Provincial Election",
            "22 Apr 2009 National Election",
            "22 Apr 2009 Provincial Election",
            "2014 National Election",
            "2014 Provincial Election",
            "2019 NATIONAL ELECTION",
            "2019 PROVINCIAL ELECTION",

        ],
        regionType: "national",
        provinceName: "",
        muniName: "",
        muniCode: "",
        iecId: "",
        stylesheetFor: "web",
        componentID: 7
      }
      fetchDataFromOBJ(this.state, props);

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
      fetchDataFromOBJ(this.state, this.props);
      this.draw(this.getContainer(), this.state)
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
      svgToPng.saveSvgAsPng(this.refs.vizcontainer.childNodes[0], `race-for-seats-comparison-barchart(${getNationOrProvinceName(this.state)}).png`);
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
      
      return (
          <div className={cn("barchart") + " " + cn(`stylesheet-${stylesheetFor}`)}>
            {
                componentID != -1000 && <div className={cn("chart-title")}>{chartOptions.chartType} ({getNationOrProvinceName(this.state)}): </div>
            }
            <div 
              ref="vizcontainer" 
              className={cn("chart-body")} 
              ></div>
          </div>
        )
    }

    draw(container, props) {
      var self = this;
      var seatsDataLoader = getSeatsDataForComparison(props);
      var dataLoaders = [seatsDataLoader];

      if (!partyColorsData) {
        var partyColorsLoader = getPartyColors();
        dataLoaders.push(partyColorsLoader);
      }

      Promise.all(dataLoaders).then(function(values){ 
        var seatsData = values[0];
        partyColorsData = partyColorsData || values[1];         
        self.drawGraph(container, props, seatsData, partyColorsData);
      }).catch(error => console.error(error));
    }

    drawGraph(container, props, data, partyColorsData) {
        var chartData = parseSeatsComparisonData(data, props);
        if (!this.chart)
          this.chart = new Chart(container, null, null, className, chartOptions);
        
        this.chart.draw(chartData, partyColorsData);
    }
}

export default BarChart;
