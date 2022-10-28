import React from 'react'

export const Footer = () => {
  return (
    <footer className='relative bg-blueGray-200 pt-8 pb-6'>
      <hr className='my-6 border-blueGray-300' />
          <div className='flex flex-wrap items-center md:justify-between justify-center'>
            <div className='w-full md:w-4/12 px-4 mx-auto text-center'>
              <div className='text-sm text-blueGray-500 font-semibold py-1'>
                Copyright © {new Date().getFullYear()} Github Commits by{' '}
                <a
                  href='https://www.creative-tim.com?ref=nr-footer'
                  className='text-blueGray-500 hover:text-blue-700'
                >
                  Víctor Valencia
                </a>
                .
              </div>
            </div>
          </div>
    </footer>
    
  )
}
