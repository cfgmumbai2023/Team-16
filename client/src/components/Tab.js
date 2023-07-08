import React, { useState } from 'react'

const Tab = (props) => {
  const [style, setStyle] = useState("flex items-center px-2 py-2 my-2 cursor-pointer transition ease-in rounded-md hover:text-darkest-blue hover:bg-white hover:text-primary")

  return (
    <div className={style} 
    >
        {props.icon}&nbsp;<span>{props.title}</span>
    </div>
  )
}

export default Tab