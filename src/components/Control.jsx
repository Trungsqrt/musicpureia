import React, { useState, useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import Avatar from "./Avatar";

import { PlayArrow } from "@styled-icons/material-rounded";
import { SkipNext } from "@styled-icons/material-rounded";
import { SkipPrevious } from "@styled-icons/material-rounded";
import { Pause } from "@styled-icons/material-rounded";

const CONTROL_SIZE_MD = "30px";

function Control() {
   const [isPlay, setIsPlay] = useState(false);
   const [currentSong, setCurrentSong] = useState(null);

   const tracks = useSelector((state) => state.tracksStorage.value);
   useEffect(() => {
      setCurrentSong(tracks[0]);
   }, []);

   const audioRef = useRef();

   useEffect(() => {
      console.log(currentSong);
   }, [currentSong]);

   const playtoggle = () => {
      setIsPlay((prev) => !prev);
   };

   // useEffect(() => {
   //    isPlay ? audioElement.play() : audioElement.pause();
   // }, [isPlay]);

   return (
      <div className="w-full h-[10%] rounded-b-lg control-bar flex">
         <Avatar />
         <section className="h-full w-5/6 flex items-center text-white">
            {/* button */}
            <section className="w-1/5 h-full flex justify-start items-center">
               <span>
                  <SkipPrevious size={CONTROL_SIZE_MD} />
               </span>
               <span className="hover:cursor-pointer" onClick={playtoggle}>
                  {isPlay ? (
                     <Pause size={CONTROL_SIZE_MD} />
                  ) : (
                     <PlayArrow size={CONTROL_SIZE_MD} />
                  )}
               </span>
               <span>
                  <SkipNext size={CONTROL_SIZE_MD} />
               </span>
            </section>

            {/* seek bar */}
            <section className="w-3/5">
               <section className="w-1/2"></section>
            </section>

            {/* volume */}
            <section className="w-1/5"></section>
         </section>
      </div>
   );
}

export default Control;
