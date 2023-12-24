import React from 'react'

const Weight = () => {
    const weights = [
        "1.2 Kg or Below",
        "1.2 Kg to 1.5 Kg",
        "1.6 Kg to 1.8 Kg",
        "1.9 Kg to 2.1 Kg",
        "2.2 Kg to 2.6 Kg",
        "Above 2.6 Kg"
    ];
  return (
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
  )
}

export default Weight