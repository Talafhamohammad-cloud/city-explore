
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
import Weather from "./components/Weather";

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cityName: '',
      cityData: {},
      show: false,
      alert: false,
      error: '',
      lat:'',
      lon:'',
      weatherData:[]
    }
  }
  updateCityName = (e) => {
    this.setState({
      cityName: e.target.value,
    })
  }
  getData = async (e) => {
    e.preventDefault();
      await axios.get(`https://us1.locationiq.com/v1/search.php?key=pk.47bfe57b7ed998830cb39cf684cd82cf&q=${this.state.cityName}&format=json`).then(myApiRes=>{
        this.setState({
          CityData:myApiRes.data[0],
          lat:myApiRes.data[0].lat,
          lon:myApiRes.data[0].lon
      });
      axios.get(`http://localhost:8080/weather?lon=${this.state.lon}&lat=${this.state.lat}`).then(weatherRes =>{
        this.setState({
          weatherData: weatherRes.data,
          show: true,
          alert: false,

        })
      });
    });
        

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

                  <Weather weather={this.state.weatherData}
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