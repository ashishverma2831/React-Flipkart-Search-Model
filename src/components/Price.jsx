import React, { useState } from 'react'

const Price = ({ handlePrice }) => {
    // const prices = [
    //     // "All",
    //     "Below 20,000",
    //     "Above 20,000 & Below 30,000",
    //     "Above 30,000 & Below 40,000",
    //     "Above 40,000 & Below 50,000",
    //     "Above 50,000 & Below 60,000",
    //     "Above 60,000 & Below 70,000",
    //     "Above 70,000 & Below 80,000",
    //     "Above 80,000"
    // ];

    return (
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
                    {/* <div class="flex items-center mb-4">
                        <input onChange={handlePrice} id="default-checkbox" type="range" max={100000} min={10000} step={5000} value="" className="w-full text-blue-600 bg-gray-100 border-gray-300 rounded" />
                    </div> */}
                    <div class="relative mb-6">
                        <label htmlFor="labels-range-input" class="sr-only">Labels range</label>
                        <input id="labels-range-input" onChange={handlePrice} type="range" max={120000} min={10000} step={5000} className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700" />
                            <span className="text-sm text-gray-500 dark:text-gray-400 absolute start-0 -bottom-6">10k</span>
                            <span className="text-sm text-gray-500 dark:text-gray-400 absolute end-0 -bottom-6">120k </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Price