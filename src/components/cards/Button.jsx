import React from 'react'
import FadeUp from './FadeUp';

const Button = (props) => {
  return (
    <FadeUp className={`${props.addClass}`}>
      <button className={`mt-10 text-lg font-medium uppercase bg-[#E8E8E8] py-2 px-4 flex items-center gap-2 rounded-full ${props.btnClass}`}>
      
                  {props.btnName}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-6 h-6 inline"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                    />
                  </svg>
              </button>
    </FadeUp>
  )
}

export default Button