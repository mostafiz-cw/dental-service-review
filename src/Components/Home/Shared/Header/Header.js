import React, { useContext } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../../Context/AuthProvider/AuthProvider";

const Header = () => {
  const { user,logOut } = useContext(AuthContext);

  // event signout 
  const handleLogOut = () => {
    logOut()
    .then(()=> {})
    .catch(err => console.error(err))
  }

  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Container>
          <Link to="/" className="no-underline font-semibold">
            <Navbar.Brand href="#home">Soothing Dental</Navbar.Brand>
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Link to="/" className="no-underline font-semibold">
                <Nav.Link href="#home" className="text-dark">
                  Home
                </Nav.Link>
              </Link>
              <Link to="/service" className="no-underline font-semibold">
                <Nav.Link href="#home" className="text-dark">
                  Service
                </Nav.Link>
              </Link>
              <Link to="/blog" className="no-underline font-semibold">
                <Nav.Link href="#home" className="text-dark">
                  Blog
                </Nav.Link>
              </Link>
              {user?.uid ? (
                <>
                  <Link to="/addservice" className="no-underline font-semibold">
                    <Nav.Link href="#home" className="text-dark">
                      Add Service
                    </Nav.Link>
                  </Link>
                  <Link to="/myreview" className="no-underline font-semibold">
                    <Nav.Link href="#home" className="text-dark">
                      My Review
                    </Nav.Link>
                  </Link>
                  <Link onClick={handleLogOut} to="/" className="no-underline font-semibold">
                    <Nav.Link href="#home" className="text-dark">
                      Log Out
                    </Nav.Link>
                  </Link>
                </>
              ) : (
                <>
                  <Link to="/login" className="no-underline font-semibold">
                    <Nav.Link href="#home" className="text-dark">
                      Log In
                    </Nav.Link>
                  </Link>
                  <Link to="/signup">
                    <button className=" hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border-2 border-blue-500 hover:border-transparent rounded">
                      Sign Up
                    </button>
                  </Link>
                </>
              )}

              {/* {user?.email && <p>{user.email}</p>} */}

              {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown> */}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
