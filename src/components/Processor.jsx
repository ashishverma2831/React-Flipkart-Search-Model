import React from "react";

const Processor = () => {
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
    return (
        <div>
            {/* <h1 className="mt-4">Processor</h1>
        {processors.map((processor)=>{
            return <div>
                {processor}
            </div>
        })} */}

            {/* <div id="accordion-collapse" data-accordion="collapse"> */}
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
            {/* </div> */}
        </div>
    );
};

export default Processor;
