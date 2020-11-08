import React from 'react';
const ListItem = () =>
{
   //return list of items to be displayed on the home screen
    return(                   
       <div id="screen">
            <div className="list-container" unselectable="off" id="display">
               
               <ul>
                  <li className="list-item" id="coverflow">Coverflow</li>
                  <li className="list-item" id="music">Music</li>
                  <li className="list-item" id="games">Games</li>
                  <li className="list-item" id="videos">Videos</li>
                  <li className="list-item" id="settings">Settings</li>
               </ul>  
            </div>
            <div id="coverflow-screen" className="newScreen"></div>
            <div id="music-screen" className="newScreen"></div>
            <div id="games-screen" className="newScreen"></div>
            <div id="videos-screen" className="newScreen"></div>
            <div id="settings-screen" className="newScreen"></div>
       </div>
        
    );
}

export default ListItem;