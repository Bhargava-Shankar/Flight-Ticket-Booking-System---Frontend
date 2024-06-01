import AirPlaneCardHeader from "./AirplaneCardHeader"
import AirPlaneDetails from "./AirplaneDetails"
import AirplanePrices from "./AirplanePrices"
const AirplaneCard = () => {
  return (
    <div className='flex flex-row justify-between bg-[#252525] h-[12rem] w-[80rem] rounded-2xl text-white m-10 pl-4 pt-4'>
      <div className="flex flex-col w-full h-full">
          <AirPlaneCardHeader />
          <AirPlaneDetails/>
      </div>
      <div className="border-dashed border-l-2 h-[10rem] mr-4">
            
      </div>
      <div className="w-[20rem]">
          <AirplanePrices/>
      </div>
    </div>
  )
}

export default AirplaneCard
