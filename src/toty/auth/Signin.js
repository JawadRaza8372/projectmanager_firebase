import React, { Component } from 'react'
import { connect } from 'react-redux';
import { signIn } from '../../store/actions/authActions';
import { NavLink, Redirect } from 'react-router-dom';
class Signin extends Component {
state={
    email:'',password:''
}
submit=(e)=>{
    e.preventDefault();
    this.props.signIn(this.state);
  }
        handlein=(e)=>{
            this.setState({ [e.target.id]:e.target.value});
          
                }
    render() {
      const { authError,auth } = this.props;
      // if (auth.uid) return <Redirect to='/' /> 
                    
        return (
            <>
 <div className="col col-lg-6 col-md-5 col-sm-6 col-xsm-6 col-6 mx-auto">
<div className="container">
<form  onSubmit={this.submit}>
<h1 className="blacksimpletxt" style={{color:"#0d6efd",textAlign:"center"}}>Login</h1>
  <div className="form-group">
    <label >Email address</label>
    <input type="email" className="form-control" onChange={this.handlein} id="email" autoComplete="off" placeholder="Enter email"/>
  </div>
  <div className="form-group">
    <label >Password</label>
    <input type="password" className="form-control"  onChange={this.handlein} id="password" placeholder="Password"/>
  </div>
  <br/>
  { authError ? <p style={{color:"red"}}>{authError}</p> : null }
  <button type="submit"  className="btn bttn btn-outline-primary">Login</button>
  <p style={{color:"white"}}>Don't have an account!!  <NavLink className="color" to="/signup">Create One</NavLink></p>
</form>
</div></div>

            </>
        );
    }
}
const mapStateToProps = (state) => {
  return{
    authError: state.auth.authError,
    auth:state.firebase.auth
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    signIn: (creds) => dispatch(signIn(creds))
  }
}

export default connect(mapStateToProps, mapDispatchToProps) (Signin);
