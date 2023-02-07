import React from "react";
import Control from "../components/Control";
import Main from "../components/Main";

function Homepage() {
   return (
      <div className="h-screen w-full bg-[#B0AAD6] px-[2.5%] py-[2.5%]">
         <Main />
         <Control />
      </div>
   );
}

export default Homepage;
