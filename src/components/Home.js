import React from 'react'
import Button from './Button'
import { Link } from 'react-router-dom'
export default function Home() {

    return (
        <div className='btn'>
            <Link to='/create'><Button value="Create Passport" /></Link>
            <Link to="/verify"><Button value="View Passport" /></Link>
        </div>
    )
}
