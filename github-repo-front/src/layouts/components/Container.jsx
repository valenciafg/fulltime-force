import React from 'react'

export const Container = ({ children }) => {
  return (
    <div className='container mx-auto h-screen bg-red-300 '>
      <div className='py-20 px-5 bg-green-400'>
        {children}
      </div>
    </div>
  )
}
