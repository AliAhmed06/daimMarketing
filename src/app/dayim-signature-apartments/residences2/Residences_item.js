"use client";
import React from "react";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import { useRouter } from "next/navigation";
import Link from "next/link";

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
  const router = useRouter();
  function bookNowHandler() {
    router.push("https://wa.me/923085111176");
  }
  return (
    <div className=" p-5 flex flex-col items-center justify-center  border border-second relative">
      <Zoom>
        <img
          src={`${process.env.NEXT_PUBLIC_BACKEND_API_URL}/uploads/${image}`}
          alt=""
          className="h-[200px] w-[150px] object-contain"
        />
      </Zoom>
      <div className="w-full mt-5">
        {sold == "No" ? (
          <div className="flex items-end justify-between">
            <span className=" text-white text-sm font-bold p-1 rounded-md bg-second">
              AVAILABLE
            </span>

            <button
              onClick={bookNowHandler}
              className="bg-[#008000] text-white p-1 text-sm rounded-md "
            >
              BOOK NOW
            </button>
          </div>
        ) : (
          <div className="flex items-end justify-between">
            <span
              className={`text-white text-sm font-bold p-1 rounded-md ${
                sold === "Reserved" ? "bg-first" : "bg-red"
              } `}
            >
              {sold === "Reserved" ? "RESERVED" : "SOLD"}
            </span>
            {sold !== "Reserved" && (
              <div className="flex flex-col">
                <h3 className="text-xs font-bold">Purchased By</h3>
                <span className=" text-white text-sm font-bold p-1 rounded-md bg-red">
                  {purchased_by}
                </span>
              </div>
            )}
          </div>
        )}
        <h3 className="font-bold text-lg mt-3">{title}</h3>
        <h3 className="font-bold text-sm">{floor} Floor</h3>
        <div className="flex items-center justify-between w-full text-second font-bold">
          <span className="">{type + " # " + number}</span>
          <span>{size + " Sq.Ft."}</span>
        </div>
        <div className={`self-end `}>
          {sold === "No" ? (
            <Link
              href={`/dayim-signature-apartments/contact?floor=${floor}&inventory_name=${type}&inventory_number=${number}`}
              className={`bg-[#008000] text-white py-1 px-3 text-sm rounded-md mt-3 inline-block`}
            >
              Contact
            </Link>
          ) : (
            <div className={`py-1 px-3 mt-3 `}></div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Residences_item;
