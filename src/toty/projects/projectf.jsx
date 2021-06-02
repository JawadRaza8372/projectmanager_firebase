import React from 'react';
import List from "../projects/Projectlist";
function projectf({duck}) {
    return(<>
    {
        <List pdata={duck} key={duck.id}/>
      
      }
    </>);
  }

export default projectf;
