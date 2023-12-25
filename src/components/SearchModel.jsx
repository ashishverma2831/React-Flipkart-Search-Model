import React, { useRef, useState } from 'react'
import laptops from './laptopData'

const SearchModel = () => {

    const [productList, setProductList] = useState(laptops);
    const laptopRef = useRef(null);
    const searchLaptop = ()=>{
      const filterProducts = laptops.filter((lappy)=>{
          return lappy.name.toLowerCase().includes(laptopRef.current.value.toLowerCase());
      })
      setProductList(filterProducts);
    }


    
const availability = [
    "Include Out of Stock"
  ];
  
  
  const brands = [
    "HP",
    "Asus",
    "Lenevo",
    "Dell",
    "MSI",
    "Apple",
    "Samsung",
    "Zebronics",
    "Microsoft",
    "Honor",
    "Acer",
    "Primebook"
  ];
//   const [selectedBrands, setSelectedBrands] = useState([]);
//   const choosenBrand = ((e,brand)=>{
//     console.log(e.target.checked);
//     if(selectedBrands.includes(brand)){
//         const filteredBrands = selectedBrands.filter((b)=>{return b!==brand});
//         if(filteredBrands.length===0){
//             setProductList(laptops);
//         }
//         else{
//             const filteredBrands = laptops.filter((laptop)=>{
//                 // return filteredBrands.includes(laptop.name)
//                 return filteredBrands.findIndex((val)=> val === laptop.brand ) > -1;
//             })
//             setProductList(filteredBrands);
//         }
//         setSelectedBrands(filteredBrands)
//         console.log(filteredBrands);
//     }
//     else{
//         const filteredBrands = [...setSelectedBrands,brand]
//         const filteredData = laptops.filter()
//     }
//   })
  
  const customerRatings = [
          "4",
          "3",
          "2",
          "1"
      ];
  
  
  
    const dedicatedGraphicsMemory = [
        "4 GB",
        "Integrated Graphics Card",
        "6 GB",
        "2 GB",
        "8 GB",
        "512 MB",
        "16 GB",
        "12 GB"
    ];
  
    const discounts = [
      "50% or more",
      "40% or more",
      "30% or more",
      "20% or more",
      "10% or more"
  ];
  
  
  const features = [
    "Backlit Keyboard",
    "Full HD Display",
    "MS Office",
    "No Optical Disk Drive"
  ];
  
  const graphicsMemoryTypes = [
    "GDDR3",
    "GDDR5X",
    "LPDDR5",
    "DDR5",
    "GDDR5",
    "DDR4",
    "GDDR6"
  ];
  
  const graphicsProcessorName = [
    "Intel Integrated",
    "AMD Radeon",
    "NVIDIA GeForce RTX",
    "AMD Radeon RDNA 3",
    "Arc A370M",
    "MediaTek Integrated",
    "NVIDIA Quadro",
    "NVIDIA GeForce",
    "NVIDIA GeForce GTX"
  ];
  
  const graphics = [
    "Iris Xe Graphics",
    "3050",
    "1650",
    "4050",
    "Radeon",
    "Intel UHD",
    "RTX 2050",
    "Iris Plus 655",
    "GTX-1650",
    "4GB RTX 3050",
    "2070 Max-Q",
    "2GB MX330"
  ];
  
  const gst = [
    "GST Invoice Available"
  ];
  
  const hardDiskCapacity = [
    "1 TB",
    "2 TB",
    "256 GB",
    "512 GB"
  ];
  
  const lifestyle = [
    "Processing & Multitasking",
    "Gaming",
    "Travel & Business",
    "Everday Use",
    "Learning",
    "Entertainment",
    "Performance"
  ];
  
  const offers = [
    "No Cost EMI",
    "Special Price"
  ];
  const operatingSystems = [
    "Windows 10",
    "Mac OS",
    "DOS",
    "Prime OS",
    "Android",
    "Linux/Ubuntu",
    "Chrome",
    "Windows 11 Home",
    "Windows 11"
  ];
  
  const prices = [
    "All",
    "Below 20,000",
    "Above 20,000 & Below 30,000",
    "Above 30,000 & Below 40,000",
    "Above 40,000 & Below 50,000",
    "Above 50,000 & Below 60,000",
    "Above 60,000 & Below 70,000",
    "Above 70,000 & Below 80,000",
    "Above 80,000"
  ];
  const processors = [
    "Core i3",
    "Core i5",
    "Core i7",
    "Core i9",
    "Ryzen 3",
    "Ryzen 5",
    "Ryzen 7",
    "Ryzen 9",
  ];
  const processorbrands = [
    "AMD",
    "Intel",
    "MediaTek",
    "Apple"
  ];
  const processorsGenerations = [
    "10th Gen",
    "11th Gen",
    "12th Gen",
    "13th Gen",
    "3rd Gen",
    "4th Gen",
    "5th Gen",
    "6th Gen",
    "7th Gen",
    "8th Gen",
    "9th Gen",
  ];
  const rams = [
    "4 GB",
    "8 GB",
    "16 GB",
    "32 GB",
    "12 GB",
    "2 GB",
    "36 GB",
    "64 GB",
    "18 GB"
  ];
  
  const ramtype = [
    "DDR4",
    "DDR",
    "DDR4X",
    "LPDDR5X",
    "LPDDR4",
    "DDR3",
    "LPDDR4",
    "Unified Memory",
    "LPDDR4X",
    "LPDDR5",
    "DDR5"
  ];
  const screenSizes = [
    "Below 12 inch",
    "12 inch - 12.9 inch",
    "13 inch - 13.9 inch",
    "14 inch - 14.9 inch",
    "15 inch - 15.9 inch",
    "16 inch - 17.9 inch",
    "18 inch - 20 inch",
    "Above 20 inch"
  ];
  const ssds = [
    "512 GB",
    "256 GB",
    "1 TB",
    "4 TB",
    "64 GB",
    "8 GB",
    "128 GB",
    "2 TB"
  ];
  
  const storagetypes = [
    "SSD",
    "eMMC",
    "HDD"
  ];
  const touchscreen = [
    "Yes",
    "No"
  ];
  const types = [
    "Gaming Laptop",
    "thin and Light Laptop",
    "2 in 1 Laptop",
    "Laptop",
    "Handheld Gaming Laptop",
    "2 in 1 Gaming Laptop",
    "Creator Laptop",
    "Chromebook",
    "Business Laptop",
    "Notebook"
  ];
  const usage = [
    "Business",
    "Gaming, Everyday Use",
    "Gaming, Multimedia",
    "Home/Office/Gaming",
    "Home/Office/Designing",
    "Home/Office",
    "Everyday Use, Office, Student",
    "Gaming",
    "Processing & Multitasking"
  ];
  const weights = [
    "1.2 Kg or Below",
    "1.2 Kg to 1.5 Kg",
    "1.6 Kg to 1.8 Kg",
    "1.9 Kg to 2.1 Kg",
    "2.2 Kg to 2.6 Kg",
    "Above 2.6 Kg"
  ];

  

  return (
    <>
        {/* Header starts */}
        <header className="bg-[#2874f0] shadow-lg fixed w-full">
  <div className="max-w-screen-xl mx-auto py-2 flex items-center justify-center">
    <div className="flex flex-col mx-4">
      <img
        width={80}
        src="/flipkart-plus_8d85f4.png"
        className="text-white"
        alt="logo"
      />
      <p className="text-white italic flex font-semibold text-sm hover:underline  justify-center">
        Explore <span className="text-yellow-300 font-semibold">Plus </span>
        <img
          className="w-4 mr-1 h-4"
          src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/plus_aef861.png"
        />
      </p>
    </div>
   
    <form className="w-1/3">
      <div className="flex">
        <div className="relative w-full">
          <input
            type="search"
            id="search-dropdown"
            className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-e-lg rounded-s-gray-100 rounded border border-gray-300 "
            placeholder="Search laptops..."
            required=""
            ref={laptopRef}
          />
          <button
            type="submit"
            className="absolute top-0 end-0 p-2.5 h-full text-sm font-medium text-white bg-blue-700 rounded-e-lg border border-blue-700 hover:bg-blue-800 "
            onClick={searchLaptop}
          >
            <svg
              className="w-4 h-4"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </button>
        </div>
      </div>
    </form>
    <button
      type="button"
      className="text-blue-800 bg-white focus:outline-none  text-lg font-semibold text-md px-10 py-1.5 my-auto rounded text-center inline-flex items-center mx-4"
    >
      Login
    </button>
    <a href="#" className="text-white mx-2 text-lg font-medium">
      Become a Seller
    </a>
    <button
      id="dropdownHoverButton"
      data-dropdown-toggle="dropdownHover"
      data-dropdown-trigger="hover"
      className="mx-4 text-white focus:outline-none font-medium text-lg px-5 py-2.5 text-center inline-flex items-center"
      type="button"
    >
      More
      <svg
        className="w-2.5 h-2.5 ms-3"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 10 6"
      >
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="m1 1 4 4 4-4"
        />
      </svg>
    </button>
    <div
      id="dropdownHover"
      className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-50 dark:bg-gray-700"
    >
      <ul
        className="py-2 text-sm text-gray-700 dark:text-gray-200"
        aria-labelledby="dropdownHoverButton"
      >
        <li>
          <a href="#" className="block px-4 py-2 hover:bg-gray-100 ">
            Notification Preferences
          </a>
        </li>
        <hr />
        <li>
          <a href="#" className="block px-4 py-2 hover:bg-gray-100 ">
            24x7 Customer Care
          </a>
        </li>
        <hr />
        <li>
          <a href="#" className="block px-4 py-2 hover:bg-gray-100 ">
            Advertise
          </a>
        </li>
        <hr />
        <li>
          <a href="#" className="block px-4 py-2 hover:bg-gray-100 ">
            Download App
          </a>
        </li>
      </ul>
    </div>
    <button
      type="button"
      className="text-white font-semibold text-lg px-5 py-2.5 text-center inline-flex items-center"
    >
      <svg
        className="w-4 h-4 me-2"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 18 21"
      >
        <path d="M15 12a1 1 0 0 0 .962-.726l2-7A1 1 0 0 0 17 3H3.77L3.175.745A1 1 0 0 0 2.208 0H1a1 1 0 0 0 0 2h.438l.6 2.255v.019l2 7 .746 2.986A3 3 0 1 0 9 17a2.966 2.966 0 0 0-.184-1h2.368c-.118.32-.18.659-.184 1a3 3 0 1 0 3-3H6.78l-.5-2H15Z" />
      </svg>
      Cart
    </button>
  </div>
</header>
 
        {/* Header ends */}







        {/* section starts */}
        <div className='grid grid-rows-1 bg-gray-100 max-w-screen-2xl mx-auto pt-20'>
        <div className=' col-start-1 col-span-4 m-4 border shadow bg-white px-4'>
          {/* <Filters /> */}

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
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
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
                {prices.map((price) => {
                    return (
                        <div class="flex items-center mb-4">
                            <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded" />
                            <label for="default-checkbox" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">{price}</label>
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
                                <input id="default-checkbox" type="checkbox" checked={selectedBrands.includes(b)} onChange={(e)=>{choosenBrand(e,b)}} value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded" />
                                <label for="default-checkbox" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">{brand}</label>
                            </div>
                        );
                    })}
                </div>
            </div>
    </div>
            <hr />
            <div>
        <h2 id="accordion-collapse-heading-4">
                <button
                    type="button"
                    class="flex items-center justify-between w-full p-3 font-medium rtl:text-right text-gray-500 "
                    data-accordion-target="#accordion-collapse-body-4"
                    aria-expanded="true"
                    aria-controls="accordion-collapse-body-4"
                >
                    <span>Type</span>         
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
                id="accordion-collapse-body-4"
                class="hidden"
                aria-labelledby="accordion-collapse-heading-4"
            >
                <div class="p-5 border border-b-0 border-gray-200 ">
                    {types.map((type) => {
                        return (
                            <div class="flex items-center mb-4">
                                <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded" />
                                <label for="default-checkbox" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">{type}</label>
                            </div>
                        );
                    })}
                </div>
            </div>
    </div>
            <hr />
            <div>
            <h2 id="accordion-collapse-heading-1">
                <button
                    type="button"
                    class="flex items-center justify-between w-full p-3 font-medium rtl:text-right "
                    data-accordion-target="#accordion-collapse-body-1"
                    aria-expanded="true"
                    aria-controls="accordion-collapse-body-1"
                >
                    <span>Processor</span>         
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
                id="accordion-collapse-body-1"
                class="hidden"
                aria-labelledby="accordion-collapse-heading-1"
            >
                <div class="p-5 border border-b-0 border-gray-200 ">
                    {processors.map((processor) => {
                        return (
                            <div class="flex items-center mb-4">
                                <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded" />
                                <label for="default-checkbox" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">{processor}</label>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
            <hr />
            <div>
        {/* <div id="accordion-collapse" data-accordion="collapse"> */}
        <h2 id="accordion-collapse-heading-2">
          <button
            type="button"
            class="flex items-center justify-between w-full p-3 font-medium rtl:text-right text-gray-500 "
            data-accordion-target="#accordion-collapse-body-2"
            aria-expanded="true"
            aria-controls="accordion-collapse-body-2"
          >
            <span>Processor Generations</span>
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
          id="accordion-collapse-body-2"
          class="hidden"
          aria-labelledby="accordion-collapse-heading-2"
        >
          <div class="p-5 border border-b-0 border-gray-200 ">
            {processorsGenerations.map((processorGen) => {
              return (
                <div class="flex items-center mb-4">
                    <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded " />
                    <label for="default-checkbox" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">{processorGen}</label>
                </div>
              );
            })}
          </div>
        </div>
      {/* </div> */}
    </div>
            <hr />
            <div>
    <h2 id="accordion-collapse-heading-5">
            <button
                type="button"
                class="flex items-center justify-between w-full p-3 font-medium rtl:text-right text-gray-500 "
                data-accordion-target="#accordion-collapse-body-5"
                aria-expanded="true"
                aria-controls="accordion-collapse-body-5"
            >
                <span>Ram Capacity</span>         
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
            id="accordion-collapse-body-5"
            class="hidden"
            aria-labelledby="accordion-collapse-heading-5"
        >
            <div class="p-5 border border-b-0 border-gray-200 ">
                {rams.map((ram) => {
                    return (
                        <div class="flex items-center mb-4">
                            <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded" />
                            <label for="default-checkbox" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">{ram}</label>
                        </div>
                    );
                })}
            </div>
        </div>
</div>
            <hr />
            <div>
        <h2 id="accordion-collapse-heading-6">
                <button
                    type="button"
                    class="flex items-center justify-between w-full p-3 font-medium rtl:text-right text-gray-500 "
                    data-accordion-target="#accordion-collapse-body-6"
                    aria-expanded="true"
                    aria-controls="accordion-collapse-body-6"
                >
                    <span>SSD Capacity</span>         
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
                id="accordion-collapse-body-6"
                class="hidden"
                aria-labelledby="accordion-collapse-heading-6"
            >
                <div class="p-5 border border-b-0 border-gray-200 ">
                    {ssds.map((ssd) => {
                        return (
                            <div class="flex items-center mb-4">
                                <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded" />
                                <label for="default-checkbox" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">{ssd}</label>
                            </div>
                        );
                    })}
                </div>
            </div>
    </div>
            <hr />
            <div>
        <h2 id="accordion-collapse-heading-7">
                <button
                    type="button"
                    class="flex items-center justify-between w-full p-3 font-medium rtl:text-right text-gray-500 "
                    data-accordion-target="#accordion-collapse-body-7"
                    aria-expanded="true"
                    aria-controls="accordion-collapse-body-7"
                >
                    <span>Graphic Processor Series</span>         
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
                id="accordion-collapse-body-7"
                class="hidden"
                aria-labelledby="accordion-collapse-heading-7"
            >
                <div class="p-5 border border-b-0 border-gray-200 ">
                    {graphics.map((gps) => {
                        return (
                            <div class="flex items-center mb-4">
                                <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded" />
                                <label for="default-checkbox" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">{gps}</label>
                            </div>
                        );
                    })}
                </div>
            </div>
    </div>
            <hr />
            <div>
        <div>
    <h2 id="accordion-collapse-heading-8">
            <button
                type="button"
                class="flex items-center justify-between w-full p-3 font-medium rtl:text-right text-gray-500 "
                data-accordion-target="#accordion-collapse-body-8"
                aria-expanded="true"
                aria-controls="accordion-collapse-body-8"
            >
                <span>Screen Size</span>         
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
            id="accordion-collapse-body-8"
            class="hidden"
            aria-labelledby="accordion-collapse-heading-8"
        >
            <div class="p-5 border border-b-0 border-gray-200 ">
                {screenSizes.map((size) => {
                    return (
                        <div class="flex items-center mb-4">
                            <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded" />
                            <label for="default-checkbox" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">{size}</label>
                        </div>
                    );
                })}
            </div>
        </div>
</div>
    </div>
            <hr />
            <div>
         <div>
    <h2 id="accordion-collapse-heading-9">
            <button
                type="button"
                class="flex items-center justify-between w-full p-3 font-medium rtl:text-right text-gray-500 "
                data-accordion-target="#accordion-collapse-body-9"
                aria-expanded="true"
                aria-controls="accordion-collapse-body-9"
            >
                <span>Operating System</span>         
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
            id="accordion-collapse-body-9"
            class="hidden"
            aria-labelledby="accordion-collapse-heading-9"
        >
            <div class="p-5 border border-b-0 border-gray-200 ">
                {operatingSystems.map((os) => {
                    return (
                        <div class="flex items-center mb-4">
                            <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded" />
                            <label for="default-checkbox" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">{os}</label>
                        </div>
                    );
                })}
            </div>
        </div>
</div>
    </div>
            <hr />
            <div>
        <div>
    <h2 id="accordion-collapse-heading-10">
            <button
                type="button"
                class="flex items-center justify-between w-full p-3 font-medium rtl:text-right text-gray-500 "
                data-accordion-target="#accordion-collapse-body-10"
                aria-expanded="true"
                aria-controls="accordion-collapse-body-10"
            >
                <span>Lifestyle</span>         
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
            id="accordion-collapse-body-10"
            class="hidden"
            aria-labelledby="accordion-collapse-heading-10"
        >
            <div class="p-5 border border-b-0 border-gray-200 ">
                {lifestyle.map((ls) => {
                    return (
                        <div class="flex items-center mb-4">
                            <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded" />
                            <label for="default-checkbox" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">{ls}</label>
                        </div>
                    );
                })}
            </div>
        </div>
</div>
    </div>
            <hr />
            <div>
        <div>
    <h2 id="accordion-collapse-heading-11">
            <button
                type="button"
                class="flex items-center justify-between w-full p-3 font-medium rtl:text-right text-gray-500 "
                data-accordion-target="#accordion-collapse-body-11"
                aria-expanded="true"
                aria-controls="accordion-collapse-body-11"
            >
                <span>Weight</span>         
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
            id="accordion-collapse-body-11"
            class="hidden"
            aria-labelledby="accordion-collapse-heading-11"
        >
            <div class="p-5 border border-b-0 border-gray-200 ">
                {weights.map((weight) => {
                    return (
                        <div class="flex items-center mb-4">
                            <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded" />
                            <label for="default-checkbox" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">{weight}</label>
                        </div>
                    );
                })}
            </div>
        </div>
</div>
    </div>
            <hr />
            <div>
        <div>
    <h2 id="accordion-collapse-heading-12">
            <button
                type="button"
                class="flex items-center justify-between w-full p-3 font-medium rtl:text-right text-gray-500 "
                data-accordion-target="#accordion-collapse-body-12"
                aria-expanded="true"
                aria-controls="accordion-collapse-body-12"
            >
                <span>Touch Screen</span>         
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
            id="accordion-collapse-body-12"
            class="hidden"
            aria-labelledby="accordion-collapse-heading-12"
        >
            <div class="p-5 border border-b-0 border-gray-200 ">
                {touchscreen.map((ts) => {
                    return (
                        <div class="flex items-center mb-4">
                            <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded" />
                            <label for="default-checkbox" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">{ts}</label>
                        </div>
                    );
                })}
            </div>
        </div>
</div>
    </div>
            <hr />
            <div>
        <div>
    <h2 id="accordion-collapse-heading-13">
            <button
                type="button"
                class="flex items-center justify-between w-full p-3 font-medium rtl:text-right text-gray-500 "
                data-accordion-target="#accordion-collapse-body-13"
                aria-expanded="true"
                aria-controls="accordion-collapse-body-13"
            >
                <span>Processor Brand</span>         
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
            id="accordion-collapse-body-13"
            class="hidden"
            aria-labelledby="accordion-collapse-heading-13"
        >
            <div class="p-5 border border-b-0 border-gray-200 ">
                {processorbrands.map((pb) => {
                    return (
                        <div class="flex items-center mb-4">
                            <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded" />
                            <label for="default-checkbox" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">{pb}</label>
                        </div>
                    );
                })}
            </div>
        </div>
</div>
    </div>
            <hr />
            <div>
        <div>
    <h2 id="accordion-collapse-heading-14">
            <button
                type="button"
                class="flex items-center justify-between w-full p-3 font-medium rtl:text-right text-gray-500 "
                data-accordion-target="#accordion-collapse-body-14"
                aria-expanded="true"
                aria-controls="accordion-collapse-body-14"
            >
                <span>Usage</span>         
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
            id="accordion-collapse-body-14"
            class="hidden"
            aria-labelledby="accordion-collapse-heading-14"
        >
            <div class="p-5 border border-b-0 border-gray-200 ">
                {usage.map((u) => {
                    return (
                        <div class="flex items-center mb-4">
                            <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded" />
                            <label for="default-checkbox" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">{u}</label>
                        </div>
                    );
                })}
            </div>
        </div>
</div>
    </div>
            <hr />
            <div>
         <div>
    <h2 id="accordion-collapse-heading-15">
            <button
                type="button"
                class="flex items-center justify-between w-full p-3 font-medium rtl:text-right text-gray-500 "
                data-accordion-target="#accordion-collapse-body-15"
                aria-expanded="true"
                aria-controls="accordion-collapse-body-15"
            >
                <span>Dedicated Graphics Memory</span>         
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
            id="accordion-collapse-body-15"
            class="hidden"
            aria-labelledby="accordion-collapse-heading-15"
        >
            <div class="p-5 border border-b-0 border-gray-200 ">
                {dedicatedGraphicsMemory.map((dgm) => {
                    return (
                        <div class="flex items-center mb-4">
                            <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded" />
                            <label for="default-checkbox" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">{dgm}</label>
                        </div>
                    );
                })}
            </div>
        </div>
</div>
    </div>
            <hr />
            <div>
    <h2 id="accordion-collapse-heading-16">
            <button
                type="button"
                class="flex items-center justify-between w-full p-3 font-medium rtl:text-right text-gray-500 "
                data-accordion-target="#accordion-collapse-body-16"
                aria-expanded="true"
                aria-controls="accordion-collapse-body-16"
            >
                <span>Features</span>         
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
            id="accordion-collapse-body-16"
            class="hidden"
            aria-labelledby="accordion-collapse-heading-16"
        >
            <div class="p-5 border border-b-0 border-gray-200 ">
                {features.map((feature) => {
                    return (
                        <div class="flex items-center mb-4">
                            <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded" />
                            <label for="default-checkbox" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">{feature}</label>
                        </div>
                    );
                })}
            </div>
        </div>
</div>
            <hr />
            <div>
    <h2 id="accordion-collapse-heading-5">
            <button
                type="button"
                class="flex items-center justify-between w-full p-3 font-medium rtl:text-right text-gray-500 "
                data-accordion-target="#accordion-collapse-body-5"
                aria-expanded="true"
                aria-controls="accordion-collapse-body-5"
            >
                <span>Storage Type</span>         
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
            id="accordion-collapse-body-5"
            class="hidden"
            aria-labelledby="accordion-collapse-heading-5"
        >
            <div class="p-5 border border-b-0 border-gray-200 ">
                {storagetypes.map((st) => {
                    return (
                        <div class="flex items-center mb-4">
                            <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded" />
                            <label for="default-checkbox" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">{st}</label>
                        </div>
                    );
                })}
            </div>
        </div>
</div>
            <hr />
            <div>
    <h2 id="accordion-collapse-heading-17">
            <button
                type="button"
                class="flex items-center justify-between w-full p-3 font-medium rtl:text-right text-gray-500 "
                data-accordion-target="#accordion-collapse-body-17"
                aria-expanded="true"
                aria-controls="accordion-collapse-body-17"
            >
                <span>Graphic Memory Type</span>         
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
            id="accordion-collapse-body-17"
            class="hidden"
            aria-labelledby="accordion-collapse-heading-17"
        >
            <div class="p-5 border border-b-0 border-gray-200 ">
                {graphicsMemoryTypes.map((gmt) => {
                    return (
                        <div class="flex items-center mb-4">
                            <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded" />
                            <label for="default-checkbox" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">{gmt}</label>
                        </div>
                    );
                })}
            </div>
        </div>
</div>
            <hr />
            <div>
    <h2 id="accordion-collapse-heading-18">
            <button
                type="button"
                class="flex items-center justify-between w-full p-3 font-medium rtl:text-right text-gray-500 "
                data-accordion-target="#accordion-collapse-body-18"
                aria-expanded="true"
                aria-controls="accordion-collapse-body-18"
            >
                <span>Graphic Processor Name</span>         
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
            id="accordion-collapse-body-18"
            class="hidden"
            aria-labelledby="accordion-collapse-heading-18"
        >
            <div class="p-5 border border-b-0 border-gray-200 ">
                {graphicsProcessorName.map((gpn) => {
                    return (
                        <div class="flex items-center mb-4">
                            <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded" />
                            <label for="default-checkbox" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">{gpn}</label>
                        </div>
                    );
                })}
            </div>
        </div>
</div>
            <hr />
            <div>
    <h2 id="accordion-collapse-heading-19">
            <button
                type="button"
                class="flex items-center justify-between w-full p-3 font-medium rtl:text-right text-gray-500 "
                data-accordion-target="#accordion-collapse-body-19"
                aria-expanded="true"
                aria-controls="accordion-collapse-body-19"
            >
                <span>Hard Disk Capacity</span>         
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
            id="accordion-collapse-body-19"
            class="hidden"
            aria-labelledby="accordion-collapse-heading-19"
        >
            <div class="p-5 border border-b-0 border-gray-200 ">
                {hardDiskCapacity.map((hdc) => {
                    return (
                        <div class="flex items-center mb-4">
                            <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded" />
                            <label for="default-checkbox" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">{hdc}</label>
                        </div>
                    );
                })}
            </div>
        </div>
</div>
            <hr />
            <div>
    <h2 id="accordion-collapse-heading-19">
            <button
                type="button"
                class="flex items-center justify-between w-full p-3 font-medium rtl:text-right text-gray-500 "
                data-accordion-target="#accordion-collapse-body-19"
                aria-expanded="true"
                aria-controls="accordion-collapse-body-19"
            >
                <span>Ram Type</span>         
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
            id="accordion-collapse-body-19"
            class="hidden"
            aria-labelledby="accordion-collapse-heading-19"
        >
            <div class="p-5 border border-b-0 border-gray-200 ">
                {ramtype.map((rt) => {
                    return (
                        <div class="flex items-center mb-4">
                            <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded" />
                            <label for="default-checkbox" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">{rt}</label>
                        </div>
                    );
                })}
            </div>
        </div>
</div>
            <hr />
            <div>
    <h2 id="accordion-collapse-heading-20">
            <button
                type="button"
                class="flex items-center justify-between w-full p-3 font-medium rtl:text-right text-gray-500 "
                data-accordion-target="#accordion-collapse-body-20"
                aria-expanded="true"
                aria-controls="accordion-collapse-body-20"
            >
                <span>Availability</span>         
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
            id="accordion-collapse-body-20"
            class="hidden"
            aria-labelledby="accordion-collapse-heading-20"
        >
            <div class="p-5 border border-b-0 border-gray-200 ">
                {availability.map((avail) => {
                    return (
                        <div class="flex items-center mb-4">
                            <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded" />
                            <label for="default-checkbox" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">{avail}</label>
                        </div>
                    );
                })}
            </div>
        </div>
</div>
            <hr />
            <div>
    <h2 id="accordion-collapse-heading-21">
            <button
                type="button"
                class="flex items-center justify-between w-full p-3 font-medium rtl:text-right text-gray-500 "
                data-accordion-target="#accordion-collapse-body-21"
                aria-expanded="true"
                aria-controls="accordion-collapse-body-21"
            >
                <span>Discount</span>         
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
            id="accordion-collapse-body-21"
            class="hidden"
            aria-labelledby="accordion-collapse-heading-21"
        >
            <div class="p-5 border border-b-0 border-gray-200 ">
                {discounts.map((discount) => {
                    return (
                        <div class="flex items-center mb-4">
                            <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded" />
                            <label for="default-checkbox" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">{discount}</label>
                        </div>
                    );
                })}
            </div>
        </div>
</div>
            <hr />
            <div>
    <h2 id="accordion-collapse-heading-22">
            <button
                type="button"
                class="flex items-center justify-between w-full p-3 font-medium rtl:text-right text-gray-500 "
                data-accordion-target="#accordion-collapse-body-22"
                aria-expanded="true"
                aria-controls="accordion-collapse-body-22"
            >
                <span>Customer Ratings</span>         
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
            id="accordion-collapse-body-22"
            class="hidden"
            aria-labelledby="accordion-collapse-heading-22"
        >
            <div class="p-5 border border-b-0 border-gray-200 ">
                {customerRatings.map((cr) => {
                    return (
                        <div class="flex items-center mb-4">
                            <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded" />
                            <label for="default-checkbox" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">{cr}<i class="fa-solid fa-star"></i> & above</label>
                        </div>
                    );
                })}
            </div>
        </div>
</div>
            <hr />
            <div>
    <h2 id="accordion-collapse-heading-23">
            <button
                type="button"
                class="flex items-center justify-between w-full p-3 font-medium rtl:text-right text-gray-500 "
                data-accordion-target="#accordion-collapse-body-23"
                aria-expanded="true"
                aria-controls="accordion-collapse-body-23"
            >
                <span>GST Invoice Available</span>         
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
            id="accordion-collapse-body-23"
            class="hidden"
            aria-labelledby="accordion-collapse-heading-23"
        >
            <div class="p-5 border border-b-0 border-gray-200 ">
                {gst.map((g) => {
                    return (
                        <div class="flex items-center mb-4">
                            <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded" />
                            <label for="default-checkbox" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">{g}</label>
                        </div>
                    );
                })}
            </div>
        </div>
</div>
            <hr />
            <div>
    <h2 id="accordion-collapse-heading-24">
            <button
                type="button"
                class="flex items-center justify-between w-full p-3 font-medium rtl:text-right text-gray-500 "
                data-accordion-target="#accordion-collapse-body-24"
                aria-expanded="true"
                aria-controls="accordion-collapse-body-24"
            >
                <span>Offers</span>         
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
            id="accordion-collapse-body-24"
            class="hidden"
            aria-labelledby="accordion-collapse-heading-24"
        >
            <div class="p-5 border border-b-0 border-gray-200 ">
                {offers.map((offer) => {
                    return (
                        <div class="flex items-center mb-4">
                            <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded" />
                            <label for="default-checkbox" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">{offer}</label>
                        </div>
                    );
                })}
            </div>
        </div>
</div>
            <hr />
        </div>


        </div>

        <div className='col-start-5 col-span-12  my-4 mr-4 border shadow'>
            {/* laptop card section starts */}
            {productList.map((laptop)=>{
              console.log(laptop);
        return (
          <div className="flex flex-col items-center bg-white border justify-between border-gray-200  shadow md:flex-row ">
            <img className="object-contain w-full md:w-1/3 min-h-72 p-4" src={laptop.img_link} alt="photo" />
            <div className="flex flex-col justify-between p-4 ml-2 flex-1 w-full hover:bg-gray-50 ">
              <h5 className="text-2xl font-semibold tracking-tight text-gray-900 ">{laptop.name}</h5>
              <p className=" my-2 text-gray-700 font-medium">
                {laptop.rating?
                <span className=" text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600  font-medium rounded text-sm px-2 py-1 text-center mr-2"> {laptop.rating} <i className="fa-solid fa-star"></i></span>
                :''
              }
              {/* <span className=" text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600  font-medium rounded text-sm px-4 py-1.5 text-center mr-2">{laptop.rating} <i className="fa-solid fa-star"></i></span> */}
              {laptop.no_of_ratings?laptop.no_of_ratings:0} Ratings & {laptop.no_of_reviews?laptop.no_of_reviews:'No'} Reviews
              </p>
              <ul className="max-w-md text-gray-500 list-disc list-inside ">
                <li><span className='text-black'>{laptop.processor}</span></li>
                <li><span className='text-black'>{laptop.ram} RAM</span></li>
                <li><span className='text-black'>{laptop.os} Operating System</span></li>
                <li><span className='text-black'>{laptop.storage} Storage</span></li>
                <li><span className='text-black'>{laptop.display*2.54} cm ({laptop.display} Inch) Display</span></li>
                <li><span className='text-black'>1 Year Onsite Warranty</span></li>
              </ul>
              <div className=' my-2 flex justify-between items-center'>
                <div>
                  <p className='font-semibold text-2xl'>₹{laptop.price-laptop.price/10}</p>
                  <p><s className='text-gray-600 mr-1'>₹{laptop.price}</s><span className='text-green-500 font-bold'>10% off</span></p>
                </div>
                <button type="button" className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br  shadow-lg shadow-blue-500/50  font-medium rounded-lg text-sm px-5 py-2.5 text-center">Buy now</button>
              </div>
            </div>
          </div>
        )
      })}
            {/* laptop card section ends */}
        </div>
        </div> 
        {/* section ends */}
    </>
  )
}

export default SearchModel