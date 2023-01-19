import { Button } from '@mui/material';
import ZoneCard from 'components/zone/ZoneCard';
import React from 'react'
import "./ZoneList.css";


function ZoneList() {
  return (
    <div className="contentContainer">
      <div className="contentHeader">
        <h1 className="contentTitle"> Zones </h1>
        <Button variant="contained" sx={{height: "40px", width: "120px", marginRight: "40px"}}>Add Zone</Button>
      </div>
      <div className="contentWrapper"> 
          <ZoneCard zoneId="dummy zoneId" zoneDescription="some shitty description"/>
      </div>
    </div>
  )
}

export default ZoneList;