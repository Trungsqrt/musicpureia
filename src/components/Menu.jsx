import React from "react";
import { NavLink } from "react-router-dom";

import {
   LibraryMusic,
   PlayCircleFilled,
   Storefront,
} from "@styled-icons/material";
import { Albums } from "@styled-icons/ionicons-sharp";
import { PersonFill, HeartFill } from "@styled-icons/bootstrap";
import { Radio } from "@styled-icons/ionicons-outline";
import { BrowserOutline } from "@styled-icons/evaicons-outline";

const ICON_SIZE = "18px";

function Menu() {
   return (
      <div className="hidden lg:flex flex-col w-1/5 items-center justify-center border-r-[0.07rem] border-[#383952]">
         {/* Begin: Playlist section of Menu bar */}
         <div className="w-full">
            <label className="menu-title px-10 ">LIBRARY</label>
            <nav className="w-full h-full">
               <NavLink
                  to="/Playlists"
                  className="block hover:item--hover py-2 px-10 leading-6 mt-2"
               >
                  <span className="menu-items-icon">
                     <LibraryMusic size={ICON_SIZE} />
                  </span>
                  <span className="menu-items-name text ">Playlist</span>
               </NavLink>

               <NavLink
                  to="/Artists"
                  className="block hover:item--hover py-2 px-10 leading-6 item--disable"
               >
                  <span className="menu-items-icon">
                     <PersonFill size={ICON_SIZE} />
                  </span>
                  <span className="menu-items-name text ">Artists</span>
               </NavLink>

               <NavLink
                  to="/ForYou"
                  className="block hover:item--hover py-2 px-10 leading-6 item--disable"
               >
                  <span className="menu-items-icon">
                     <HeartFill size={ICON_SIZE} />
                  </span>
                  <span className="menu-items-name text ">For you</span>
               </NavLink>

               <NavLink
                  to="/Browse"
                  className="block hover:item--hover py-2 px-10 leading-6 item--disable"
               >
                  <span className="menu-items-icon">
                     <BrowserOutline size={ICON_SIZE} />
                  </span>
                  <span className="menu-items-name text">Browse</span>
               </NavLink>
            </nav>
         </div>
         {/* End:  Playlist section of Menu bar*/}

         {/* Begin: Discover section of Menu bảr*/}
         <div className="w-full mt-5">
            <label className="menu-title px-10 ">DISCOVER</label>
            <nav className="w-full">
               <NavLink
                  to="/Store"
                  className="block hover:item--hover py-2 px-10 leading-6 mt-2 item--disable"
               >
                  <span className="menu-items-icon">
                     <Storefront size={ICON_SIZE} />
                  </span>
                  <span className="menu-items-name text ">Store</span>
               </NavLink>

               <NavLink
                  to="/Radio"
                  className="block hover:item--hover py-2 px-10 leading-6 item--disable"
               >
                  <span className="menu-items-icon">
                     <Radio size={ICON_SIZE} />
                  </span>
                  <span className="menu-items-name text ">Radio</span>
               </NavLink>

               <NavLink
                  to="/Albums"
                  className="block hover:item--hover py-2 px-10 leading-6 item--disable"
               >
                  <span className="menu-items-icon">
                     <Albums size={ICON_SIZE} />
                  </span>
                  <span className="menu-items-name text ">Albums</span>
               </NavLink>

               <NavLink
                  to="/Songs"
                  className="block hover:item--hover py-2 px-10 leading-6 item--disable"
               >
                  <span className="menu-items-icon">
                     <PlayCircleFilled size={ICON_SIZE} />
                  </span>
                  <span className="menu-items-name text">Songs</span>
               </NavLink>
            </nav>
         </div>
      </div>
   );
}

export default Menu;
