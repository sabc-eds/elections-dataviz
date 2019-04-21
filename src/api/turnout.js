import gql from "graphql-tag"
import {client} from "./config"



  export function getTurnoutData(options) {
    var eventDescription = options.eventDescription;
    if (!eventDescription)
      return;
    if (options.regionType == "national") {
      return client.query({
        query: gql`
        {
          allProvincialBallots(
            event_Description:"${eventDescription}"
          ){
            edges{
              node{
                percVoterTurnout
                location {
                  id
                  name
                }
              }
            }
          }
        }
        `
      })
    } else if (options.regionType == "province") {
      return client.query({
        query: gql`
        {
          allMunicipalBallots(
            event_Description:"${eventDescription}",
            location_Province_Name:"${options.provinceName}"
          ) {
            edges{
              node {
                percVoterTurnout
                location {
                  code
                  name
                  longName
                }
              }
            }
          }
        }
        `
      })
    } else { // municipality or municipality-vd
        return client.query({
          query: gql`
          {
            allVotingDistrictBallots( 
            event_Description:"${eventDescription}",
            location_Ward_Municipality_Code:"${options.muniCode}") {
              edges{
                node{
                  location {
                    iecId
                  }
                  percVoterTurnout
                }
              }
            }
          }
          `
        })
    }
  }
  
  export function getTurnoutDataForOneEvent(options) {
    var eventDescription = options.eventDescription;
    if (!eventDescription)
      return;

    if (options.regionType == "national") {
      return client.query({
        query: gql`
        {
          allBallots(
            event_Description:"${eventDescription}"
          ) {
            edges{
              node{
                event {
                  description
                  eventType {
                    description
                  }
                }
                percVoterTurnout
              }
            }
          }
        }
        `
      })
    } else if (options.regionType == "province") {
      return client.query({
        query: gql`
        {
          allProvincialBallots(
            event_Description:"${eventDescription}"
            location_Name:"${options.provinceName}"
          ) {
            edges{
              node {
                event {
                  description
                  eventType {
                    description
                  }
                }
                percVoterTurnout
              }
            }
          }
        }
        `
      })
    } else if (options.regionType == "municipality") {
        var muniCode = options.muniCode || options.muniName.split(" - ")[0];

        return client.query({
          query: gql`
          {
            allMunicipalBallots( 
              event_Description:"${eventDescription}"
              location_Province_Name:"${options.provinceName}", 
              location_Code: "${muniCode}"
            ) {
              edges{
                node{
                  event {
                    description
                    eventType {
                      description
                    }
                  }
                  percVoterTurnout
                }
              }
            }
          }
          `
        })
    } else if (options.regionType == "municipality-vd") {
        return client.query({
          query: gql`
          {
            allVotingDistrictBallots(
              event_Description:"${eventDescription}"
              location_IecId:"${options.iecId}"
            ) {
              edges{
                node{
                  event {
                    description
                    eventType {
                      description
                    }
                  }
                  percVoterTurnout
                }
              }
            }
          }
          `
        })
      }
  }

  export function getTurnoutDataForAllEvents(options) {
    if (options.regionType == "national") {
      return client.query({
        query: gql`
        {
          allBallots{
            edges{
              node{
                event {
                  description
                  eventType {
                    description
                  }
                }
                percVoterTurnout
              }
            }
          }
        }
        `
      })
    } else if (options.regionType == "province") {
      return client.query({
        query: gql`
        {
          allProvincialBallots(
            location_Name:"${options.provinceName}"
          ) {
            edges{
              node {
                event {
                  description
                  eventType {
                    description
                  }
                }
                percVoterTurnout
              }
            }
          }
        }
        `
      })
    } else if (options.regionType == "municipality") {
        var muniCode = options.muniCode || options.muniName.split(" - ")[0];

        return client.query({
          query: gql`
          {
            allMunicipalBallots( 
                location_Province_Name:"${options.provinceName}", 
                location_Code: "${muniCode}"
            ) {
              edges{
                node{
                  event {
                    description
                    eventType {
                      description
                    }
                  }
                  percVoterTurnout
                }
              }
            }
          }
          `
        })
    } else if (options.regionType == "municipality-vd") {
        return client.query({
          query: gql`
          {
            allVotingDistrictBallots(
                location_IecId:"${options.iecId}", 
                location_Ward_Municipality_Code:"${options.muniCode}"
            ) {
              edges{
                node{
                  event {
                    description
                    eventType {
                      description
                    }
                  }
                  percVoterTurnout
                }
              }
            }
          }
          `
        })
      }
  }