import React from 'react'

const Usage = () => {
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
  return (
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
  )
}

export default Usage