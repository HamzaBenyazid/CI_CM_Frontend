import ZoneCard from 'components/zone/ZoneCard';
import React from 'react'
import "./ZoneList.css";


function ZoneList() {
  return (
    <div className="contentContainer">
      <h1 className="contentTitle"> Zones </h1>
        <div className="contentWrapper"> 
            <ZoneCard />
        </div>
    </div>
  )
}

export default ZoneList;