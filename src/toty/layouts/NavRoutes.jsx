import React from "react";
import {Route,Switch} from "react-router-dom";
import Navbar from "./Navbar";
import Dashboards from "../dashboard/Dashbord";
import ProjDetail from "../projects/ProjDetail";
import Signin from "../auth/Signin";
import Signup from "../auth/signup";
import NewProject from "../projects/Creatproj";
import Home from "../Home";
import Updatet from "../projects/Updatet";
import Upd from "../projects/UpdateProj";
import Delate from "../projects/Delateproj";
function NavRoutes(){
    return(<>
    <Navbar/>
         <Switch>
         <Route exact path="/home" component={Home}/>
             <Route exact path="/" component={Dashboards}/>
             <Route exact path="/project/:id" component={ProjDetail} />
             <Route exact path="/login" component={Signin}/>
             <Route exact path="/signup" component={Signup}/>
             <Route exact path="/new_project" component={NewProject}/>
             <Route exact path="/update" component={Updatet}/>
             <Route exact path="/update/:id" component={Upd}/>
             <Route exact path="/delate" component={Delate}/>
             {/* <Route exact path="/contact" component={Contact}/> */}
             <Route component={""}/>
         </Switch>

    </>);
    }
    export default NavRoutes; 