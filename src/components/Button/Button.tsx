import React, { MouseEvent }  from 'react'

type ButtonProps = {
  content: string;
  action?: string;
  handleOnClick: (event: MouseEvent<HTMLButtonElement>) => void;
}

const Button = ({content, action, handleOnClick} : ButtonProps) => {
  const colorStyle = action?.includes('delete') ? 'bg-rose-500 hover:bg-rose-600' : 'bg-lime-500 hover:bg-lime-600' 
  return (
    <button className={`rounded-lg text-white ${colorStyle} shadow-lg shadow-slate-400/40 font-semibold text-sm px-2 py-1`} onClick={e => handleOnClick(e)}>
      {content}
    </button>
  )
}

export default Button 
