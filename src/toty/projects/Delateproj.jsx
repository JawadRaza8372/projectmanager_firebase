import React from 'react';
import {Component} from "react";
import {firestoreConnect} from "react-redux-firebase";
import {Redirect} from "react-router-dom";
import {compose} from "redux";
import {connect} from "react-redux";
import Deltc from "./DeltCard";
class Delateproj extends Component {
  render(){
        const { project,  auth} = this.props;

        if (!auth.uid) return <Redirect to='/login' /> 
            if (project) {
              
    return(<>
    <p className="hd" style={{color:"white"}}>Delate Project</p>
       {
        
         project.map((val,index)=>{
 return<Deltc userid={auth.uid} key={index} prdata={val} />
         })
       }

    </>);}
    else{
      return <p>loading</p>
    }
 } }
const mapStateToProps=(state)=>{
   let projectdata=state.firestore.ordered.projects;
   let auth= state.firebase.auth;
   
    const project = projectdata ? projectdata : null;
    console.log (project);
    return {
      project: project,
      auth:auth,
    }
    
     
}
export default compose(connect(mapStateToProps), firestoreConnect([{ collection: 'projects',orderBy:["createdAt","desc"] }]))(Delateproj);

