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
                          weatherData.valid_date
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