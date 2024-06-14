import React from 'react'
import back from '../../../image/image2.png'

function SignupPage() {
    return (
        <div className='grid justify-center' style={{ background: `url(${back})` }}>
            <form>
                <div class="mx-auto my-6 max-w-[432px] bg-gray-800 rounded-md shadow-lg drop-shadow-md">
                    <div class="px-4 py-3 flex justify-between">
                        <div className='w-full text-center'>
                            <h2 class="font-bold text-white" style={{ fontSize: "32px" }}>Sign Up</h2>
                            <p class="text-gray-400" style={{ fontSize: "15px" }}>It's quick and easy.</p>
                        </div>

                    </div>
                    <hr class="bg-gray-600" />
                    <div class="px-4 pt-3 pb-6 space-y-3">
                        <div class="space-x-3 flex">
                            <input
                            required
                                type="text"
                                placeholder="First name"
                                class="flex-1 ring-1 ring-gray-400 rounded-md text-md px-2 py-2 outline-none bg-gray-700 focus:placeholder-gray-500"
                            />
                            <input
                                type="text"
                                placeholder="Surname"
                                class="flex-1 ring-1 ring-gray-400 rounded-md text-md px-2 py-2 outline-none bg-gray-700 focus:placeholder-gray-500"
                            />
                        </div>
                        <div>
                            <input
                            required
                                type="text"
                                placeholder="Mobile number or email address"
                                class="w-full ring-1 ring-gray-400 rounded-md text-md px-2 py-2 outline-none bg-gray-700 focus:placeholder-gray-500"
                            />
                        </div>
                        <div>
                            <input
                            required
                                type="password"
                                placeholder="New password"
                                class="w-full ring-1 ring-gray-400 rounded-md text-md px-2 py-2 outline-none bg-gray-700 focus:placeholder-gray-500"
                            />
                        </div>
                        <div>
                            <div class="text-gray-500 " style={{ fontSize: "12px" }}>
                                Date of birth <a href=""> (?) </a>
                            </div>
                            <div class="mt-1 flex space-x-3">
                                <select
                                required
                                    name="day"
                                    class="text-md flex-1 px-1 py-1.5 ring-1 bg-gray-700 text-gray-400 ring-gray-400 rounded-md outline-none"
                                >
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                    <option>6</option>
                                    <option>7</option>
                                    <option>8</option>
                                    <option>9</option>
                                    <option>10</option>
                                    <option>11</option>
                                    <option>12</option>
                                    <option>13</option>
                                    <option>14</option>
                                    <option>15</option>
                                    <option>16</option>
                                    <option>17</option>
                                    <option>18</option>
                                    <option>19</option>
                                    <option>20</option>
                                    <option>21</option>
                                    <option>22</option>
                                    <option>23</option>
                                    <option>24</option>
                                    <option>25</option>
                                    <option>26</option>
                                    <option>27</option>
                                    <option>28</option>
                                    <option>29</option>
                                    <option>30</option>
                                    <option>31</option>
                                </select>
                                <select
                                required
                                    name="month"
                                    class="text-md flex-1 px-1 py-1.5 ring-1 bg-gray-700 text-gray-400 ring-gray-400 rounded-md outline-none"
                                >
                                    <option>January</option>
                                    <option>February</option>
                                    <option>March</option>
                                    <option>April</option>
                                    <option>May</option>
                                    <option>June</option>
                                    <option>July</option>
                                    <option>August</option>
                                    <option>September</option>
                                    <option>October</option>
                                    <option>November</option>
                                    <option>December</option>
                                </select>
                                <select
                                required
                                    name="year"
                                    class="text-md flex-1 px-1 py-1.5 ring-1 bg-gray-700 text-gray-400 ring-gray-400 rounded-md outline-none"
                                >
                                    <option>1990</option>
                                    <option>1991</option>
                                    <option>1992</option>
                                    <option>1993</option>
                                    <option>1994</option>
                                    <option>1995</option>
                                    <option>1996</option>
                                    <option>1997</option>
                                    <option>1998</option>
                                    <option>1999</option>
                                    <option>2000</option>
                                    <option>2001</option>
                                    <option>2002</option>
                                    <option>2003</option>
                                    <option>2004</option>
                                    <option>2005</option>
                                    <option>2006</option>
                                    <option>2007</option>
                                    <option>2008</option>
                                    <option>2009</option>
                                    <option>2010</option>
                                    <option>2011</option>
                                    <option>2012</option>
                                    <option>2013</option>
                                    <option>2014</option>
                                    <option>2015</option>
                                    <option>2016</option>
                                    <option>2017</option>
                                    <option>2018</option>
                                    <option>2019</option>
                                    <option>2020</option>
                                    <option>2021</option>
                                    <option>2022</option>
                                    <option>2023</option>
                                </select>
                            </div>
                        </div>
                        <div>
                            <div class="text-gray-500" style={{ fontSize: "12px" }}>
                                Gender <a href=""> (?) </a>
                            </div>
                            <div required class="mt-1 flex space-x-3">
                                <label
                                    for="female"
                                    class="flex-1 text-gray-400 flex space-x-2 justify-between items-center rounded-md px-2 py-1 border border-gray-400"
                                >
                                    <span>Female</span>
                                    <input type="radio" id="female" name="gender" />
                                </label>
                                <label
                                    for="male"
                                    class="flex-1 flex text-gray-400 space-x-2 justify-between items-center rounded-md px-2 py-1 border border-gray-400"
                                >
                                    <span>Male</span>
                                    <input type="radio" id="male" name="gender" />
                                </label>
                                <label
                                    for="other"
                                    class="flex-1 flex text-gray-400 space-x-2 justify-between items-center rounded-md px-2 py-1 border border-gray-400"
                                >
                                    <span>Custom</span>
                                    <input type="radio" id="other" name="gender" />
                                </label>
                            </div>
                        </div>
                        <div class="text-center">
                            <a href='/'><button
                                class="text-white bg-yellow-600 font-bold px-16 py-1 rounded-md"
                                style={{ fontSize: "18px" }}
                            >
                                Sign Up
                            </button></a>
                        </div>
                    </div>
                    <div class="px-8 py-4 bg-gray-700 rounded-md text-center">
                        <span class="text-gray-400">Do have an account?</span>
                        <a href="/login" class="font-medium text-yellow-600 hover:text-yellow-500"
                        >LogIn</a
                        >
                    </div>
                </div>
            </form>
        </div>
    )
}

export default SignupPage