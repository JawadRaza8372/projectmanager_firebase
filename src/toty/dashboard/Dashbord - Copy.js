import React from "react";
import {Component} from "react";
import Notification from "./Notification";
import Trick from "../projects/projectf";
import {firestoreConnect} from "react-redux-firebase";
import {compose} from "redux";
import {connect} from "react-redux";
class Dashbord extends Component{
    render(){
    let data=this.props.projectdata;
        return(
            <>
            <br/>
            <div className="container-fluid nav-bg">
    <div className="row">
<div className="col-12 mx-auto">
<div className="row">
<div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
<Trick duck={data}/>
</div>
<div className="col-lg-6 order 1 order-lg-2 header_img">
<Notification/>
</div>
</div>
</div>
</div>
</div>
</>
        )
    }
}
const mapStateToProps=(state)=>{
   return { projectdata:state.firestore.ordered.projects};  
}
export default compose(connect(mapStateToProps), firestoreConnect([{ collection: 'projects' }]))(Dashbord);