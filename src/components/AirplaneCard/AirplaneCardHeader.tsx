import airLineLogo from "../../assets/airline-logos/airasia.png";
const AirPlaneCardHeader = () => {
  return (
    <div className="flex flex-row gap-4 items-center">
          <div className="w-[5rem]">
              <img src={airLineLogo} alt="" />
          </div>
          <div className="text-[1.2rem] font-bold">
              <h1>Air Asia Pvt. Ltd</h1>
      </div>
      <div className="text-[0.8rem] pt-1 pb-1 px-2 rounded-md bg-amber-400 text-black font-bold">
        AA-X478
      </div>
    </div>
  )
}

export default AirPlaneCardHeader
