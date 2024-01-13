import React from 'react'

const LaptopCards = ({results}) => {

  return (
    <>  
      {results.map((laptop)=>{
        return (
          <div key={laptop.id} class="flex flex-col items-center bg-white border justify-between border-gray-200  shadow md:flex-row ">
            <img class="object-contain w-full md:w-1/3 min-h-72 p-4" src={laptop.img_link} alt="photo" />
            <div class="flex flex-col justify-between p-4 ml-2 flex-1 w-full hover:bg-gray-50 ">
              <h5 class="text-2xl font-semibold tracking-tight text-gray-900 ">{laptop.name}</h5>
              <p class=" my-2 text-gray-700 font-medium">
                {laptop.rating?
                <span className=" text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600  font-medium rounded text-sm px-2 py-1 text-center mr-2">{laptop.rating} <i className="fa-solid fa-star"></i></span>
                :''
              }
              {laptop.no_of_ratings?laptop.no_of_ratings:0} Ratings & {laptop.no_of_reviews?laptop.no_of_reviews:'No'} Reviews
              </p>
              <ul class="max-w-md text-gray-500 list-disc list-inside ">
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
    </>
  )
}

export default LaptopCards