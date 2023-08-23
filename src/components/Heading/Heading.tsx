import React from 'react'

const Heading = ({title} : {title: string}) => {
  return (
    <h1 className="text-2xl font-bold text-sky-500">{title}</h1>
  )
}

export default Heading
