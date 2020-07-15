import React,{Component} from 'react';
import {Navbar,Nav} from 'react-bootstrap';
import {Link} from 'react-router-dom';

class Header extends Component{
    render(){
        return(
            <Navbar responsive="true" bg="dark" variant="dark" fixed="top">
            <Navbar.Brand href="/">COVID - 19 Tracker</Navbar.Brand>
            <Nav className="mr-auto">
              <Link className="nav-link" to="%PUBLIC_URL%/india">India</Link>
              <Link className="nav-link" to="%PUBLIC_URL%/world">World</Link>
            </Nav>
          </Navbar>
        );
    }
}

export default Header;