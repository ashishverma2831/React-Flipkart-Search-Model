import React from 'react'
import Header from './components/Header'
import Filters from './components/Filters'
import LaptopCards from './components/LaptopCards'

const App = () => {
  return (
    <>
      <Header/>
      <div className='grid grid-rows-1 bg-gray-100 max-w-screen-2xl mx-auto'>
        <div className=' col-start-1 col-span-4 m-4 border shadow bg-white'>
          <Filters />
        </div>
        <div className='col-start-5 col-span-12  my-4 mr-4 border shadow'>
          <LaptopCards />
        </div>
      </div>
    </>
  )
}

export default App