"use client";
import { Fragment } from 'react'
import { Tab } from '@headlessui/react'
import HomeTabItem from './HomeTabItem';

export default function HomeTab() {
  return (
    <Tab.Group>
      <Tab.List className="text-center text-xl px-10">
        <Tab as={Fragment} className="outline-none h-full mt-2 w-[220px] pb-5 ">
          {({ selected }) => (
            <button
              className={`
                border-b-2 ${selected ? 'text-second  border-second ' : 'bg-white text-black border-gray'}
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
                border-b-2 ${selected ? 'text-second  border-second ' : 'bg-white text-black border-gray'}
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
                border-b-2 ${selected ? 'text-second  border-second ' : 'bg-white text-black border-gray'}
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
                border-b-2 ${selected ? 'text-second  border-second ' : 'bg-white text-black border-gray'}
              `}
            >
              2nd - 6th Floor
            </button>
          )}
        </Tab>        
      </Tab.List>
      <Tab.Panels>
        <Tab.Panel>
          <HomeTabItem image="/images/dsa/tabs/lower-ground.jpg" size="895" availableUnits="#" freeUnits="2 Shops/Offices Available" />
        </Tab.Panel>
        <Tab.Panel>
          <HomeTabItem image="/images/dsa/tabs/ground.jpg" size="832" availableUnits="#" freeUnits="1 Shop/Office Available" />
        </Tab.Panel>
        <Tab.Panel>
          <HomeTabItem image="/images/dsa/tabs/1st.jpg" size="895" availableUnits="#" freeUnits="2 Shops/Offices Available" />
        </Tab.Panel>
        <Tab.Panel>
          <HomeTabItem image="/images/dsa/tabs/2nd-6th.jpg" size="353" availableUnits="#" freeUnits="15 Apartments Available" />
        </Tab.Panel>        
      </Tab.Panels>
    </Tab.Group>
  )
}