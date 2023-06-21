import React from 'react';
import Button from './Button';
import { Link } from 'react-router-dom';

export default function AdminHome() {

    return (
        <div className='btn'>
            <Link to='/create'><Button value="Create Passport" /></Link>
            <Link to="/addressInput"><Button value="View Passport" /></Link>
        </div>
    )
}
