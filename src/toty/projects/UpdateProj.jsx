import React from 'react'
import {firestoreConnect} from "react-redux-firebase";
import firebase from "firebase/app";
import {compose} from "redux";
import {connect} from "react-redux";
import { useState} from "react";
function UpdateProj(props) {
const id=props.match.params.id;
const [txt, settxt] = useState("");
    function submit(e){
        e.preventDefault();
        firebase.firestore().collection('projects').doc(id).update({title:txt}).then(()=>{
          return(alert("Updated Successfully")
            
          )    })
    }
    function submit1(e){
      e.preventDefault();
      firebase.firestore().collection('projects').doc(id).update({description:txt}).then(()=>{
        return(alert("Updated Successfully")
          
        )    })
  }

      function handle1(e){
     settxt(e.target.value);
    }
    return (
        <div>
            <div className="col col-lg-6 col-md-5 col-sm-6 col-xsm-6 col-6 mx-auto">
<div className="container">
<form onSubmit={submit}>
<h1 className="blacksimpletxt" style={{color:"#0d6efd",textAlign:"center"}}>Update title</h1>
  <div className="form-group">
    <textarea type="text" className="form-control" value={txt}  onChange={handle1} placeholder="Title Updat"/>
  </div>
  <br/>
  <button type="submit"  className="btn bttn btn-outline-primary">Update Title</button>
</form>
<br></br>
<form onSubmit={submit1}>
<h1 className="blacksimpletxt" style={{color:"#0d6efd",textAlign:"center"}}>Update description</h1>
  <div className="form-group">
    <input type="text" className="form-control" value={txt}  onChange={handle1} placeholder="Description Update"/>
  </div>
  <br/>  <button type="submit"  className="btn bttn btn-outline-primary">Update Description</button>

</form>
</div></div>
        </div>
    )}

const mapStateToProps = (state, ownProps) => {
    const id = ownProps.match.params.id;
    const projects = state.firestore.data.projects;
    const project = projects ? projects[id] : null
    return {
      project: project,
      auth: state.firebase.auth
    }
}
 export default compose(connect(mapStateToProps), firestoreConnect([{ collection: 'projects' }])) ( UpdateProj);

