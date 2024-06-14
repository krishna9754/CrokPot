import React from 'react'
import './cart.css'
import { FaUser } from "react-icons/fa";

function Cart() {
    return (
        <div>
            <button data-quantity="Name" class="btn-cart">
                <FaUser />
                <span class="quantity"></span>
            </button>
        </div>
    )
}

export default Cart