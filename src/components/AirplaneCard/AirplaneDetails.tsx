const AirplaneDetails = () => {
  return (
    <div className="flex flex-row gap-5 items-center justify-evenly mt-7">
      <div className="flex flex-col items-center">
              <div className="font-bold text-3xl">
                  11:30
              </div>
              <div className="font-semibold">
                  24-July
              </div>
      </div>
      <div>
        <center className="font-semibold">2 hours</center>
        <div className="w-[8rem] h-[1px] bg-white">
        
        </div>
      </div>
      
      <div className="flex flex-col items-center">
              <div className="font-bold text-3xl">
                  11:30
              </div>
              <div className="font-semibold">
                  24-July
              </div>
        </div>
    </div>
  )
}

export default AirplaneDetails
