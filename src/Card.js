import React from 'react'
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min';

function Card(props) {
    return (
        <>
            <div className='col-md-4 col-10 mx-auto'>
                <div class="card">
                    <img src={props.imgsrc} class="card-img-top" alt="img src" />
                    <div class="card-body">
                        <h5 class="card-title font-weight-bold">{props.title}</h5>
                        <p class="card-text">{props.description}</p>
                        <NavLink
                            to='/contact' class="btn btn-danger">Take Me There</NavLink>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card
