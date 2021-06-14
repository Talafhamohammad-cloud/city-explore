import React, { Component } from 'react'
import  Alert  from 'react-bootstrap/Alert'

export class AlertMsg extends Component {
    render() {
        return (
            <div>
                <Alert variant="danger">
                    This is a {this.props.error} alert—check it out!
                </Alert>
                
                
            </div>
        )
    }
}

export default AlertMsg 
