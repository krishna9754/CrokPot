import React from 'react'
import background from '../../../image/image2.png'

function Login() {
    return (
        <div className='grid justify-center' style={{ background: `url(${background})`, backgroundSize: "fit", }}>
            <form>
                <div class="max-w-lg w-full my-6">
                    <div
                        style={{ boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
                        class="bg-gray-800 rounded-lg shadow-xl overflow-hidden"
                    >
                        <div class="p-8">
                            <h2 class="text-center text-3xl font-extrabold text-white">
                                Welcome Back
                            </h2>
                            <p class="mt-4 text-center text-gray-400">Sign in to continue</p>
                            <form method="POST" action="#" class="mt-8 space-y-6">
                                <div class="rounded-md shadow-sm">
                                    <div>
                                        <label class="sr-only" for="email">Email address</label>
                                        <input
                                            placeholder="Name"
                                            class="appearance-none relative block w-full px-3 py-3 border border-gray-700 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                            required
                                            autocomplete="text"
                                            type="text"
                                            name="text"
                                            id="text"
                                        />
                                    </div>
                                    <div class="mt-4">
                                        <label class="sr-only" for="email">Email address</label>
                                        <input
                                            placeholder="Email address"
                                            class="appearance-none relative block w-full px-3 py-3 border border-gray-700 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                            required="@gmail.com"
                                            autocomplete="email"
                                            type="email"
                                            name="email"
                                            id="email"
                                        />
                                    </div>
                                    <div class="mt-4">
                                        <label class="sr-only" for="password">Password</label>
                                        <input
                                            placeholder="Password"
                                            class="appearance-none relative block w-full px-3 py-3 border border-gray-700 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                            required
                                            autocomplete="current-password"
                                            type="password"
                                            name="password"
                                            id="password"
                                        />
                                    </div>
                                </div>

                            </form>
                        </div>
                        <div class="px-8 py-4 bg-gray-700 text-center">
                            <div>
                                <a href='/'> <button
                                    class="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-md text-gray-900 bg-yellow-600 hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                    type="submit"
                                >
                                    Sign In
                                </button></a>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Login