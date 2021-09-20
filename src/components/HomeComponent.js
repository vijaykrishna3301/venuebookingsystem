import React from 'react';
import { Button, Container, Form, Input } from 'reactstrap';
import Header from './HeaderComponent';

function Home(props) {
    return(
      <div>
      <div className="sampleimage">
        <Header navbg={"linear-gradient(rgba(0, 0, 0, 0.0),rgba(0, 0, 0, 0.0))"} />
        <div className="row wrapper">
          <div className="col-sm-1 col-md-2 "> </div>
          <div className="col-sm-10 col-md-8 ">
          <h1 >Find a <span></span></h1>
          <p> All in one platform fgasedefgakdfmnwedksf n jafsengfuahkef erkcfngkehrfmcakwefjw  uiaerhianuweiyhrauwmerf,owjf
             nicoarcwimriwe wuerhokwce,rjfaweifj </p>
          <Form className="col-md-6 p-0 m-0">
              <div className="d-flex justify-content-center">
                  <Input type="search" placeholder="Search City..." className="form-control w-100"/>
                    <Button
                      type="submit"
                       >SEARCH
                    </Button>
                 </div>
          </Form>
          </div>
          <div className="col-sm-1 col-md-2"></div>
        </div>
      </div>
     
      <Container className="whitebg mt-5 mb-5 p-3">
        <br/>
        <h4>About Us</h4>
        <p>As the trend for different functions are too far changed from that of old days and everyone have different innovative thoughts on setting a function or party. As the case is this, all functions and parties are held or celebrated with a venue booking component. The venue booking can give you and your team a single place to stay organized and track bookings, billings, and communications. The advantages of such a system itself give you a fresh approach to event planning, enjoying amenities, team collaboration, and participant engagement.</p>
      </Container>
    </div>
    );
}

export default Home; 