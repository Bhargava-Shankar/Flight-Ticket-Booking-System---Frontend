
const AirplanePrices = () => {
  return (
    <div className='flex flex-col gap-2 mr-4'>
          <div className='flex flex-row justify-between font-bold bg-[#6F00B3] rounded-md m-1 outline outline-2 outline-amber-400  p-2'>
              <div> 
                  INR 86,420 
              </div>
              <div>First Class</div>
          </div>

          <div className='flex flex-row justify-between font-bold bg-[#007CB2] rounded-md m-1 outline outline-2 p-2'>
              <div> 
                  INR 46,220 
              </div>
              <div>Business Class</div>
          </div>

          <div className='flex flex-row justify-between font-bold bg-[#FFFFFF] rounded-md m-1 outline outline-2 p-2 text-black'>
              <div> 
                  INR 23,269 
              </div>
              <div>Economy</div>
          </div>
         
    </div>
  )
}

export default AirplanePrices
