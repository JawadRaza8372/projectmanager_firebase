import React from 'react';
import { NavLink } from 'react-router-dom';
import ProjectSumry from './ProjectSumry';
function Projectlist({pdata}) {
    return(<>
    {
      pdata && pdata.map((avin)=>{
        return(<NavLink style={{textDecoration:"none !important"}} to={"/project/"+avin.id} key={avin.id}>
      <ProjectSumry prdata={avin} key={avin.id} />
</NavLink>)
      })}
    </>);
  }

export default Projectlist;
