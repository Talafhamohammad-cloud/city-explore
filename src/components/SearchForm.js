import React, { Component } from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export class SearchForm extends Component {
    render() {
        return (
            <div>
                <Form onSubmit={this.props.getData}>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>City Explorer</Form.Label>
                        <Form.Control type="text" placeholder="Enter City name" onChange={this.props.updateCityName} />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Explore!
                    </Button>
                </Form>
                
            </div>
        )
    }
}

export default SearchForm