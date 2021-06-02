import React from "react";
import {Component} from "react";
import Notification from "./Notification";
import Trick from "../projects/projectf";
import {firestoreConnect} from "react-redux-firebase";
import {compose} from "redux";
import {connect} from "react-redux";
import { Redirect } from 'react-router-dom'
import "../../index.css";
class Dashbord extends Component{
    render(){
        const { auth } = this.props;
    if (!auth.uid) return <Redirect to='/login' /> 
    const { project, notification} = this.props;
        if (project) {
        return(
            <>
            <br/>
            <div className="container-fluid nav-bg">
    <div className="row">
<div className="col-12 mx-auto">
<div className="row">
<div className="col-md-8 pt-5 pt-lg-0 order-1 order-lg-1 d-flex justify-content-center flex-column">
<Trick duck={project} key={project.id}/>
</div>
<div className="col-lg-4 order-2 order-lg-2 ">
<Notification notif={notification}/>
</div>
</div>
</div>
</div>
</div>
</>
        )
    }
    else{
        return(<>
            <div className="container center">
                <p>Loading project...</p>
              </div>
                </>);
    }
}

}
const mapStateToProps=(state)=>{
   let projectdata=state.firestore.ordered.projects;
   let auth= state.firebase.auth;
   
    const project = projectdata ? projectdata : null
    return {
      project: project,
      auth:auth,
      notification :state.firestore.ordered.notifications
    }
     
}
export default compose(connect(mapStateToProps), firestoreConnect([{ collection: 'projects',orderBy:["createdAt","desc"] },{ collection: 'notifications',limit:5 ,orderBy:["time","desc"] }]))(Dashbord);