import axios from 'axios';
import React, { Component } from 'react';
import {Card,CardBody,CardImg} from 'react-bootstrap';
import Header from '../HeaderComponent';

export default class VenueDetails extends Component{
  constructor(props){
    super(props);
    this.state={
        venue:''
    }
  }
  componentDidMount(){
    console.log('vk '+this.props.location.state.id);
    this.findVenue(this.props.location.state.id);
  }
  findVenue(id){
    const url = `http://localhost:8080/venue/getvenue/${id}`;
    axios.get(url)
    .then((response)=>{
        this.setState({venue:response.data});
    })
    /* this.setState({stores:stores}) */

  }  
  render(){
    const {venue} = this.state;
        
            return (
            <div>
                <Header navbg={"linear-gradient(rgba(0, 0, 0, 0.6),rgba(0, 0, 0, 0.6))"} />
                <div className="container" style={{marginTop:'5rem', marginBottom:'3rem'}}>
                    <Card className="p-2">
                          <Card.Body>
                          <CardImg width="100%" height="400px"  src={venue.image} alt={venue.name} />
                          </Card.Body>
                    </Card>
                    <div style={{color:'white'}}>
                      <h3>{venue.name} </h3>
                      <p><span className="fa fa-map-marker"></span> {venue.location}, {venue.city}</p>
                      <div className="row">
                          <p className="col-md-4"><i class="fa fa-star"></i>Ratings {venue.rating}</p>
                          <p className="col-md-4 ml-auto"><i class="fa fa-users"></i>{venue.capacitymin}-{venue.capacitymax} Guests</p>
                      </div>
                      <h4>Occations </h4>
                      <p>{venue.occations}</p>
                      <p>{venue.description}</p>
                    </div>
                </div>
            </div>
            );
        
  }
}
