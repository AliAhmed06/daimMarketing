"use client";
import { Fragment } from "react";
import { Tab } from "@headlessui/react";
import HomeTabItem from "./HomeTabItem";
import { getAvailableResidencesByFloor } from "../../residences/Data";
import useSWR from "swr";
import { GET_ALL_PROPERTIES_API } from "@/lib/apiEndPoints";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function HomeTabDL() {
  const { data, error, isLoading } = useSWR(GET_ALL_PROPERTIES_API, fetcher);
  if (error) {
    return <h2>failed to load</h2>;
  }
  const residences = data?.filter((item) => item.name === "Dayim Living") || [];
  function getAvailableResidences() {
    return residences.filter((item) => item.sold == "No").length;
  }

  const availableUnits = getAvailableResidences();

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
              Ground Floor
            </button>
          )}
        </Tab>
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
              Single Plan Office
            </button>
          )}
        </Tab>
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
              Single Plan Apartment
            </button>
          )}
        </Tab>
      </Tab.List>
      <Tab.Panels>
        <Tab.Panel>
          <HomeTabItem
            image="/images/dayim_living/floor_plan.png"
            size="295"
            availableUnits="#"
            freeUnits={`${availableUnits} Apartments Available`}
          />
        </Tab.Panel>
        <Tab.Panel>
          <HomeTabItem
            image="/images/dayim_living/floor_plan.png"
            size="295"
            availableUnits="#"
            freeUnits={`${availableUnits} Apartments Available`}
          />
        </Tab.Panel>
        <Tab.Panel>
          <HomeTabItem
            image="/images/dayim_living/single-plan-office.png"
            size="295"
            availableUnits="#"
            freeUnits={``}
          />
        </Tab.Panel>
        <Tab.Panel>
          <HomeTabItem
            image="/images/dayim_living/Single-plan-apartment.png"
            size="295"
            availableUnits="#"
            freeUnits={``}
          />
        </Tab.Panel>
      </Tab.Panels>
    </Tab.Group>
  );
}
