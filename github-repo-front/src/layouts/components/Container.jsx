import React from 'react'

export const Container = ({ children }) => {
  return (
    <div className='container mx-auto'>
      <div className='py-20 px-5'>
        {children}
      </div>
    </div>
  )
}
