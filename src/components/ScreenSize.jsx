import React from 'react'

const ScreenSize = () => {
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

  return (
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
  )
}

export default ScreenSize