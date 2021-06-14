import React, { Component } from 'react'
import Image from 'react-bootstrap/Image';

export class Map extends Component {
    render() {
        return (
            <div>
                <Image src={`https://maps.locationiq.com/v3/staticmap?key=pk.518eadd354211d5db70c1031073bc3e1&q&center=${this.props.CityData.lat},${this.props.CityData.lon}&zoom=15`} roundedCircle />
                {
                    this.state.weatherData.map(value => {
                        return (<p>
                            {value.weather.description}
                        </p>)
                        
                    })
                }
            </div>
        )
    }
}

export default Map
