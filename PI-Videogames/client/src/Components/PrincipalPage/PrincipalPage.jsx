import './PrincipalPage.css';
import React from 'react';
import { Link } from 'react-router-dom';
import fondo from './PrincipalPage-Fondo.jpg';

export function PrincipalPage() {
    return (
        <div className='PrincipalPage'>
            <div className='img-fondo'>
                <img src={fondo} alt='No se encontro la imagen de fondo'/>
            </div>
            <div className='link-span'>
                <Link to='/Home'>
                    <span>videogames aqui!!</span>
                </Link>
            </div>
        </div>
    )
}