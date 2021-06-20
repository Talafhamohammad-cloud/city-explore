
import './App.css';
import axios from 'axios';
import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import FormSearch from './components/Form';
import AlertMess from './components/AlertMess';
import Map from './components/Map';
import CityData from './components/CityData'
import Weather from './components/Weather'

export class App extends Component {
  constructor(props){
    super(props);
    this.state={
      cityNme:'',
      cityDat:{},
      displayD: false,
      alert:false,
      error:'',
      weatherData:[]
     
    }
  }

  updateCityName = (e) =>{
    this.setState({
      cityNme:e.target.value,
    });
  }
  

  getCity=async(e)=>{
    e.preventDefault();
  try{
    const axiosRes = await axios.get(`https://us1.locationiq.com/v1/search.php?key=pk.47bfe57b7ed998830cb39cf684cd82cf&city=${this.state.cityNme}&format=json`);
  
    const myApiRes = await axios.get(`${process.env.REACT_APP_URL}/?lat=${this.state.lat}&lon=${this.state.lon}`)
    this.setState({
      cityDat:axiosRes.data[0],
      lat: axiosRes.data[0].lat,
      lon: axiosRes.data[0].lon,
      weatherData: myApiRes.data,
      displayD:true,
      alert:false,
      
    }); 
  }  catch(error){
      this.setState({
        error:error.message,
        alert:true,
       
      })
  }
   
  
  }

  render(){
    return (

    
      <div>{this.state.alert &&
        <AlertMess 
        error={this.state.error}
        />
      }
      <div>
      <FormSearch
          getCity={this.getCity}
          updateCityName={this.updateCityName}
          />

          {(this.state.displayD) && 
            <div>
              <Map
              cityDat={this.state.cityDat}
              />
              <CityData
              cityDat={this.state.cityDat}
              />
               <Weather
              weather={this.state.weatherData}
            />
            </div>
          }
            

      </div>
                   
        </div>
         
    );
  }
    
  
  
}

export default App;