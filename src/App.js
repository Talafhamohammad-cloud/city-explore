
import './App.css';
import axios from 'axios';
import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import FormSearch from './components/Form';
import AlertMess from './components/AlertMess';
import Map from './components/Map';
import CityData from './components/CityData'
import Weather from './components/Weather'
import Movie from './components/Movie';

export class App extends Component {
  constructor(props) {
    super(props);
    this.state={
      cityNme:'',
      cityDat:{},
      displayD: false,
      lat:'',
      lon:'',
      alert:false,
      error:'',
      weatherData:'',
      movieData:''
     
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
    await axios.get(`https://us1.locationiq.com/v1/search.php?key=pk.47bfe57b7ed998830cb39cf684cd82cf&
    city=${this.state.cityNme}&format=json`).then(locatioIqRes=>{

      this.setState({
        cityDat:locatioIqRes.data[0],
        lat:locatioIqRes.data[0].lat,
        lon:locatioIqRes.data[0].lon,
      })
      axios.get(`${process.env.REACT_APP_URL}/weather?lat=${this.state.lat}&lon=${this.state.lon}`).then(weatherReponse => {
        this.setState({
          weatherData: weatherReponse.data,
          alert:false
        });
        axios.get(`${process.env.REACT_APP_URL}/movies?qurey=${this.state.cityNme}`).then(movieRes=>{
         console.log('movieRes', movieRes);
          this.setState({

            movieData:movieRes.data,
             displayD:true
          })
        })

      })
     
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

    
      <div style={{margin : 'auto',background:'lightgrey'}}>
        {this.state.alert &&
        <AlertMess 
        error={this.state.error}
        />
      }
      <div>
      <FormSearch
          getCity={this.getCity}
          updateCityName={this.updateCityName}
          gitMovie={this.gitMovie}
          />
           
          {(this.state.displayD) && 
            <div style={{}}>
              <Map
              cityDat={this.state.cityDat}
              />
              <CityData
              cityDat={this.state.cityDat}
              />
              <div>
              <Weather 
            weather={this.state.weatherData}
            />
              </div>
               
           <Movie

              movieData={this.state.movieData}
           />
            </div>
          }
            
      </div>
                   
        </div>
         
    );
  }
    
  
  
}

export default App;