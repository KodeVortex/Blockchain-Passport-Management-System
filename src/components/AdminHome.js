import React from 'react';
import Button from './Button';
import { Link } from 'react-router-dom';

export default function AdminHome() {

    return (
        <div className='btn'>
            <Link to='/AddressInputCreate'><Button value="Create Passport" /></Link>
            <Link to="/addressInput"><Button value="View Passport" /></Link>
            <Link to="/verify"><Button value="Verify Passport" /></Link>
        </div>
    )
}
