import React from 'react'
import NavBar from '../components/Navbar'
import Residences_item from './Residences_item'
import MainFooter from '../components/footer/MainFooter'
import { getAllResidences, getResidenceByType } from './Data'

function Residences() {
  const residences = getAllResidences();
  const apartments = getResidenceByType("Apartment");
  const offices = getResidenceByType("Office");
  const shops = getResidenceByType("Shop");
  console.log(apartments);
  return (
    <div className='mt-[120px]'>
        <NavBar videoBg={false} />
        
        <div className='py-5 px-10
                       lg:px-32'  >
          <h3 className='font-bold text-second text-4xl' id='offices'>OFFICES</h3>
          <div className='py-5 grid grid-cols-1 gap-5
                        md:grid-cols-2 lg:grid-cols-4 '>            
              { offices.map((i) => (
                <Residences_item key={i.id} id={i.id} sold={i.sold} title={i.title} number={i.number} type={i.type} size={i.size} image={i.image} floor={i.floor} purchased_by={i.purchased_by} />
              ))}                       
          </div>

          <h3 className='font-bold text-second text-4xl mt-10' id='shops'>SHOPS</h3>
          <div className='py-5 grid grid-cols-1 gap-5
                        md:grid-cols-2 lg:grid-cols-4 ' >            
              { shops.map((i) => (
                <Residences_item key={i.id} id={i.id} sold={i.sold} title={i.title} number={i.number} type={i.type} size={i.size} image={i.image} floor={i.floor} purchased_by={i.purchased_by} />
              ))}                       
          </div>

          <h3 className='font-bold text-second text-4xl mt-10' id='apartments'>APARTMENTS</h3>
          <div className='py-5 grid grid-cols-1 gap-5
                        md:grid-cols-2 lg:grid-cols-4 ' >            
              { apartments.map((i) => (
                <Residences_item key={i.id} id={i.id} sold={i.sold} title={i.title} number={i.number} type={i.type} size={i.size} image={i.image} floor={i.floor} purchased_by={i.purchased_by} />
              ))}                       
          </div>
        </div>

        <footer>
            <MainFooter />
        </footer>
    </div>
  )
}

export default Residences