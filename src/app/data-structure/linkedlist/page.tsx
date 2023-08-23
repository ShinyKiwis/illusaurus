"use client"
import Button from '@/components/Button/Button'
import Heading from '@/components/Heading/Heading'
import Input from '@/components/Input/Input'
import React, { useState } from 'react'

const LinkedListContainer = () => {
  const [nodeValue, setNodeValue] = useState<number | null>(null)
  const [nodeIdx, setNodeIdx] = useState<number | null>(null)
  return (
    <>
      <Heading title='Linked List' />
      <div>
        <div className='mx-auto md:ms-4 mt-2 w-11/12 md:w-1/5'>
          <h2 className='font-semibold'>Actions</h2>
          <Input placeholder='Node value...'/>
          <Input placeholder='Node index...'/>
          <div className='flex mt-2 mb-6 gap-2 justify-between'>
            <Button content='Insert to head' />
            <Button content='Insert at index' />
            <Button content='Insert to tail' />
          </div>
          <Input placeholder='Multiple node values...'/>
          <div className='mt-2 mb-12'>
            <Button content='Create list' />
          </div>

          <Input placeholder='Node value to remove...' action='delete'/>
          <Input placeholder='Node index to remove...' action='delete'/>
          <div className='flex mt-2 mb-12 gap-2 justify-between'>
            <Button content='Remove node' action='delete' />
            <Button content='Remove node at index' action='delete'/>
          </div>
          <Input placeholder='Node value to find...'/>
          <div className='mt-2 mb-12'>
            <Button content='Find node' />
          </div>

          <Input placeholder='Node numbers'/>
          <div className='flex mt-2 mb-6 gap-2 justify-between'>
            <Button content='Generate random list' />
            <Button content='Clear list' action='delete'/>
          </div>
        </div>
      </div>
    </>
  )
}

export default LinkedListContainer
