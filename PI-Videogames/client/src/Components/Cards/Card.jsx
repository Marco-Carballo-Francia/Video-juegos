import React from 'react';
import { Link } from 'react-router-dom';
import './Card.css';


export function Card(props) {
    return (
        <div className='Card' key={props.id}>
            <div className='name-linck'>
                <Link to={`/videogame/:${props.id}`}>
                    <h3>{props.name}</h3>    
                </Link>
            </div>
            <div className='img'>
                <img src={props.img} alt='No se encontro Img' />
            </div>
            <div className='genres'> {
                    props.genres.map(gen => (
                        <p>{gen.name}</p>
                    ))
                }
            </div>
        </div>
    );
}