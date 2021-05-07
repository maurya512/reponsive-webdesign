import React from 'react'
import { NavLink } from 'react-router-dom'

// import files 
import web from '../src/images/img2.svg'
import Common from './Common'

function About() {
    return (
        <>
        {/* pass in props to be accessed in Common component  */}
            <Common name='About us at ' imgsrc={web} visit='/contact' btnname='Contact Now' />
        </>
    )
}

export default About
