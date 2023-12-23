import React from 'react'
import Header from './components/Header'
import Filters from './components/Filters'
import LaptopCards from './components/LaptopCards'

const App = () => {
  return (
    <>
      <Header/>
      <div className='grid grid-rows-1 bg-gray-100'>
        <div className=' col-start-1 col-span-1 m-4 border shadow bg-white'>
          <Filters />
        </div>
        <div className='col-start-2 col-span-12 bg-emerald-500 my-4 border shadow '>
          <LaptopCards />
        </div>
      </div>
    </>
  )
}

export default App