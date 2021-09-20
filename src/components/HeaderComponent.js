import React, { Component } from 'react';
import { Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem,Modal, ModalHeader, ModalBody} from 'reactstrap';
import { NavLink } from 'react-router-dom';
import wpic from './wpic.jpeg';
import logo from './logo.jpg'
import navimage from './navimg.jpeg'
import Login from './user/Login';
import { logoutUser } from './user/auth/userActions';
import { connect } from 'react-redux'
  
class Header extends Component {
  constructor(props) {
      super(props);
      this.toggleModal = this.toggleModal.bind(this);
      this.toggleNav = this.toggleNav.bind(this);
      this.state = {
        navBackground:this.props.navbg,
        isNavOpen: false,
        isModalOpen: false
      };
    }
    //`url(${navimage})`
    componentDidMount() {
      document.addEventListener("scroll", () => {
        const backgroundcolor = window.scrollY < 200 ? this.props.navbg :'linear-gradient(rgba(0, 0, 0,1.0),rgba(0, 0, 0, 1.0))' ;
        this.setState({ navBackground: backgroundcolor });
      });
    }
    toggleModal() {
      this.setState({
        isModalOpen: !this.state.isModalOpen
      });
    }
    toggleNav() {
      this.setState({
        isNavOpen: !this.state.isNavOpen
      });
    }
    logout=() => {
      this.props.logoutUser();
    }
  render() {
    const guestLinks=(<>
      <NavItem>
        <NavLink className="nav-link" to='register'><i class="fa fa-user-plus"></i> Register</NavLink>
      </NavItem>
      <NavItem>
        <NavLink className="nav-link" to='login'><i class="fa fa-sign-in" aria-hidden="true"></i> Login</NavLink>
      </NavItem>
    </>);
    const userLinks=(
      <>
      
      <NavItem>
        <NavLink className="nav-link" to='logout' onClick={this.logout}> Logout</NavLink>
      </NavItem>
    </>
    );
      return(
          <React.Fragment>
              <Navbar dark expand="md" className="fixed-top" style={{backgroundImage:this.state.navBackground}}>
                  <div className="container">
                      <NavbarToggler onClick={this.toggleNav} />
                      <NavbarBrand  className="color" href="/">Wenew Locale</NavbarBrand>
                      <Collapse isOpen={this.state.isNavOpen} navbar style={{justifyContent:'space-between'}}>
                          <Nav className="mr-auto" navbar>
                          <NavItem >
                                <NavLink className="nav-link" to='/home'> Home</NavLink>
                            </NavItem>
                            <NavItem >
                                <NavLink className="nav-link" to='/venues'>Venues</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to='/vendors'> Vendors</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to='/stores'> Stores</NavLink>
                            </NavItem>
                          </Nav>
                          <Nav navbar className="justify-content-end">
                              {this.props.auth.isLoggedIn?userLinks:guestLinks}     
                          </Nav>   
                      </Collapse>
                  </div>
              </Navbar>
              <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                <ModalHeader toggle={this.toggleModal}>Login</ModalHeader>
                  <ModalBody>
                  <Login />
                  </ModalBody>
              </Modal>
            </React.Fragment>
      );
  }
}

const mapStateToProps= state =>{
  return {
      auth:state.auth
  }
};
const mapDispatchToProps = dispatch =>{
  return {
      logoutUser: () => dispatch(logoutUser())
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Header);
