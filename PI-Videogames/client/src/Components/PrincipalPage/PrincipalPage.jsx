import React from 'react';
import { Link } from 'react-router-dom';
import './PrincipalPage.css';
import fondo from './PrincipalPage-Fondo3.jpg';

export function PrincipalPage() {
    return (
        <div className='PrincipalPage'>
            <div className='img-fondo'>
                <img src={fondo} alt='No se encontro la imagen de fondo'/>
            </div>
            <div className='link-Home'>
                <button className='btn-home'>
                    <Link to='/Home'>Home</Link>
                </button>
            </div>
        </div>
    )
}