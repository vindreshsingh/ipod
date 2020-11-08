import React from'react';
import '../ipod/ipod.css'
import ZingTouch from 'zingtouch';
import List from '../listItems/listItems';
import WheelControl from '../wheelControl/wheelControl';
import cover from '../images/cover.jpg';
import music from '../images/music.jpg';
import games from '../images/games.jpg';
import videos from '../images/videos.jpg';
import settings from '../images/settings.jpg';

class Ipod extends React.Component{
    handleColor =()=>{
        let games = document.getElementById('coverflow');
        games.style.backgroundColor='white';
        games.style.color="black";
        let music = document.getElementById('music');
        music.style.backgroundColor='white';
        music.style.color="black";
        let camera = document.getElementById('games');
        camera.style.backgroundColor='white';
        camera.style.color="black";
        let videos = document.getElementById('videos');
        videos.style.backgroundColor='white';
        videos.style.color="black";
        let settings = document.getElementById('settings');
        settings.style.backgroundColor='white';
        settings.style.color="black";
  }
  // control the scroll and change background color of the active list-item in a screen  
  handleScroll = () => {
      let angle=0;
      const target = document.getElementById('wheel-container');
      const region = new ZingTouch.Region(target);
      region.bind(target, 'rotate', (e) =>{
            angle = angle+ e.detail.distanceFromLast;
            if((Math.abs(angle)>0 && Math.abs(angle) < 15)){
                this.handleColor();
                let selectedregion = document.getElementById('coverflow');
                selectedregion.style.backgroundColor='blue';
                selectedregion.style.color="white";
            }
            if(Math.abs(angle) > 15 && Math.abs(angle)<30){
                this.handleColor();
                let selectedregion = document.getElementById('music');
                selectedregion.style.backgroundColor='blue';
                selectedregion.style.color="white";
            }
            if(Math.abs(angle) > 30 && Math.abs(angle)<45){
                this.handleColor();
                let selectedregion = document.getElementById('games');
                selectedregion.style.backgroundColor='blue';
                selectedregion.style.color="white";
            }
            if(Math.abs(angle) >45 && Math.abs(angle)<60){
                this.handleColor();
                let selectedregion = document.getElementById('videos');
                selectedregion.style.backgroundColor='blue';
                selectedregion.style.color="white";
            }
            if(Math.abs(angle) >60 && Math.abs(angle)<75){
                this.handleColor();
                let selectedregion = document.getElementById('settings');
                selectedregion.style.backgroundColor='blue';
                selectedregion.style.color="white";
            }
            if(Math.abs(angle) >75){
                angle = 0;
            }        
      });
  }
  //handling the main screen 
  mainScreen =() =>{
      let current = document.getElementsByClassName('newScreen');
      
      let currentScreen="";

      for(currentScreen of current){
          if(currentScreen.style.visibility==="visible"){
              break;
          }
      }    
      currentScreen.style.visibility = "hidden";
      currentScreen.style.height="0";
      currentScreen.style.width="0";

      let home = document.getElementById('display');
      home.style.visibility="visible";
      home.style.height="45%";
      home.style.width="90%";
      home.style.borderTopLeftRadius="3%";
      home.style.borderTopRightRadius="5%";
      home.style.marginTop="1%"

  }
  //handle switching different screens
  switchScreen = (e) =>{
      //when the screens are swittched hide the home screen 
      let home = document.getElementById('display');
      home.style.visibility="hidden";
      home.style.height="0";
      home.style.width="0";
      let screen = document.getElementById(e.id+'-screen');
      if(document.getElementById("title") != null){
          document.getElementById("title").remove();
      }
      let img = document.createElement('img');
      //show contents related to the selected item on new screen
      if(e.id==='coverflow'){
          img.setAttribute("src", cover);
      }
      else if(e.id==='music'){
          img.setAttribute("src", music);
      }
      else if(e.id==='games'){
          img.setAttribute("src", games);
      }
      else if(e.id==='videos'){
        img.setAttribute("src", videos);
      }
      else{
        img.setAttribute("src", settings);
      }
      img.id="title";
      img.style.height="100%";
      img.style.width="100%";
      screen.appendChild(img);
      screen.style.alignmentBaseline="center"
      screen.style.position="absolute"
      screen.style.visibility="visible";
      screen.style.height="90%";
      screen.style.width="90%" ;
      screen.style.borderRadius="3%";
      screen.style.marginLeft="5%";
  }

  //handling click events
  Click =() =>{
      //get the items from the list 
      let elements = document.getElementsByClassName('list-item');
      let i;
      for(i of elements){                           
          if(i.style.backgroundColor==="blue"){
              break;
          }
      }
      this.switchScreen(i);
  }

  render() 
  {
    return(<div className="App">
        <div className="Ipod">
            <List/>
            <WheelControl scroll={this.handleScroll} mainScr={this.mainScreen} option={this.Click}/>`
        </div>
      </div>
    );
  }
}



export default Ipod;