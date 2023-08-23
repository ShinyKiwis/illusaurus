import React from 'react'

const Button = ({content, action} : {content: string; action?: string}) => {
  const colorStyle = action === 'delete' ? 'bg-rose-500 hover:bg-rose-600' : 'bg-lime-500 hover:bg-lime-600' 
  return (
    <button className={`rounded-lg text-white ${colorStyle} shadow-lg shadow-slate-400/40 font-semibold text-sm px-2 py-1`}>
      {content}
    </button>
  )
}

export default Button 
