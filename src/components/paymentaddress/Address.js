import React from 'react'

function Address() {
    return (
        <div>
            <div class="mt-4 flex flex-col rounded-lg p-4 shadow-sm">
                <h2 class="text-white font-bold text-lg">Shipping Label Address Form</h2>

                <div class="mt-4 flex w-full gap-6">
                    <div className='w-full'>
                        <label for="name" className='m-1 pb-2'>Name</label>
                        <input required placeholder="First name" class="w-full border border-black rounded-sm  text-white px-2 py-1" type="text" />
                    </div>
                    <div className='w-full'>
                        <label for="name" className='m-1 pb-2'>Last</label>
                        <input placeholder="Last name" class="w-full border border-black rounded-sm  text-white px-2 py-1" type="text" />
                    </div>
                </div>

                <div class="mt-4">
                    <label for="address" className='m-1 pb-2'>Address</label>
                    <textarea required placeholder="Your address" class="w-full border border-black rounded-sm text-white px-2 py-1" id="address"></textarea>
                </div>

                <div class="mt-4 flex flex-row space-x-6">
                    <div class="flex-1">
                        <label for="city" className='m-1 pb-2'>City</label>
                        <input required placeholder="Your city" class="w-full border border-black rounded-sm text-white px-2 py-1" id="city" type="text" />
                    </div>

                    <div class="flex-1">
                        <label for="state" className='m-1 pb-2'>State</label>
                        <input required placeholder="Your state" class="w-full border border-black rounded-sm text-white px-2 py-1" id="state" type="text" />
                    </div>
                </div>

                <div class="mt-4 flex flex-row space-x-2">
                    <div class="flex-1">
                        <label for="zip" className='m-1 pb-2'>ZIP</label>
                        <input placeholder="Your ZIP code" class="w-full border border-black rounded-sm text-white px-2 py-1" id="zip" type="text" />
                    </div>

                    <div class="flex flex-row space-x-2">
                        <div class="flex-1">
                            <label for="country" className='m-1 pb-2'>Country</label>
                            <p class="w-28 border border-black rounded-sm px-2 py-1">India</p>
                            {/* <select class="w-full border border-black rounded-sm text-white px-2 py-1" id="country">
                                <option value="">Select a country</option>

                                <optgroup label="Africa">
                                    <option value="AF">Afghanistan</option>
                                    <option value="DZ">Algeria</option>
                                    <option value="AO">Angola</option>
                                    ...
                                    <option value="ZW">Zimbabwe</option>
                                </optgroup>

                                <optgroup label="Asia">
                                    <option value="AM">Armenia</option>
                                    <option value="AZ">Azerbaijan</option>
                                    <option value="BH">Bahrain</option>
                                    ...
                                    <option value="YE">Yemen</option>
                                </optgroup>

                                <optgroup label="South America">
                                    <option value="AR">Argentina</option>
                                    <option value="BO">Bolivia</option>
                                    <option value="BR">Brazil</option>
                                    ...
                                    <option value="VE">Venezuela</option>
                                </optgroup>

                                ...
                            </select> */}
                        </div>
                    </div>
                </div>
                <div class="mt-4 flex justify-between">
                    <a href='/'><button class="text-black px-4 border border-black py-1 transition-all font-thin duration-200" type="submit">Return to Home</button></a>
                    <a href='/thankyou'><button class="text-white px-4 py-1 bg-black hover:bg-blue-500 hover:text-white transition-all duration-200" type="submit">Ready to Shipped</button></a>
                </div>
            </div>
        </div>
    )
}

export default Address