import React from 'react';
import Button from './Button';
import { Link } from 'react-router-dom';

export default function AdminHome() {

    return (
        <div className='btn'>
            <Link to="/view"><Button value="View Passport" /></Link>
        </div>
    )
}
