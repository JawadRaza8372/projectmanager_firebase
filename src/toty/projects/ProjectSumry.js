import React from 'react';
function ProjectSumry({prdata}) {        
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

</div>
</div>

    </>);
  }

export default ProjectSumry;
