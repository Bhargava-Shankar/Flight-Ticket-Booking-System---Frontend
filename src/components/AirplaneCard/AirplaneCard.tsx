import AirPlaneCardHeader from "./AirplaneCardHeader"
import AirPlaneDetails from "./AirplaneDetails"
import AirplanePrices from "./AirplanePrices"
const AirplaneCard = () => {
  return (
    <div className='flex flex-row justify-between bg-[#252525] h-[13rem] w-[70rem] rounded-2xl text-white pl-4 pt-4'>
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
