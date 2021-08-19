import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import './NavBar.css';
import { createVideogame } from '../../../Actions/Actions';


export function Nav() {
    const dispatch = useDispatch()

    const onClick = () =>{
        dispatch(createVideogame())
    }
    return (
        <div className='Nav'>
            <div className='link-Home'>
                <Link to='/'>
                    <button type='submit'>Home</button>
                </Link>
            </div>
            <div className='link-Videigamecreate'>
                <Link to='/addVideogames'>
                    <button onClick={onClick}>Create Videogames</button>
                </Link>
            </div>
        </div>
    )
}