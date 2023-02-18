import React from "react";

function Playlist() {
   const data = [
      {
         songName: "Work",
         artist: "Rihanna",
         duration: "1:00",
         image: "https://cdn.britannica.com/03/151903-131-E310E9EC/Microphone-background-sound-waves-energy-Music.jpg",
      },
      {
         songName: "Work",
         artist: "Rihanna",
         duration: "1:00",
         image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtg_utHcaVXF9P9q_YAsASe8cr96tK7PW8JUd54oIgZ1p58RJ6Lxy70txHnGx3M-NwRko&usqp=CAU",
      },
      {
         songName: "Work",
         artist: "Rihanna",
         duration: "1:00",
         image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVNHz2gTeU1F57YSAFEIR8M81uNdukfZ-yasWQb9fvYPp3o-jIRmeQGymHN_uNctADq5k&usqp=CAU",
      },
      {
         songName: "Work",
         artist: "Rihanna",
         duration: "1:00",
         image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmo08xJlSmM6SJzUuIsMQLruQC-yGYduUPLhxzrnE6hUqreBthUbFhIgL-xzzT3ByatF4&usqp=CAU",
      },
   ];
   return (
      <div className="flex">
         <section className="w-1/2">background</section>
         <section className="w-1/2"></section>
      </div>
   );
}

export default Playlist;
