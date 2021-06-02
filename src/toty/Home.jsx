import React from "react";
import {NavLink} from "react-router-dom";
import image from "../../src/image/oie_trans.gif";
//just in imagre src attribute type this src={image} then this image will be shown
function Home(){
return (<>

   
<section className="d-flex align-items-center">

<div className="container-fluid nav-bg">
    <div className="row">
<div className="col-10 mx-auto">
<br/>
<br/>
<div className="row">
<div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
    <h1 style={{textTransform:"capitalize",color:"white"}}>Grow with us <strong className="brand_name">Jawad Raza</strong></h1>
    <h2 style={{color:"white"}} className="my-3">Manage Projects here.Delate and update nhi hy iss ma</h2>
<div className="mt-3">
    <NavLink style={{borderRadius:"12px"}} className="btn bttn22 btn-outline-light" to="/login">Get Started</NavLink>
</div>
</div>
<div className="col-lg-6 order 1 order-lg-2 header_img">
    <img style={{height:"500px"}} src="http://pxdraft.com/wrap/mombo/mombo/static/img/home-banner-1.svg" alt="header img" className="img-fluid animated"/>
</div>
</div>
</div>
</div>
</div>
</section>
    </>);
}
export default Home;