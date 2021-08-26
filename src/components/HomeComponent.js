import React from 'react';
import logo from './mainimage.jpeg'
import { Card, CardImg } from 'reactstrap';

function Home(props) {
    return(
      <div>
      <Card>
        <CardImg className="size" src={logo}></CardImg>
     </Card>
      <h4>About Us</h4>
      <p>As the trend for different functions are too far changed from that of old days and everyone have different innovative thoughts on setting a function or party. As the case is this, all functions and parties are held or celebrated with a venue booking component. The venue booking can give you and your team a single place to stay organized and track bookings, billings, and communications. The advantages of such a system itself give you a fresh approach to event planning, enjoying amenities, team collaboration, and participant engagement.</p>
    </div>
    );
}

export default Home; 