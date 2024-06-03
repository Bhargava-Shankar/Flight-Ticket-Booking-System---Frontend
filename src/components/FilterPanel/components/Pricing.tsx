import React, { useState } from 'react'
import MultiRangeSlider from "multi-range-slider-react"; 


const Pricing = () => {

  const [minValue, setMinValue] = useState(0);
  const [maxValue, setMaxValue] = useState(0);

  const handleInput = (e: any) => {
    setMinValue(e.minValue);
    setMaxValue(e.maxValue);
}

  return (
    <div className='flex flex-row w-full gap-2 my-4 justify-between items-center'>
      <div className='w-full'>
<MultiRangeSlider
        min={0}
        max={10000}
        step={5}
        onInput={(e) => {
          handleInput(e);
          }}
          minValue={10}
          maxValue = {5000}
        label={false}
        ruler={false}
        
      ></MultiRangeSlider>
      </div>
      
      <button className='p-1 px-2 rounded-md font-bol bg-white text-black outline-none'>Done</button>
    </div>
  )
}

export default Pricing
