import React from "react";
import {NavLink} from "react-router-dom";
import Signin from "./Signedinlink";
import Signout from "./Signedoutlink";
import { connect } from 'react-redux';
import {Navbar,Nav} from "react-bootstrap";
function ReactNavbar(props){
  const { auth,profiles } = props;
 const link=auth.uid?<Signin profile={profiles}/>:<Signout/>;
return (<>
<Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
  <NavLink  className="navbar-brand brandname" to="/home"><p className="whitesimpletxt">Jawad Raza</p></NavLink>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
    {link}
    </Nav>
  </Navbar.Collapse>
</Navbar>
</>);
}
const mapStateToProps = (state) => {
  return{
    auth: state.firebase.auth,
    profiles:state.firebase.profile
  }
}

export default connect(mapStateToProps) (ReactNavbar);