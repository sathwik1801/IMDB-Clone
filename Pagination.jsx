import React from "react";

function Pagination({handleNext,handlePrev,pageNo}) {
  return (
    <div>
      <div className="bg-gray-400 p-4 mt-8 flex justify-center ">
        <div onClick={handlePrev} className="px-8">
          <i className="fa-solid fa-arrow-left"></i>
        </div>
        <div className="font-bold">{pageNo}</div>
        <div onClick={handleNext} className="px-8">
          <i className="fa-solid fa-arrow-right"></i>
        </div>
      </div>
    </div>
  );
}

export default Pagination;
