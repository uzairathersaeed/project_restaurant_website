import React, { useState } from 'react';
import {BsFillPlayFill, BsPauseFill} from 'react-icons/bs'
import { meal } from '../../constants'; 
import './Intro.css';

const Intro = () => {
  const [playVideo, setPlayVideo]=  useState(false)
  const vidRef = React.useRef();
  const handleVideo = ( ) =>{
    setPlayVideo((prevPlayVideo) => !prevPlayVideo)
    //if prevplayvideo is true we gonna toggle it to off or if the prevplayvideo is false we gonna toggle it to on
    if(playVideo){
      vidRef.current.pause();//if video is play, pause it
    }
    else{
      vidRef.current.play();//if video is pause, play it
    }
  }
  return(
      <div className='app__video'>
        <video
          src={meal}
          ref={vidRef}
          type="video/mp4"
          loop
          controls={false}
          muted
        />
        <div className='app__video-overlay flex__center'>
          <div 
          className='app__video-overlay_circle flex__center'
          onClick={handleVideo}
          >
            {
              playVideo
                ? <BsPauseFill  color='#fff' fontSize={30}/> 
                :<BsFillPlayFill color='#fff' fontSize={30}/>
            }
          </div>

        </div>

    </div>
  )
}
 

export default Intro;
