import React, { Component } from 'react'
import ListGroup from 'react-bootstrap/ListGroup'

class Weather extends Component {
    render() {
        const weatherData = [];
        return(
        <>
        
                      <ListGroup>
                      {weatherData.description}
                      </ListGroup>
                      <ListGroup>
                      {weatherData.date}
                      </ListGroup>
                      </>

        )}

        }
export default Weather
