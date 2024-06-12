import React from 'react'
import './form.css'

function Form() {
    return (
        <div>
            <form class="form">
                <div class="title">Contact us</div>
                <input type="text" placeholder="Your email" class="input" />
                    <textarea placeholder="Your message"></textarea>
                    <button>Submit</button>
            </form>
        </div>
    )
}

export default Form