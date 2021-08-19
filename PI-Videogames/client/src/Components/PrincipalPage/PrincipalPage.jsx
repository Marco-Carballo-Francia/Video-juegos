import React from 'react';
import { Link } from 'react-router-dom';
import './PrincipalPage.css';

export function PrincipalPage() {
    return (
        <div className='PrincipalPage'>
            <div className='img-landing-fondo'>
                <button className='btn-home'>
                    <Link to='/Home'>Videogames aqui!!</Link>
                </button>
            </div>
        </div>
    )
}