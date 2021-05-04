import React from 'react'
import { NavLink } from 'react-router-dom';

// import files and images
import web from '../src/images/img2.svg'
import Common from './Common';
function Home() {
    return (
        // pass in props to be accessed at Common component
        <Common name='Grow your business with' imgsrc={web} visit='/services' btnname='Get Started'/>
    )
}

export default Home
