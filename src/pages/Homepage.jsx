import { useState, useEffect, useRef } from "react";

import Control from "../components/Control";
import Main from "../components/Main";

import { storage } from "../firebase";
import { ref, listAll, getDownloadURL } from "firebase/storage";
import { useSelector, useDispatch } from "react-redux";
import tracksSlice from "../redux/tracksSlice";
import { add } from "../redux/tracksSlice";

const songsRef = ref(storage, "songs/");

function Homepage() {
   const [songList, setSongList] = useState([]);
   const [currentTrack, setCurrentTrack] = useState(null);

   const tracks = useSelector((state) => state.tracksStorage.value);
   const dispatch = useDispatch();

   // NOTE: fetch all songs
   useEffect(() => {
      listAll(songsRef).then((response) => {
         response.items.forEach((item) => {
            getDownloadURL(item).then((url) => {
               setSongList((prev) => [...prev, url]);
            });
         });
      });
   }, []);

   // NOTE: add songs to redux
   // NOTE: set current track
   useEffect(() => {
      dispatch(add(songList));
      setCurrentTrack(tracks[0]);
      console.log(tracks);
   }, [songList]);

   return (
      <div className="h-screen w-full bg-[#B0AAD6] px-[2.5%] py-[2.5%]">
         <Main />
         <Control />
      </div>
   );
}

export default Homepage;
