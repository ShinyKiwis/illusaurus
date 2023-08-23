import React from 'react'

type InputProps = {
  placeholder: string;
  action?: string
}

const Input = ({placeholder,action }: InputProps)  => {
  const colorStyle = action === 'delete' ? 'focus-within:border-rose-500' : 'focus-within:border-lime-500'
  return (
    <div className={`border-2 border-slate-400 ${colorStyle} rounded-md px-2 py-1 mt-2 text-sm`}>
      <input className='w-full focus:outline-none' placeholder={placeholder}/>
    </div>
  )
}

export default Input
