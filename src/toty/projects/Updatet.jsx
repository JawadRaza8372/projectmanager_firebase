import React from 'react';
import {Component} from "react";
import {firestoreConnect} from "react-redux-firebase";
import {Redirect,NavLink} from "react-router-dom";
import {compose} from "redux";
import {connect} from "react-redux";
import ProjectSumry from './ProjectSumry';
class Updatet extends Component {
  render(){
        const { project,  auth} = this.props;

        if (!auth.uid) return <Redirect to='/login' /> 
            if (project) {
              
    return(<>
    <p className="hd" style={{color:"white"}}>Update Project</p>
       {
        
         project.map((val,index)=>{
            if (`${auth.uid}`===`${val.authorid}`){ return(<><NavLink to={"/update/"+val.id} idd={val.id} key={index}><ProjectSumry key={index} prdata={val}/></NavLink> </>)}
         else {return null}
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
export default compose(connect(mapStateToProps), firestoreConnect([{ collection: 'projects',orderBy:["createdAt","desc"] }]))(Updatet);

