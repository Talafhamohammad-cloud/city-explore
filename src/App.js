
import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import AlertMsg from "./components/AlertMsg";
import SearchForm from './components/SearchForm';
import Map from './components/Map';
import CityData from './components/CityData';

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cityName: '',
      cityData: {},
      weatherData:[],
      show: false,
      alert: false,
      error: ''
    }
  }
  updateCityName = (e) => {
    this.setState({
      cityName: e.target.value,
    })
  }
  getData = async (e) => {
    e.preventDefault();
    try {
      const myApiRes = await axios.get(`${process.env.REACT_APP_URL}/weather-data`);
      const res = await axios.get(`https://us1.locationiq.com/v1/search.php?key=pk.518eadd354211d5db70c1031073bc3e1&q=${this.state.cityName}&format=json`);
      console.log(res.data[0]);
      this.setState({
        CityData: res.data[0],
        weatherData: myApiRes.data.data,
        show: true,
        alert: false
      })
    } catch (error) {
      this.setState({
        error: error.message,
        alert: true
      })
    }

  }
  render() {
    return (
      <div style={{ textAlign: 'center' }}>
        {this.state.alert &&
          <AlertMsg
            error={this.state.error}
          />
        }
        <Container>

          <Row>

            <Col>
              <SearchForm
                getData={this.getData}
                updateCityName={this.updateCityName}
              />
              {(this.state.show) &&
                <>

                  <Map
                    CityData={this.state.CityData}

                  />

                  <CityData
                    CityData={this.state.CityData}
                  />



                </>
              }
            </Col>


          </Row>
        </Container>


      </div>
    )
  }
}

export default App