import React from 'react';
import firebase from "firebase/app";

function DeltCard({userid,prdata}) {     
    function delat(){
        firebase.firestore().collection('projects').doc(prdata.id).delete().then(()=>{
          return(alert("Delated Successfully")
            
          )    })
            }
            if (`${userid}`===`${prdata.authorid}`){
                return(<>
                    <div className="col col-lg-5 col-md-5 col-sm-8 col-xsm-10 col-10 mx-auto" >
                    <div className="card border-primary" >
               <div className="card-header border-primary">
               <h5  className="blacksimpletxt card-title text-primary" >{prdata.title}</h5>
               </div>
               <div className="card-body">
               <p  className="blacksimpletxt">Posted by: {prdata.authorfirstname} {prdata.authorlastname}</p>
               <p style={{fontSize:"12px"}} className="greytxt">Date: {prdata.createdAt.toDate().toDateString()}</p>
               </div>
               <div className="card-footer">
                   <button onClick={delat} className="btn btn-outline-danger">Delate</button>
               </div>
             
             </div>
             </div>
             
                 </>);
            }   
   else {
       return null
   }
  }

export default DeltCard;
