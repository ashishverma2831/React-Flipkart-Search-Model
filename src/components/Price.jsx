import React from 'react'

const Price = () => {
    const prices = [
        "20,000",
        "30,000",
        "40,000",
        "50,000",
        "60,000",
        "70,000",
        "80,000",
        "90,000"
    ];
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
  )
}

export default Price