import React, { Component} from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { signUps } from '../../store/actions/authActions'
import FileUploader from 'react-firebase-file-uploader'
import fire from "../../config/Fire"
class signup extends Component {

state={
    email:'',password:'',firstname:"",lastname:"",img:""
}
handleUploadError = error => {
    console.error(error);
};

handleUploadSuccess = filename => {
  fire.storage().ref("lintang_foto") // nama folder di firebase
    .child(filename)
    .getDownloadURL()
    .then(url => {this.setState({ img: url });
}
    );
};

submit=(e)=>{
    e.preventDefault();
 this.props.signUps(this.state);
        }

        handlein=(e)=>{
            this.setState({ [e.target.id]:e.target.value});
                }
    render() {

      const { auth,authError } = this.props;
      if (auth.uid) return <Redirect to='/' /> 
                    
        return (
            <>
 <div className="col col-lg-6 col-md-5 col-sm-6 col-xsm-6 col-6 mx-auto">
<div className="container">

<form onSubmit={this.submit}>
<h1 className="blacksimpletxt" style={{color:"#0d6efd",textAlign:"center"}}>Sign Up</h1>
<p className="whitesimpletxt" style={{textAlign:"center"}}>Create a new account</p>
<div className="form-group">
    <label >First Name</label>
    <input type="text" className="form-control" onChange={this.handlein} id="firstname" autoComplete="off" placeholder="Enter First Name"/>
  </div>
  <div className="form-group">
    <label >Last Name</label>
    <input type="text" className="form-control" onChange={this.handlein} id="lastname" autoComplete="off" placeholder="Enter Last Name"/>
  </div>
  <div className="form-group">
    <label >Email address</label>
    <input type="email" className="form-control" onChange={this.handlein} id="email" autoComplete="off" placeholder="Enter email"/>
  </div>
  <div className="form-group">
    <label >Password</label>
    <input type="password" className="form-control"  onChange={this.handlein} id="password" placeholder="Password"/>
  </div>
  <div className="form-group">
  <label >Profile Picture</label>
  <p className="whitesimpletxt">
  <FileUploader className="component"
            accept='*' name='avatar'
            randomizeFilename
            storageRef={
              fire.storage().ref('lintang_foto')
            }
            onUploadStart = {null}
            onUploadError = {this.handleUploadError}
            onUploadSuccess = {this.handleUploadSuccess}
            onProgress = {null}
          /></p></div>
<p className="whitesimpletxt">Profile Picture Status:{(this.state.img)?"uploaded":null}</p>

              { authError ? <p style={{color:"red",textAlign:"center"}}>{authError}</p> : null }
         
  <br/>
 
  <button type="submit"  className="btn bttn btn-outline-primary">SignUp</button>
</form>
</div></div>
            </>
        );
    }
}
const mapDispatchToProps = (dispatch)=> {
  return {
    signUps: (creds) => dispatch(signUps(creds))
  }
}
const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
    authError:state.auth.authError
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(signup);
