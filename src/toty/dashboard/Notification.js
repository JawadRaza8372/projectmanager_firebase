import React from 'react';
import moment from "moment";
function Notification(props) {
  const { notif } = props;
    return(<>
    
<div className="col col-lg-8 col-md-6 col-sm-8 col-xsm-10 col-10 mx-auto" >
<div className="card border-primary" >
  <div className="card-header border-primary">
  <h5  className="blacksimpletxt card-title text-primary" >Notifications</h5>
  </div>
  <div className="card-body">
  <ul>
            { notif && notif.map(item =>{
              return <li key={item.id}>
                <span className="pink-text">{item.user} </span>
                <span>{item.content}</span>
                <p className="greytxt">{moment(item.time.toDate()).fromNow()}</p>
              </li>
            })}
          </ul>
</div>
  </div>
</div>

       
    </>);
  }

export default Notification;
