import React, { useState } from 'react'

function Contact() {

    // event function that will be called when the form is completed and submitted
        const [data, setData] = useState({
            fullname: '',
            phone: '',
            email: '',
            message: '',
        }) 
    

        const InputEvent = (event) => {
            const {name, value} = event.target

            setData((preValue) => {
                return {
                    ...preValue,
                    [name]: value,
                }
            })
        }

        const formSubmit = () => {
        }
    return (
        <>
            <div className='my-5'>
                <h1 className='text-center'>Contact Us</h1>
            </div>
            <div className='container contact_div'>
                <div className='row'>
                    <div className='col-md-6 col-10 mx-auto'>
                        <form onSubmit={formSubmit}>
                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">Full Name</label>
                                <input type="text" class="form-control" id="exampleFormControlInput1"
                                    name='fullname'
                                    // to access the fullname entered in the form
                                    value={data.fullname}
                                    onChange={InputEvent}
                                    placeholder="Enter your name" />
                            </div>
                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">Phone Number</label>
                                <input type="number" class="form-control" id="exampleFormControlInput1"
                                    name='Phone Number'
                                    // access the number entered in the input field of the form
                                    value={data.number}
                                    onChange={InputEvent}
                                    placeholder="Enter your phone number" />
                            </div>
                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">Email Address</label>
                                <input type="email" class="form-control" id="exampleFormControlInput1"
                                    name='Email'
                                    // access the email in the input field
                                    value={data.email}
                                    onChange={InputEvent}
                                    placeholder="Enter your email address" />
                            </div>
                            <div class="mb-3">
                                <label for="exampleFormControlTextarea1" class="form-label">Message</label>
                                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" name="message" value={data.message} onChange={InputEvent}></textarea>
                            </div>
                            <div className="text-center col-12">
                                <button class="btn btn-outline-danger" type="submit">Submit form</button>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact
