import React, { Component } from 'react'
import ListGroup from 'react-bootstrap/ListGroup'

export class Weather extends Component {
    render() {
        return (
          <>
          {
              this.props.weather.map(weatherData => {
                  return(
                      <>
                      <ListGroup>
                      {
                          weatherData.weather.description
                      }
                      </ListGroup>
                      <ListGroup>
                      {
                          weatherData.datetime
                      }

                      </ListGroup>
                      </>
                  )
              })
          }
          </>
        )
    }
}

export default Weather