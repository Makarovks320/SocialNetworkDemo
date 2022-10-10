import React, { useState, useEffect } from 'react'
import {Navbar, Nav, NavDropdown, Form, Button} from 'react-bootstrap'
import reduxLogo from '../../img/redux-logo.svg'
import reactLogo from '../../img/react-logo.svg'
import bootstrapLogo from '../../img/bootstrap-logo.svg'

const Header = (props) => {
  let [currentTheme, setCurrentTheme] = useState("dark")
  let [currentVariant, setCurrentVariant] = useState("dark")

  const setDarkTheme = () => {
    props.setDarkTheme();
    setCurrentTheme("dark");
    setCurrentVariant("dark");
  } 
  const setLightTheme = () => {
    props.setLightTheme();
    setCurrentTheme("light");
    setCurrentVariant("light");
  } 
  const setBlueTheme = () => {
    props.setBlueTheme();
    setCurrentTheme("primary");
    setCurrentVariant("light");
  }
  useEffect(()=>{
    setCurrentTheme(currentTheme)
    setCurrentVariant(currentVariant)
  },[currentTheme, currentVariant])
  return (
    <Navbar bg={currentTheme} variant={currentVariant} expand="md" className="mb-3">
      <Navbar.Brand href="#home">React Developers Network</Navbar.Brand>
      <img alt="logo" src={reactLogo} style={{width: 50}} className="ml-1"></img>
      <img alt="logo" src={reduxLogo} style={{width: 50}} className="ml-1"></img>
      <img alt="logo" src={bootstrapLogo} style={{width: 50}} className="ml-1"></img>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <NavDropdown title="Theme" className="ml-5" id="basic-nav-dropdown">
            <NavDropdown.Item onClick={setLightTheme}>Light&nbsp;<i className="fas fa-palette"></i></NavDropdown.Item>
            <NavDropdown.Item onClick={setDarkTheme}>Dark&nbsp;<i className="fas fa-palette"></i></NavDropdown.Item>
            <NavDropdown.Item onClick={setBlueTheme}>Blue&nbsp;<i className="fas fa-palette"></i></NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Form inline>
        {props.isAuth ?
          <div>
          <span style={{color: "#fff"}}>{props.login} - </span> 
          <Button variant="success" onClick={props.logOut}>Log Out</Button>
          </div>:
          <Button variant="success" href={'/login'}>Log in</Button>}
        </Form>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default Header;