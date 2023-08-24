"use client"
import Button from '@/components/Button/Button'
import Heading from '@/components/Heading/Heading'
import Input from '@/components/Input/Input'
import LinkedListCanvas from '@/components/LinkedList/LinkedList'
import LinkedList from '@/data-structures/linkedlist'
import React, { ChangeEvent, MouseEvent, useRef, useState } from 'react'

const LinkedListContainer = () => {
  const formRef = useRef<HTMLFormElement | null>(null)
  const [list, setList] = useState(new LinkedList())
  const [listData, setListData] = useState<number[] | []>([])
  const [nodeValue, setNodeValue] = useState<number | null>(null)
  const [nodeIdx, setNodeIdx] = useState<number | null>(null)

  const handleChangeNodeValue = (event: ChangeEvent<HTMLInputElement>, handler: React.Dispatch<React.SetStateAction<number|null>>) => {
    const value = +event.target.value
    handler(value)
  }

  const handleListOperation = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
    if(nodeValue !== null) {
      const action = event.currentTarget.textContent!.toLowerCase()
      switch(action) {
        case 'insert to head':
          list.insert(nodeValue, 0)
        break
        case 'insert to tail':
          list.insert(nodeValue, list.length)
        break
        default:
          list.insert(nodeValue, nodeIdx!)
          setNodeIdx(null)
        break
      }
      setNodeValue(null)
      setList(list)
      setListData(list.getValues())
      formRef.current?.reset()
    }
  }
  list.debug()

  return (
    <>
      <Heading title='Linked List' />
      <div className='flex flex-col md:flex-row gap-4'>
        <div className='mx-auto md:ms-4 mt-2 w-11/12 md:w-fit'>
          <h2 className='font-semibold'>Actions</h2>
          <form ref={formRef}>
            <Input placeholder='Node value...' handleOnChange={handleChangeNodeValue} handler={setNodeValue}/>
            <Input placeholder='Node index...' handleOnChange={handleChangeNodeValue} handler={setNodeIdx}/>
            <div className='flex mt-2 mb-6 gap-2 justify-between'>
              <Button content='Insert to head' handleOnClick={handleListOperation}/>
              <Button content='Insert at index' handleOnClick={handleListOperation}/>
              <Button content='Insert to tail' handleOnClick={handleListOperation}/>
            </div>
            <Input placeholder='Multiple node values...' handleOnChange={handleChangeNodeValue} handler={setNodeValue}/>
            <div className='mt-2 mb-12'>
              <Button content='Create list' handleOnClick={handleListOperation}/>
            </div>

            <Input placeholder='Node value to remove...' action='delete' handleOnChange={handleChangeNodeValue} handler={setNodeValue}/>
            <Input placeholder='Node index to remove...' action='delete' handleOnChange={handleChangeNodeValue} handler={setNodeIdx}/>
            <div className='flex mt-2 mb-12 gap-2 justify-between'>
              <Button content='Remove node' action='delete' handleOnClick={handleListOperation} />
              <Button content='Remove node at index' action='delete' handleOnClick={handleListOperation}/>
            </div>
            <Input placeholder='Node value to find...' handleOnChange={handleChangeNodeValue} handler={setNodeValue}/>
            <div className='mt-2 mb-12'>
              <Button content='Find node' handleOnClick={handleListOperation}/>
            </div>

            <Input placeholder='Node numbers' handleOnChange={handleChangeNodeValue} handler={setNodeValue}/>
            <div className='flex mt-2 mb-6 gap-2 justify-between'>
              <Button content='Generate random list' handleOnClick={handleListOperation}/>
              <Button content='Clear list' action='delete' handleOnClick={handleListOperation}/>
            </div>
          </form>
        </div>
        <div className='w-full'>
          <LinkedListCanvas data={listData}/>
        </div>
      </div>
    </>
  )
}

export default LinkedListContainer
