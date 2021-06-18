import React, { Component } from 'react'
import Form from 'react-bootstrap/Form';
import Button from "react-bootstrap/Button";

export class FormSearch extends Component {
    render() {
        return (
            <div style={{ display: 'grid', 'grid-template-columns': '6fr fr', 'grid-gap': '8em', padding: '2%' }}>
                 <Form onSubmit={this.props.getCity} style={{ border: '5px solid', padding: '3em' }}>
            <Form.Group>
            <Form.Label> City Name </Form.Label>
            <Form.Control onChange={this.props.updateCityName} type='test'></Form.Control>
            <br></br>
            <Button className="button" variant="outline-success" type="submit">
            Explore!
          </Button>
            </Form.Group>
            
          </Form>
            </div>
        )
    }
}

export default FormSearch