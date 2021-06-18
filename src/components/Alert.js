import React, { Component } from 'react'
import Alert from 'react-bootstrap/Alert'


export class AlertMess extends Component {
   
    render() {
        return (
            <div>
                <Alert variant='danger'>
                 This is a {this.props.error} alert-check it 
                 </Alert>
                
            </div>
        )
    }
}

export default AlertMess