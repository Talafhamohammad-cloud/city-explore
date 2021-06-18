import React, { Component } from 'react'
import ListGroup from 'react-bootstrap/ListGroup'

export class Weather extends Component {
    render() {
        return (
          <>
          {
              this.props.weather.map(weather => {
                  return(
                      <>
                      <ListGroup>
                      {weather.weather.description}
                      </ListGroup>
                      <ListGroup>
                      {weather.datetime}

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