import React, { useState,useRef} from 'react'
import Header from './components/Header'
import LaptopCards from './components/LaptopCards'

import Processor from './components/Processor'
import ProcessorGeneration from './components/ProcessorGeneration'
import Brand from './components/Brand'
import Type from './components/Type'
import RamCapacity from './components/RamCapacity'
import SSDCapacity from './components/SSDCapacity'
import GraphicProcessorSeries from './components/GraphicProcessorSeries'
import ScreenSize from './components/ScreenSize'
import OperatingSystem from './components/OperatingSystem'
import Lifestyle from './components/Lifestyle'
import Weight from './components/Weight'
import TouchScreen from './components/TouchScreen'
import ProcessorBrand from './components/ProcessorBrand'
import Usage from './components/Usage'
import DedicatedGraphicsMemory from './components/DedicatedGraphicsMemory'
import StorageType from './components/StorageType'
import GraphicMemoryType from './components/GraphicMemoryType'
import GraphicProcessorName from './components/GraphicProcessorName'
import HardDiskCapacity from './components/HardDiskCapacity'
import RamType from './components/RamType'
import Features from './components/Features'
import Availability from './components/Availability'
import Discount from './components/Discount'
import CustomerRatings from './components/CustomerRatings'
import GSTInvoiceAvailable from './components/GSTInvoiceAvailable'
import Offers from './components/Offers'
import Price from './components/Price'
import laptops from './components/laptopData'


const App = () => {

  const [productList, setProductList] = useState(laptops);
  const searchRef = useRef(null);
  const searchLaptop = ()=>{
    const filteredProducts = laptops.filter((laptop)=>{
      return laptop.name.toLowerCase().includes(searchRef.current.value.toLowerCase())
    })
    if (searchRef.current.value === ''){
      setProductList(laptops)
    }else{
      setProductList(filteredProducts)
    }
  }

  return (
    <>
      {/* <SearchModel /> */}
      <Header/>
      <div className='grid grid-rows-1 bg-gray-100 max-w-screen-2xl mx-auto pt-20'>
        <div className=' col-start-1 col-span-4 m-4 border shadow bg-white px-4'>
          <div>
            <div id="accordion-collapse" data-accordion="collapse">
            <Price />
            <hr />
            <Brand />
            <hr />
            <Type />
            <hr />
            <Processor/>
            <hr />
            <ProcessorGeneration />
            <hr />
            <RamCapacity />
            <hr />
            <SSDCapacity />
            <hr />
            <GraphicProcessorSeries />
            <hr />
            <ScreenSize />
            <hr />
            <OperatingSystem />
            <hr />
            <Lifestyle />
            <hr />
            <Weight />
            <hr />
            <TouchScreen />
            <hr />
            <ProcessorBrand />
            <hr />
            <Usage />
            <hr />
            <DedicatedGraphicsMemory />
            <hr />
            <Features />
            <hr />
            <StorageType />
            <hr />
            <GraphicMemoryType />
            <hr />
            <GraphicProcessorName />
            <hr />
            <HardDiskCapacity />
            <hr />
            <RamType />
            <hr />
            <Availability />
            <hr />
            <Discount />
            <hr />
            <CustomerRatings />
            <hr />
            <GSTInvoiceAvailable />
            <hr />
            <Offers />
            <hr />
            </div>
          </div>
        </div>
        <div className='col-start-5 col-span-12  my-4 mr-4 border shadow'>
          <LaptopCards results={productList}/>
        </div>
      </div>
    </>
  )
}

export default App