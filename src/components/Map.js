import React, { Component } from 'react'
import Image from 'react-bootstrap/Image'
export class Map extends Component {
    render() {
        return (
            <div>
             < Image src = {`https://maps.locationiq.com/v3/staticmap?key=pk.47bfe57b7ed998830cb39cf684cd82cf&q&center=${this.props.cityDat.lat},${this.props.cityDat.lon}&zoom=20`} roundedCircle/>
            
            </div>
        )
    }
}

export default Map
