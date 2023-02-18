import { useState, useEffect, useRef } from "react";

function Content() {
   const data = [
      {
         songName: "Work",
         artist: "RRRRRRRR",
         duration: "1:00",
         image: "https://cdn.britannica.com/03/151903-131-E310E9EC/Microphone-background-sound-waves-energy-Music.jpg",
      },
      {
         songName: "Play",
         artist: "PPPPPPP",
         duration: "1:00",
         image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtg_utHcaVXF9P9q_YAsASe8cr96tK7PW8JUd54oIgZ1p58RJ6Lxy70txHnGx3M-NwRko&usqp=CAU",
      },
      {
         songName: "Rest",
         artist: "RRRRRRrr",
         duration: "1:00",
         image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVNHz2gTeU1F57YSAFEIR8M81uNdukfZ-yasWQb9fvYPp3o-jIRmeQGymHN_uNctADq5k&usqp=CAU",
      },
      {
         songName: "Eat",
         artist: "EEEEE",
         duration: "1:00",
         image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmo08xJlSmM6SJzUuIsMQLruQC-yGYduUPLhxzrnE6hUqreBthUbFhIgL-xzzT3ByatF4&usqp=CAU",
      },
   ];

   const [currentSong, setCurrentSong] = useState(data[2]);
   return (
      <div className="w-5/6 grid grid-cols-12 gap-4 grid-rows-4">
         <div
            className="w-full h-full col-start-2 col-end-7 row-start-2 row-end-4 bg-cover bg-center flex justify-start items-end"
            style={{ backgroundImage: `url(${currentSong.image})` }}
         >
            <div className="px-8 pb-4">
               <label className="block text-white font-bold text-[16px]">
                  {currentSong.songName}
               </label>
               <label className="block text--light-white text-[12px]">
                  {currentSong.artist}
               </label>
            </div>
         </div>
         <div className="w-full h-full col-start-7 col-end-12 row-start-2 row-end-4 bg-red-500 flex flex-col">
            {data.map((item) => (
               <div></div>
            ))}
         </div>
      </div>
   );
}

export default Content;
