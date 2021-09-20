import React, { Component } from "react";
import { Card, Form,Button,Row,Col} from 'react-bootstrap';
import axios from 'axios';

export default class AddVenue extends Component{
    constructor(props){
        super(props);
        this.state= this.initialState;
        this.addVenue = this.addVenue.bind(this);
        this.venueChange = this.venueChange.bind(this);
    }
    initialState={
        name:'',imageUrl:'',street:'',location:'',city:'',state:'',landmark:'',minCapacity:'',maxCapacity:'',occation:'',discription:''
    }
    resetForm = () =>{
        this.setState(()=>this.initialState);
    }
    addVenue = (event) => {
        
        event.preventDefault();
        const venue = {
            name:this.state.name,
            image:this.state.imageUrl,
            street:this.state.street,
            location:this.state.location,
            city:this.state.city,
            state:this.state.state,
            landmark:this.state.landmark,
            capacitymin:this.state.minCapacity,
            capacitymax:this.state.maxCapacity,
            occations:this.state.occation,
            rating:'0',
            description:this.state.discription
        };
        console.log(venue);
        const url = 'http://localhost:8080/venue/addvenue';
        axios.post(url,venue)
            .then(Response =>{
                if(Response.data != null){
                    this.setState(this.initialState);
                    alert("Venue Added Successfully");
                }
            });
        

    }
    venueChange = (event) => {
        this.setState({
            [event.target.name]:event.target.value
        });
        
    }

    render(){
        const {name,imageUrl,street,location,city,state,landmark,minCapacity,maxCapacity,occation,discription} = this.state;
        return(
            <div className="container">
                <Card className="border ">
                    <Card.Header>Add Venue</Card.Header>
                    <Form onReset={this.resetForm} onSubmit={this.addVenue}  id="addVenueForm">
                        <Card.Body>
                            <Row className="mb-3">
                                <Form.Group as={Col} controlId="venuename">
                                    <Form.Label>Name</Form.Label>
                                    <Form.Control required autoComplete="off"
                                        type="text" name="name"
                                        value={name}
                                        onChange={this.venueChange}
                                        placeholder="Enter Name"
                                        />
                                </Form.Group>
                                <Form.Group as={Col} controlId="venueImageUrl">
                                <Form.Label>Image Url</Form.Label>
                                <Form.Control required autoComplete="off"
                                    type="text" name="imageUrl"
                                    value={imageUrl}
                                    onChange={this.venueChange}
                                    placeholder="Enter URL"
                                    />
                                </Form.Group>
                            </Row>
                            <Row className="mb-3">
                                <Form.Group as={Col} controlId="venuestreet">
                                <Form.Label>Address</Form.Label>
                                <Form.Control required autoComplete="off"
                                    type="text" name="street"
                                    value={street}
                                    onChange={this.venueChange}
                                    placeholder="Enter Street"
                                    />
                                </Form.Group>
                                <Form.Group as={Col} controlId="venueLocation">
                                <Form.Label>Area</Form.Label>
                                <Form.Control required autoComplete="off"
                                    type="text" name="location"
                                    value={location}
                                    onChange={this.venueChange}
                                    placeholder="Enter Location"
                                    />
                                </Form.Group>
                                <Form.Group as={Col} controlId="venueCity">
                                <Form.Label>City</Form.Label>
                                <Form.Control required autoComplete="off"
                                    type="text" name="city"
                                    value={city}
                                    onChange={this.venueChange}
                                    placeholder="Enter City"
                                    />
                                </Form.Group>
                            </Row>
                            <Row className="mb-3">
                                <Form.Group as={Col} controlId="venueState">
                                <Form.Label>State</Form.Label>
                                <Form.Control required autoComplete="off"
                                    type="text" name="state"
                                    value={state}
                                    onChange={this.venueChange}
                                    placeholder="Enter State"
                                    />
                                </Form.Group>
                                <Form.Group as={Col} controlId="venueLandMark">
                                <Form.Label>LandMark</Form.Label>
                                <Form.Control autoComplete="off"
                                    type="text" name="landmark"
                                    value={landmark}
                                    onChange={this.venueChange}
                                    placeholder="Enter LandMark"
                                    />
                                </Form.Group>
                            </Row>
                            <Row className="mb-3">
                                <Form.Group as={Col} controlId="venueMinCapacity">
                                <Form.Label>Minimum Capacity</Form.Label>
                                <Form.Control required autoComplete="off"
                                    type="text" name="minCapacity"
                                    value={minCapacity}
                                    onChange={this.venueChange}
                                    placeholder="Enter Minimum Capacity"
                                    />
                                </Form.Group>
                                <Form.Group as={Col} controlId="venueMaxCapacity">
                                <Form.Label>Maximum Capacity</Form.Label>
                                <Form.Control required autoComplete="off"
                                    type="text" name="maxCapacity"
                                    value={maxCapacity}
                                    onChange={this.venueChange}
                                    placeholder="Enter Maximum Capacity"
                                    />
                                </Form.Group>
                                <Form.Group as={Col} controlId="venueoccation">
                                <Form.Label>Occasion</Form.Label>
                                <Form.Control required autoComplete="off"
                                    type="text" name="occation"
                                    value={occation}
                                    onChange={this.venueChange}
                                    placeholder="Enter Occasion"
                                    />
                                </Form.Group>
                            </Row>
                            <Row className="mb-3">
                                <Form.Group as={Col} controlId="venueDiscription">
                                <Form.Label>Short Description</Form.Label>
                                <Form.Control required autoComplete="off"
                                    type="text" name="discription"
                                    value={discription}
                                    onChange={this.venueChange}
                                    placeholder="Enter Description"
                                    />
                                </Form.Group>                
                            </Row>
                        </Card.Body>
                        <Card.Footer style={{"textAlign":"right"}}>
                            <Button size="md" type="submit" variant="success">
                                Submit
                            </Button>{' '}
                            <Button size="md" type="reset" variant="info">
                                Reset
                            </Button>
                        </Card.Footer>
                    </Form>
                </Card>
            </div>
        )
    }
    
}