import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./ZoneCard.css"
import {
    faEdit, faTrash
  } from "@fortawesome/free-solid-svg-icons";


const ZoneCard = (props) => { 

  return (
    <div className="zoneCard">
        <div className="zoneInfoOverview"> 
            <h2 className="zoneId">{props.zoneId}</h2>
            <text className='zoneDescription'>{props.zoneDescription}</text>
        </div>
        <div> 
            <FontAwesomeIcon
                icon={faEdit}
                style={{ width: "25px", height: "35px", cursor: "pointer" ,
                    color: "#00204A", padding: "10px", paddingRight: "25px" }}
            />
            <FontAwesomeIcon
                icon={faTrash}
                style={{ width: "25px", height: "35px", cursor: "pointer" ,
                    color: "#ED6400", padding: "10px", paddingRight: "25px" }}
            />
        </div>
    </div> 
  )
}

export default ZoneCard;