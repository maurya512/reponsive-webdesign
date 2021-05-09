import React, { useState } from 'react'

function Contact() {

    // state
    const [data, setData] = useState({
        // any initial input from the user will be stored here
        // to access these data we can invoke them by 'data.' 
        fullname: "",
        phone: "",
        email: "",
        message: ""
    })

    // inputEvent function
    const InputEvent = (event) => {
        const { name, value } = event.target

        setData((preValue) => {
            return {
                ...preValue,
                [name]: value,
            }
        })
    }

    // the function that will be executed when the form is submitted
    const formSubmit = (e) => {
        // stops the page from reloading everytime a new form is submitted
        e.preventDefault();
        // alert the user with their info
        alert(`My name is ${data.fullname}. My contact info is ${data.phone}. My email address is ${data.email}. I wanna say ${data.message}`)
    }
    return (
        <>
            <div className='my-5'>
                <h1 className='text-center'>Contact Us</h1>
            </div>
            <div className='container contact_div'>
                <div className='row'>
                    <div className='col-md-6 col-10 mx-auto'>
                        {/* when the form is submitted, the corresponding function gets executed */}
                        <form onSubmit={formSubmit}>
                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">Full Name</label>
                                <input type="text" class="form-control" id="exampleFormControlInput1"
                                    name="fullname"
                                    // initial value stored
                                    value={data.fullname}
                                    onChange={InputEvent}
                                    placeholder="Enter your name" />
                            </div>
                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">Contact Info</label>
                                <input type="number" class="form-control" id="exampleFormControlInput1"
                                    name="phone"
                                    // initial value stored can be accessed
                                    value={data.phone}
                                    onChange={InputEvent}
                                    placeholder="Enter your contact info" />
                            </div>
                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">Email address</label>
                                <input type="email" class="form-control" id="exampleFormControlInput1"
                                    name="email"
                                    value={data.email}
                                    onChange={InputEvent}
                                    placeholder="Enter your email address" />
                            </div>
                            <div class="mb-3">
                                <label for="exampleFormControlTextarea1" class="form-label">Message</label>
                                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"
                                    name="message"
                                    value={data.message}
                                    onChange={InputEvent}>
                                </textarea>
                            </div>
                            <div className="text-center col-12">
                                <button class="btn btn-danger" type="submit">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact
