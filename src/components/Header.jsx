import React from 'react'

const Header = () => {
  return (
    <>
        <header className='bg-[#2874f0] '>
            <div className='max-w-screen-xl mx-auto py-2 flex items-center justify-center'>
                <img src='https://logos-world.net/wp-content/uploads/2020/11/Flipkart-Logo.png' className='w-1/12 mx-4 text-white' alt='logo' />
                <form className='w-4/12'>   
                    <div className="relative shadow">
                        <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                            <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                            </svg>
                        </div>
                        <input type="search" id="default-search" className="block rounded w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 bg-gray-50" placeholder="Search Laptops..." required />
                        <button type="submit" className="text-white absolute end-2.5 bottom-2.5 rounded bg-blue-700 hover:bg-blue-800 outline-none  font-medium  text-sm px-4 py-2 ">Search</button>
                    </div>
                </form>
                <button type="button" class="text-blue-800 bg-white focus:outline-none  text-lg font-semibold text-md px-10 py-2 my-auto rounded text-center inline-flex items-center mx-4 mb-2">Login</button>
                <a href='#' className='text-white mx-2 text-lg'>Become a Seller</a>
                
<button id="dropdownHoverButton" data-dropdown-toggle="dropdownHover" data-dropdown-trigger="hover" className="mx-4 text-white focus:outline-none font-medium text-lg px-5 py-2.5 text-center inline-flex items-center" type="button">More <svg class="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
</svg>
</button>

<div id="dropdownHover" class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-50 dark:bg-gray-700">
    <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownHoverButton">
      <li><a href="#" class="block px-4 py-2 hover:bg-gray-100 ">Notification Preferences</a></li><hr />
      <li><a href="#" class="block px-4 py-2 hover:bg-gray-100 ">24x7 Customer Care</a></li><hr />
      <li><a href="#" class="block px-4 py-2 hover:bg-gray-100 ">Advertise</a></li><hr />
      <li><a href="#" class="block px-4 py-2 hover:bg-gray-100 ">Download App</a></li>
    </ul>
</div>

<button type="button" class="text-white font-semibold text-lg px-5 py-2.5 text-center inline-flex items-center">
<svg class="w-4 h-4 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 21">
<path d="M15 12a1 1 0 0 0 .962-.726l2-7A1 1 0 0 0 17 3H3.77L3.175.745A1 1 0 0 0 2.208 0H1a1 1 0 0 0 0 2h.438l.6 2.255v.019l2 7 .746 2.986A3 3 0 1 0 9 17a2.966 2.966 0 0 0-.184-1h2.368c-.118.32-.18.659-.184 1a3 3 0 1 0 3-3H6.78l-.5-2H15Z"/>
</svg>
Cart
</button>
            </div>
        </header>   
    </>
  )
}

export default Header