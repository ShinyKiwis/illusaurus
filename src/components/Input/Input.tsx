import React, { ChangeEvent } from 'react'

type InputProps = {
  placeholder: string;
  action?: string;
  handleOnChange: (event: ChangeEvent<HTMLInputElement>, handler: React.Dispatch<React.SetStateAction<number|null>>) => void;
  handler: React.Dispatch<React.SetStateAction<number|null>>;
}

const Input = ({placeholder,action, handleOnChange, handler}: InputProps)  => {
  const colorStyle = action === 'delete' ? 'focus-within:border-rose-500' : 'focus-within:border-lime-500'
  return (
    <div className={`border-2 border-slate-400 ${colorStyle} rounded-md px-2 py-1 mt-2 text-sm`}>
      <input className='w-full focus:outline-none' placeholder={placeholder} onChange={e => handleOnChange(e, handler)}/>
    </div>
  )
}

export default Input
