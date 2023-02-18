import { useState, useEffect } from "react";
import Menu from "./Menu";
import Content from "./Content";

function Main() {
   return (
      <div className="h-[90%] w-full">
         <div className="h-full w-full rounded-t-lg flex main-bar">
            <Menu />
            <Content />
         </div>
      </div>
   );
}

export default Main;
