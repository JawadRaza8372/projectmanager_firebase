import React, { Component } from 'react';
import {connect} from "react-redux";
import {createProject} from "../../store/actions/Projectactions";
import { Redirect } from 'react-router-dom'
class Creatproj extends Component {
  state=({
    title:'',
    description:''
  });
submit=(e)=>{
    e.preventDefault();
    this.props.createProject(this.state);
  this.props.history.push("/");
        }
        handlein=(e)=>{
            this.setState({ [e.target.id]:e.target.value});
                }
    render() {     
      const { auth } = this.props;
      if (!auth.uid) return <Redirect to='/login' /> 

        return (
            <>
 <div className="col col-lg-6 col-md-5 col-sm-6 col-xsm-6 col-6 mx-auto">
<div className="container">
<form onSubmit={this.submit}>
<h1 className="blacksimpletxt" style={{color:"#0d6efd",textAlign:"center"}}>Create Project</h1>
  <div className="form-group">
    <label >Title</label>
    <input type="text" className="form-control" onChange={this.handlein} id="title" autoComplete="off" placeholder="Project Title"/>
  </div>
  <div className="form-group">
    <label >Description</label>
    <textarea type="text" className="form-control"  onChange={this.handlein} id="description" placeholder="Project Description"/>
  </div>
  <br/>
  <button type="submit"  className="btn bttn btn-outline-primary">Create</button>
</form>
</div></div>
            </>
        );
    }
}
const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth
  }
}
const mapDispatchToProps=(dispatch)=>{
return {
createProject:(project)=>  dispatch(createProject(project))
  
}
}
export default connect(mapStateToProps,mapDispatchToProps)(Creatproj);
