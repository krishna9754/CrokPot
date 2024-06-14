import React from 'react'

function ThankYou() {
    return (
        <div className='items-center text-center'>
            <div class="flex items-end bg-orange-200 p-6 rounded-md border border-orange-400 m-2">
                <div class="flex flex-col items-start">
                    <span class="font-medium text-lg text-orange-900">Thank You for Shopping</span>
                    <p class="text-base mt-2">Lorem Ipsum is simply dummy text of the printing.</p>
                    <p class="text-base">Thank You for Shopping</p>
                    <a href='/'><button class="flex justify-center items-center bg-orange-700 hover:bg-orange-800 pl-4 pr-4 pt-1.5 pb-1.5 mt-4 rounded-md text-white font-medium">
                        <span class="mr-2">Home</span>
                        <svg class="w-6 h-6" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" stroke-linejoin="round" stroke-linecap="round"></path>
                        </svg>
                    </button></a>
                </div>
                <div class="ml-10 text-orange-900">
                    <svg stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="h-12 w-12">
                        <path d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" stroke-linejoin="round" stroke-linecap="round"></path>
                    </svg>
                </div>
            </div>
        </div>
    )
}

export default ThankYou