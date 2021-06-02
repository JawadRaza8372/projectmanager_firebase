import React from 'react';
import {firestoreConnect} from "react-redux-firebase";
import {compose} from "redux";
import {connect} from "react-redux";
import { Redirect } from 'react-router-dom'
function Projectlist(props) {

 const { project,auth } = props;
 if (!auth.uid) return <Redirect to='/login' /> 
  if (project) {
    
    return (<><br/>
      <div className="container">
      <div className="col col-lg-8 col-md-5 col-sm-8 col-xsm-10 col-10 mx-auto">
      <br/>
  <div className="card mb-3">
    <div className="card-body">
      <h5 className=" hd">" {project.title} "</h5>
      <p className="card-text blacksimpletxt" style={{fontSize:"26px"}}>{project.description}</p>
      <p className="greytxt">Posted By: {project.authorfirstname} {project.authorlastname}</p>
      <p className="card-text">
      <small className="text-muted">Date: {project.createdAt.toDate().toDateString()}</small>
      <small className="text-muted">Time: {project.createdAt.toDate().toLocaleTimeString()}</small>
      </p>
     
    </div>
    
    </div></div></div></>)}
    else{
      return(<>
    <div className="container center">
        <p>Loading project...</p>
      </div>
        </>);
    }
   
  }

  const mapStateToProps = (state, ownProps) => {
    // console.log(state);
    const id = ownProps.match.params.id;
    const projects = state.firestore.data.projects;
    const project = projects ? projects[id] : null
    return {
      project: project,
      auth: state.firebase.auth
    }
  }
 export default compose(connect(mapStateToProps), firestoreConnect([{ collection: 'projects' }])) (Projectlist);
