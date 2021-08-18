import React from 'react';
import './Paged.css';

export function Paged({ videogamesPerPage, videogamesPage, pageds }) {
    const pages = [];

    for (let i = 1; i <= Math.ceil(videogamesPage / videogamesPerPage); i++) {
        pages.push(i);
    }

    return (
        <div className='Paged'> {
            pages.map(num => (
                <button className='button-pageds' key={num} onClick={() => pageds(num)}>{num}</button>
            ))
        }
        </div>
    )
}