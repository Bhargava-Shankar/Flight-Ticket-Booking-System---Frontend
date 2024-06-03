import React from 'react'

const Departure = () => {
  return (
    <div>
          <p className='text-2xl font-bold mt-2 mb-2'>Departure Time</p>
          <ul>
              <li  className="flex flex-row justify-start items-center font-semibold gap-2 ml-2 mb-2">
                  <input type="checkbox" name="" id="" />
                  <p>Before 6 am</p>
              </li>
             
              <li className="flex flex-row justify-start items-center font-semibold gap-2 ml-2 mb-2">
                  <input type="checkbox" name="" id="" />
                  <p>Between 6am to 12pm</p>
              </li>
             
              <li className="flex flex-row justify-start items-center font-semibold gap-2 ml-2 mb-2">
                  <input type="checkbox" name="" id="" />
                  <p>Between 12pm to 6pm</p>
              </li>
             
              <li className="flex flex-row justify-start items-center font-semibold gap-2 ml-2 mb-2">
                  <input type="checkbox" name="" id="" />
                  <p>After 6pm</p>
              </li>
        </ul>
    </div>
  )
}

export default Departure
