import React, { Component } from 'react'

export class CityData extends Component {
    render() {
        return (
            <div>
                <p>`The City Name is :{this.props.CityData.display_name}`</p>
                <p>`The lat : {this.props.CityData.lat}`</p>
                <p>`The lon : {this.props.CityData.lon}`</p>
                
            </div>
        )
    }
}

export default CityData