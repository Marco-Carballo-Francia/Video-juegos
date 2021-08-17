import React from 'react';
import { Link } from 'react-router-dom';


export function Nav() {
    return (
        <div className='Nav'>
            <div className='link-Home'>
                <Link to='/'>
                    <span>Home</span>
                </Link>
            </div>
            <div className='link-Videigamecreate'>
                <Link to='/addVideogames'>
                    <span>Create Videogames</span>
                </Link>
            </div>
        </div>
    )
}