import React from 'react';
import {NavLink} from "react-router-dom";
import { connect } from 'react-redux';
import { signOut } from '../../store/actions/authActions';
import {DropdownButton,Dropdown} from "react-bootstrap";
function Signesinlink(props) {
    return(<>

<li className="nav-item"><DropdownButton id="dropdown-basic-button" title="Project">
<Dropdown.Item href="/new_project">New Project</Dropdown.Item>
<Dropdown.Item href="/">View</Dropdown.Item>
  <Dropdown.Item href="/update">Update</Dropdown.Item>
  <Dropdown.Item href="/delate">Delate</Dropdown.Item>
</DropdownButton> </li>
<li className="nav-item"><DropdownButton id="dropdown-basic-button" title="Profile">
<img className="bttn1 rounded-circle" style={{width:"150px!important",height:"120px !important",margin:"4px"}} src={props.profile.profile} alt={props.profile.firstName}/>
<Dropdown.Item href="#">First Name: {props.profile.firstName}</Dropdown.Item>
  <Dropdown.Item href="#">Last Name: {props.profile.lastName}</Dropdown.Item>
  <Dropdown.Item href="#">Full Name: {props.profile.firstName} {props.profile.lastName}</Dropdown.Item>

</DropdownButton> </li>
<li className="nav-item">  <button  className="btnn nav-link" onClick={props.signOut}>Log Out</button></li>

{/* bttn1 rounded-circle        classes for gool button */}
    </>);
  }
  const mapDispatchToProps = (dispatch) => {
    return {
      signOut: () => dispatch(signOut())
    }
  }
  
  export default connect(null, mapDispatchToProps)(Signesinlink);

