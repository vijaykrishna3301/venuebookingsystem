import React, { Component } from 'react'
import AddVenue from './add/AddVenue'
import Header from '../HeaderComponent';
import AddStore from './add/AddStore';
import AddVendor from './add/AddVendor';

export default class Register extends Component {
  render() {
    return (
      <div style={{marginTop:'5rem'}}>
        <Header navbg={"linear-gradient(rgba(0, 0, 0, 0.6),rgba(0, 0, 0, 0.6))"} />
        <AddVenue />
        <AddStore/>
        <AddVendor/>
      </div>
    )
  }
}
