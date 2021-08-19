import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {videogameDetails} from '../../Actions/Actions'
import './Card.css';


export function Card(props) {
    console.log(props);
    const dispatch = useDispatch()

    const onClick = () =>{
        dispatch(videogameDetails(props.id))
    }

    return (
        <div className='Card' key={props.id}>
            <div className='name-link'>
                <Link to={`/videogame/${props.id}`}>
                    <button onClick={onClick}>{props.name}</button>    
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