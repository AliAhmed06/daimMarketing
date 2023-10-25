import React from "react";
import AdminLayout from "../../components/layouts/AdminLayout";
import Link from "next/link";

const AddDmEvent = () => {
  return (
    <AdminLayout>
      <div className="w-full h-full flex flex-col items-center justify-center">
        <div className="h-full w-full flex flex-col p-10 bg-red">
          <div className="w-full  ">
            <Link
              href={"/admin/dm-events"}
              className="text-second text-lg font-bold hover:underline"
            >
              Go Back
            </Link>
          </div>
          <div className="flex-1 flex items-center justify-center  ">
            <form className=" flex flex-col md:flex-row items-center justify-center md:w-[550px] gap-5">
              <input
                type="text"
                className=" border border-gray outline-none focus:border-second w-[250px] md:w-[400px] py-2 px-7 rounded-md"
                placeholder="Enter Url"
              />
              <button className="bg-second py-2 px-7 rounded-md text-white">
                Add Event
              </button>
            </form>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
};

export default AddDmEvent;
