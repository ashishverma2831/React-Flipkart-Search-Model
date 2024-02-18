import React, { useState, useRef } from 'react'
// import Header from './components/Header'
// import LaptopCards from './components/LaptopCards'

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
import BrowseLaptop from './components/BrowseLaptop'
// import laptops from './components/laptopData'


const App = () => {

  // const [productList, setProductList] = useState(laptops);
  // const searchRef = useRef(null);
  // // console.log(searchRef.current.value);
  // const searchLaptop = () => {
  //   const filteredProducts = laptops.filter((laptop) => {
  //     return laptop.name.toLowerCase().includes(searchRef.current.value.toLowerCase())
  //   })
  //   if (searchRef.current.value === '') {
  //     setProductList(laptops)
  //   }
  //   setProductList(filteredProducts)
  //   console.log(filteredProducts);
  // }


  // const prices = [
  //   "Below 20,000",
  //   "Above 20,000 & Below 30,000",
  //   "Above 30,000 & Below 40,000",
  //   "Above 40,000 & Below 50,000",
  //   "Above 50,000 & Below 60,000",
  //   "Above 60,000 & Below 70,000",
  //   "Above 70,000 & Below 80,000",
  //   "Above 80,000"
  // ];

  //   const brands = [
  //     "HP",
  //     "Asus",
  //     "Lenevo",
  //     "Dell",
  //     "MSI",
  //     "Apple",
  //     "Samsung",
  //     "Zebronics",
  //     "Microsoft",
  //     "Honor",
  //     "Acer",
  //     "Primebook"
  // ];


  // const [selectedBrand, setSelectedBrand] = useState([]);

  // const handleBrand = (e, brand) => {
  //   console.log(e.target.checked);
  //   if (selectedBrand.includes(brand)) {
  //     const filteredBrand = selectedBrand.filter((b)=>{return b!==brand});
  //     if(filteredBrand.length===0){
  //       setProductList(laptops);
  //     }
  //     else{
  //       const filteredData = laptops.filter((laptop)=>{
  //         return filteredBrand.includes(laptop.brand);
  //       })
  //       setProductList(filteredData)
  //       // console.log(filteredData);
  //     }
  //     setSelectedBrand(filteredBrand);
  //     console.log(filteredBrand);
  //     }
  //   else {
  //     const filteredBrand = [...selectedBrand, brand];
  //     const filteredData = laptops.filter((laptop) => {
  //       return filteredBrand.includes(laptop.brand)
  //     })
  //     setProductList(filteredData)
  //     setSelectedBrand(filteredBrand);
  //     console.log([...selectedBrand, brand]);
  //   }
  // }


  return (
    <>
      {/* <SearchModel /> */}
      {/* <Header/> */}

      {/* <header className='bg-[#2874f0] shadow-lg fixed w-full'>
        <div className='max-w-screen-xl mx-auto py-2 flex items-center justify-center'>
          <div className='flex flex-col mx-4'>
            <img width={80} src='/flipkart-plus_8d85f4.png' className='text-white' alt='logo' />
            <p className='text-white italic flex font-semibold text-sm hover:underline  justify-center'>Explore <span className='text-yellow-300 font-semibold'>Plus </span><img className='w-4 mr-1 h-4' src='https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/plus_aef861.png' /></p>
          </div>
          <div className='w-1/3'>
            <div className="flex">
              <div className="relative w-full">
                <input type="search" id="search-dropdown" className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-e-lg rounded-s-gray-100 rounded border border-gray-300 " placeholder="Search laptops..." ref={searchRef} required />
                <button type="submit" className="absolute top-0 end-0 p-2.5 h-full text-sm font-medium text-white bg-blue-700 rounded-e-lg border border-blue-700 hover:bg-blue-800 " onClick={searchLaptop}>
                  <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          <button type="button" className="text-blue-800 bg-white focus:outline-none  text-lg font-semibold text-md px-10 py-1.5 my-auto rounded text-center inline-flex items-center mx-4">Login</button>
          <a href='#' className='text-white mx-2 text-lg font-medium'>Become a Seller</a>

          <button id="dropdownHoverButton" data-dropdown-toggle="dropdownHover" data-dropdown-trigger="hover" className="mx-4 text-white focus:outline-none font-medium text-lg px-5 py-2.5 text-center inline-flex items-center" type="button">More
            <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
            </svg>
          </button>
          <div id="dropdownHover" className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-50 dark:bg-gray-700">
            <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownHoverButton">
              <li><a href="#" className="block px-4 py-2 hover:bg-gray-100 ">Notification Preferences</a></li><hr />
              <li><a href="#" className="block px-4 py-2 hover:bg-gray-100 ">24x7 Customer Care</a></li><hr />
              <li><a href="#" className="block px-4 py-2 hover:bg-gray-100 ">Advertise</a></li><hr />
              <li><a href="#" className="block px-4 py-2 hover:bg-gray-100 ">Download App</a></li>
            </ul>
          </div>

          <button type="button" className="text-white font-semibold text-lg px-5 py-2.5 text-center inline-flex items-center">
            <svg className="w-4 h-4 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 21">
              <path d="M15 12a1 1 0 0 0 .962-.726l2-7A1 1 0 0 0 17 3H3.77L3.175.745A1 1 0 0 0 2.208 0H1a1 1 0 0 0 0 2h.438l.6 2.255v.019l2 7 .746 2.986A3 3 0 1 0 9 17a2.966 2.966 0 0 0-.184-1h2.368c-.118.32-.18.659-.184 1a3 3 0 1 0 3-3H6.78l-.5-2H15Z" />
            </svg>
            Cart
          </button>
        </div>
      </header> */}

      {/* <div className='grid grid-rows-1 bg-gray-100 max-w-screen-2xl mx-auto pt-20'>
        <div className=' col-start-1 col-span-4 m-4 border shadow bg-white px-4'>
          <div>
            <div id="accordion-collapse" data-accordion="collapse">
              <div>
                <h2 id="accordion-collapse-heading-25">
                  <button
                    type="button"
                    class="flex items-center justify-between w-full p-3 font-medium rtl:text-right text-gray-500 "
                    data-accordion-target="#accordion-collapse-body-25"
                    aria-expanded="true"
                    aria-controls="accordion-collapse-body-25"
                  >
                    <span>Price</span>
                    <svg
                      data-accordion-icon
                      class="w-3 h-3 rotate-180 shrink-0"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 10 6"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M9 5 5 1 1 5"
                      />
                    </svg>
                  </button>
                </h2>
                <div
                  id="accordion-collapse-body-25"
                  class="hidden"
                  aria-labelledby="accordion-collapse-heading-25"
                >
                  <div class="p-5 border border-b-0 border-gray-200 ">
                    {prices.map((p) => {
                      return (
                        <div class="flex items-center mb-4">
                          <input checked={selectedPrice.includes(p)} onChange={(e) => { handlePrice(e, p) }} id="default-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded" />
                          <label for="default-checkbox" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">{p}</label>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
              <hr />
              <div>
        <h2 id="accordion-collapse-heading-3">
                <button
                    type="button"
                    class="flex items-center justify-between w-full p-3 font-medium rtl:text-right text-gray-500 "
                    data-accordion-target="#accordion-collapse-body-3"
                    aria-expanded="true"
                    aria-controls="accordion-collapse-body-3"
                >
                    <span>Brand</span>         
                    <svg
                        data-accordion-icon
                        class="w-3 h-3 rotate-180 shrink-0"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 10 6"
                    >
                        <path
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M9 5 5 1 1 5"
                        />
                    </svg>
                </button>
            </h2>
            <div
                id="accordion-collapse-body-3"
                class="hidden"
                aria-labelledby="accordion-collapse-heading-3"
            >
                <div class="p-5 border border-b-0 border-gray-200 ">
                    {brands.map((brand) => {
                        return (
                            <div class="flex items-center mb-4">
                                <input id="default-checkbox" checked={selectedBrand.includes(brand)} onChange={(e)=>{handleBrand(e,brand)}} type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded"/>
                                <label for="default-checkbox" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">{brand}</label>
                            </div>
                        );
                    })}
                </div>
            </div>
    </div>
              <hr />
              <Type />
              <hr />
              <Processor />
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
          {productList.map((laptop) => {
            return (
              <div key={laptop.id} className="flex flex-col items-center bg-white border justify-between border-gray-200  shadow md:flex-row ">
                <img className="object-contain w-full md:w-1/3 min-h-72 p-4" src={laptop.img_link} alt="photo" />
                <div className="flex flex-col justify-between p-4 ml-2 flex-1 w-full hover:bg-gray-50 ">
                  <h5 className="text-2xl font-semibold tracking-tight text-gray-900 ">{laptop.name}</h5>
                  <p className=" my-2 text-gray-700 font-medium">
                    {laptop.rating ?
                      <span className=" text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600  font-medium rounded text-sm px-2 py-1 text-center mr-2">{laptop.rating} <i className="fa-solid fa-star"></i></span>
                      : ''
                    }
                    {laptop.no_of_ratings ? laptop.no_of_ratings : 0} Ratings & {laptop.no_of_reviews ? laptop.no_of_reviews : 'No'} Reviews
                  </p>
                  <ul className="max-w-md text-gray-500 list-disc list-inside ">
                    <li><span className='text-black'>{laptop.processor}</span></li>
                    <li><span className='text-black'>{laptop.ram} RAM</span></li>
                    <li><span className='text-black'>{laptop.os} Operating System</span></li>
                    <li><span className='text-black'>{laptop.storage} Storage</span></li>
                    <li><span className='text-black'>{laptop.display * 2.54} cm ({laptop.display} Inch) Display</span></li>
                    <li><span className='text-black'>1 Year Onsite Warranty</span></li>
                  </ul>
                  <div className=' my-2 flex justify-between items-center'>
                    <div>
                      <p className='font-semibold text-2xl'>₹{laptop.price - laptop.price / 10}</p>
                      <p><s className='text-gray-600 mr-1'>₹{laptop.price}</s><span className='text-green-500 font-bold'>10% off</span></p>
                    </div>
                    <button type="button" className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br  shadow-lg shadow-blue-500/50  font-medium rounded-lg text-sm px-5 py-2.5 text-center">Buy now</button>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div> */}

      <BrowseLaptop />
    </>
  )
}

export default App