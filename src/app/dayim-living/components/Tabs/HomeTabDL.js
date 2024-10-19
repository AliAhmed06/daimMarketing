"use client";
import { Fragment } from "react";
import { Tab } from "@headlessui/react";
import HomeTabItem from "./HomeTabItem";
import { getAvailableResidencesByFloor } from "../../residences/Data";

export default function HomeTabDL() {
  const lowerGroundFloorAvailable =
    getAvailableResidencesByFloor("Lower Ground Floor");
  const groundFloorAvailable = getAvailableResidencesByFloor("Ground Floor");
  const firstFloorAvailable = getAvailableResidencesByFloor("1st Floor");
  const secondFloorAvailable = getAvailableResidencesByFloor("2nd Floor");
  const thirdFloorAvailable = getAvailableResidencesByFloor("3rd Floor");
  const fourthFloorAvailable = getAvailableResidencesByFloor("4th Floor");
  const fifthFloorAvailable = getAvailableResidencesByFloor("5th Floor");
  const sixthFloorAvailable = getAvailableResidencesByFloor("6th Floor");
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
              1st to 5th Floor
            </button>
          )}
        </Tab>
      </Tab.List>
      <Tab.Panels>
        <Tab.Panel>
          <HomeTabItem
            image="/images/dayim_living/floor_plan.png"
            size="202"
            availableUnits="#"
            freeUnits={`${lowerGroundFloorAvailable} Shops/Offices Available`}
          />
        </Tab.Panel>
      </Tab.Panels>
    </Tab.Group>
  );
}
