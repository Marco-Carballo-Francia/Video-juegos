import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import './SearchBar.css';
import { videogamesName } from '../../../Actions/Actions';

export function SearchBar() {
    const [name, setName] = useState('');
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (name.length > 0) {
            dispatch(videogamesName(e));
            setName('');
        } else {
            alert('nombre no valido');
        }
    }

    const habdleChange = (e => {
        setName(e.target.value);
    })
    
    return (
        <div className='searchBar'>
            <form onSubmit={(e => handleSubmit(e))}>
                <div className='input-name'>
                    <input 
                        type='text'
                        value={name}
                        placeholder='Search videogame...'
                        onChange={(e => habdleChange(e))}
                    />
                </div>
                <div className='button-search'>
                    <button type='submit'>Search</button>
                </div>
            </form>
        </div>
    )
}