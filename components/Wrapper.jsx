import React from 'react'

const Wrapper = ({ children , className}) => {
    return (
      <div className={`
      px-8
      md:px-32
      pt-[120px]
      md:pt-[var(--header-height)]
      ${className || ""}
      `}>{ children }</div>
    )
  }

export default Wrapper


//md:pt-[var(--header-height)]