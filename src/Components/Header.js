import React,{Component} from 'react';
import {Navbar,Nav} from 'react-bootstrap';
import {Link} from 'react-router-dom';

class Header extends Component{
    render(){
        return(
            <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="/"><h3>COVID - 19 Tracker</h3></Navbar.Brand>
            <Nav className="mr-auto">
              <Link className="nav-link" to="/india"><h4>India</h4></Link>
              <Link className="nav-link" to="/world"><h4>World</h4></Link>
            </Nav>
          </Navbar>
        );
    }
}

export default Header;