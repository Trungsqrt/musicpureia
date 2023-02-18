import React from "react";

function Avatar() {
   const imgLink =
      "https://i.pinimg.com/236x/c3/1f/b0/c31fb07a04c5db2c76dcd1004db8b362.jpg";
   return (
      <section className="w-1/6 h-full flex justify-center items-center">
         {/* Song name & Artist */}
         <section className="w-1/3 h-full mr-0 flex justify-center items-center ml-5">
            <img
               src={imgLink}
               alt=""
               className="rounded-full object-contain max-w-[70%] max-h-[70%] m-0"
            />
         </section>
         <section className="flex flex-col w-2/3">
            {/* Song name */}
            <section className="text--weight-white text-[13px]">
               Conviction
            </section>
            {/* Artist */}
            <section className="text--light-white text-[10px]">Nekfeu</section>
         </section>
      </section>
   );
}

export default Avatar;
