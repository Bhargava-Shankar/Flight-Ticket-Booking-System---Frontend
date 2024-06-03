import SeatClass from './components/SeatClass'
import Pricing from './components/Pricing'
import Departure from './components/Departure'

const FilterPanel = () => {
  return (
      <div className='bg-[#252525] h-[42rem] w-[22rem] rounded-lg text-white pt-3 px-3 '>
          <div className='flex flex-row items-center mb-2 justify-between'>
              <p className='font-bold text-[1.8rem]'>Filters</p>
              <p className="text-blue-800 underline">Reset</p>
          </div>
          <hr />
          <Pricing />
          <hr />
      <SeatClass />
      <hr />
      <Departure/>
    </div>
  )
}

export default FilterPanel
