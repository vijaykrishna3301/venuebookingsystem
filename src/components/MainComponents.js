import React,{Component} from 'react';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import { Switch, Route, Redirect } from 'react-router-dom';
import Venues from './VenueComponent';
import Stores from './StoresComponent';
import Vendors from './VendorsComponent';

class Main extends Component{

  
  render(){
    const HomePage = () => {
      return(
        <Home />
      );
    }
    const VenuePage = () => {
      return(
        <Venues/>
      );
    }
    const StoresPage = () => {
      return(
        <Stores/>
      );
    }
    const VendorsPage = () => {
      return(
        <Vendors/>
      );
    }
    return (
      <div>
        <Header/>
        <Switch>
          <Route path='/home' component={HomePage} />
          <Route exact path='/venues' component={VenuePage} />
          <Route exact path='/vendors' component={VendorsPage} />
          <Route exact path='/stores' component={StoresPage} />
          <Redirect to="/home" />
        </Switch>
        
      </div>
    );
  }
}

export default Main;
