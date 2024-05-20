"use client";
import { Fragment } from "react";
import { Tab } from "@headlessui/react";
import HomeTabItem from "./HomeTabItem";

export default function HomeTab() {
  return (
    <Tab.Group>
      <Tab.List className="text-center text-xl px-10">
        <Tab as={Fragment} className="outline-none h-full mt-2 w-[220px] pb-5 ">
          {({ selected }) => (
            <button
              className={`
                border-b-2 ${
                  selected
                    ? "text-second  border-second "
                    : "bg-white text-black border-gray"
                }
              `}
            >
              Lower Ground Floor
            </button>
          )}
        </Tab>
        <Tab as={Fragment} className="outline-none h-full mt-2 w-[150px] pb-5 ">
          {({ selected }) => (
            <button
              className={`
                border-b-2 ${
                  selected
                    ? "text-second  border-second "
                    : "bg-white text-black border-gray"
                }
              `}
            >
              Ground Floor
            </button>
          )}
        </Tab>
        <Tab as={Fragment} className="outline-none h-full mt-2 w-[150px] pb-5 ">
          {({ selected }) => (
            <button
              className={`
                border-b-2 ${
                  selected
                    ? "text-second  border-second "
                    : "bg-white text-black border-gray"
                }
              `}
            >
              1st Floor
            </button>
          )}
        </Tab>
        <Tab as={Fragment} className="outline-none h-full mt-2 w-[150px] pb-5 ">
          {({ selected }) => (
            <button
              className={`
                border-b-2 ${
                  selected
                    ? "text-second  border-second "
                    : "bg-white text-black border-gray"
                }
              `}
            >
              2nd - 4th Floor
            </button>
          )}
        </Tab>
        <Tab as={Fragment} className="outline-none h-full mt-2 w-[150px] pb-5 ">
          {({ selected }) => (
            <button
              className={`
                border-b-2 ${
                  selected
                    ? "text-second  border-second "
                    : "bg-white text-black border-gray"
                }
              `}
            >
              5th - 6th Floor
            </button>
          )}
        </Tab>
      </Tab.List>
      <Tab.Panels>
        <Tab.Panel>
          <HomeTabItem
            image="/images/dsa/tabs/lower_ground_floor.png"
            size="202"
            availableUnits="#"
            freeUnits="6 Shops/Offices Available"
          />
        </Tab.Panel>
        <Tab.Panel>
          <HomeTabItem
            image="/images/dsa/tabs/ground_floor.png"
            size="683"
            availableUnits="#"
            freeUnits="2 Shop/Office Available"
          />
        </Tab.Panel>
        <Tab.Panel>
          <HomeTabItem
            image="/images/dsa/tabs/first_floor.png"
            size="284"
            availableUnits="#"
            freeUnits="5 Shops/Offices Available"
          />
        </Tab.Panel>
        <Tab.Panel>
          <HomeTabItem
            image="/images/dsa/tabs/2nd-4th-Floor.png"
            size="350"
            availableUnits="#"
            freeUnits="9 Apartments Available"
          />
        </Tab.Panel>
        <Tab.Panel>
          <HomeTabItem
            image="/images/dsa/tabs/5th-6th-Floor.png"
            size="350"
            availableUnits="#"
            freeUnits="6 Apartments Available"
          />
        </Tab.Panel>
      </Tab.Panels>
    </Tab.Group>
  );
}
