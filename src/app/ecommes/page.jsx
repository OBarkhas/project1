"use client";

import { useState } from "react";

const Page = () => {
  const [inputValue, setinputValue] = useState("");
  return (
    <div>
      <div className="flex justify-center ">
        <div className="border-b-1">E-Commerce</div>
      </div>
      <div className="ml-8">
        <input
          className=" border border-indigo-000000"
          value={inputValue}
          onChange={(e) => setinputValue(e.target.value)}
          placeholder="Search Product..."
        />
      </div>
      <div className="ml-8">
        <div className="border border-indigo-00000 rounded-sm">
          <img src="" alt="" />
          <div>Essence Mascara Lash Princess</div>
          <div>Beaty</div>
          <div>$9.99</div>
          <div>
            <button>View Detials</button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Page;
