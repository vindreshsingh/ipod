import React from 'react';
import '../ipod/ipod.css';
import next from "../images/next.svg";
import play from "../images/play.svg";
import prev from "../images/prev.svg";
const WheelControl = (props) =>{
    return(                 
        <div id="wheel-container" unselectable="off" className="controls" onClick={props.scroll}>
            <button className="center-btn" onClick={props.option}>
            </button>
            <button id="Menu" onClick={props.mainScr}>MENU</button>
            <div id="next" draggable="false">
                <img src={next} id="nextImg" alt="next" draggable="false" />
            </div>
            <div draggable="false" id="play" alt="play">
                <img src={play} id="playImg" alt="play" draggable="false" />
            </div>
            <div draggable="false" id="prev">
                <img src={prev} id="prevImg" alt="prev" draggable="false" />
            </div>  
        </div>
         
    )
}
export default WheelControl;