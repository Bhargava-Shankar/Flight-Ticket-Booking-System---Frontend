import React from 'react'

const SeatClass = () => {
  return (
      <div>
          <p className='text-2xl font-bold mb-3 mt-2'>Seat Class</p>
          <ul className='flex flex-col gap-2 ml-2 font-semibold'>
              <li className='flex flex-row gap-2'>
                  <input type="checkbox" name="" id="" />
                  <p>First Class</p>
              </li>
              <li className='flex flex-row gap-2'>
                  <input type="checkbox" name="" id="" />
                  <p>Business Class</p>
              </li>
              <li className='flex flex-row gap-2'>
                  <input type="checkbox" name="" id="" />
                  <p>Economy Class</p>
              </li>
      </ul>
    </div>
  )
}

export default SeatClass
