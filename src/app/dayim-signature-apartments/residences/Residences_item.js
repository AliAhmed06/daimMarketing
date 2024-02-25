import React from "react";

function Residences_item({
  id,
  sold,
  title,
  number,
  type,
  size,
  image,
  floor,
  purchased_by,
}) {
  return (
    <div className=" p-5 flex flex-col items-center justify-center  border border-second h-[400px]">
      <img src={image} alt="" className="h-[200px] w-[150px] object-contain" />

      <div className="w-full mt-5">
        {sold == "no" ? (
          <span className=" text-white text-sm font-bold p-1 rounded-md bg-second">
            AVAILABLE
          </span>
        ) : (
          <div className="flex items-center justify-between">
            <span className=" text-white text-sm font-bold p-1 rounded-md bg-red">
              SOLD
            </span>
            <div>
              <h3 className="text-xs font-bold">Purchased By</h3>
              <span className=" text-white text-sm font-bold p-1 rounded-md bg-red">
                {purchased_by}
              </span>
            </div>
          </div>
        )}
        <h3 className="font-bold text-lg mt-3">{title}</h3>
        <h3 className="font-bold text-sm">{floor}</h3>
        <div className="flex items-center justify-between w-full text-second font-bold">
          <span className="">{type + " # " + number}</span>
          <span>{size + " Sq.Ft."}</span>
        </div>
      </div>
    </div>
  );
}

export default Residences_item;
