import React, { Component } from 'react';
import { Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem, Jumbotron,
  Button, Modal, ModalHeader, ModalBody,
  Form, FormGroup, Input, Label, NavbarText} from 'reactstrap';
  import { NavLink } from 'react-router-dom';
class Header extends Component {
  constructor(props) {
      super(props);
      this.toggleModal = this.toggleModal.bind(this);
      this.toggleNav = this.toggleNav.bind(this);
      this.state = {
        isNavOpen: false,
        isModalOpen: false
      };
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

  render() {
      return(
          <React.Fragment>
              <Navbar dark expand="md">
                  <div className="container">
                      <NavbarToggler onClick={this.toggleNav} />
                      <NavbarBrand  className="color" href="/">WeneW Locale</NavbarBrand>
                      <Collapse isOpen={this.state.isNavOpen} navbar>
                          <Nav className="mr-auto" navbar>
                          <NavItem >
                                <NavLink className="nav-link" to='/home'>Home</NavLink>
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
                          <Nav navbar>
                                <NavItem className="justify-content-end">
                                    <Button outline onClick={this.toggleModal}><span className="fa fa-sign-in fa-lg"></span> Login</Button>
                                </NavItem>
                          </Nav>
                          
                      </Collapse>
                  </div>
              </Navbar>
              <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                <ModalHeader toggle={this.toggleModal}>Login</ModalHeader>
                  <ModalBody>
                  <Form onSubmit={this.handleLogin}>
                            <FormGroup>
                                <Label htmlFor="username">Username</Label>
                                <Input type="text" id="username" name="username"
                                    innerRef={(input) => this.username = input} />
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="password">Password</Label>
                                <Input type="password" id="password" name="password"
                                    innerRef={(input) => this.password = input}  />
                            </FormGroup>
                            <FormGroup check>
                                <Label check>
                                    <Input type="checkbox" name="remember"
                                    innerRef={(input) => this.remember = input}  />
                                    Remember me
                                </Label>
                            </FormGroup>
                            <Button type="submit" value="submit" color="primary">Login</Button>
                        </Form>
                  </ModalBody>
              </Modal>
            </React.Fragment>
      );
  }
}

export default Header;