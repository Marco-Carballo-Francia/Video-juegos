import React, {useState, useEffect} from 'react';
import { useDispatch } from 'react-redux';
import './Filter.css';
import { setVideogames, allGenres, filterByGenre } from '../../../Actions/Actions';

export function Filter() {
    const [filterGenres, setFilterGenres] = useState('');

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(allGenres());
    }, []);
    
    useEffect(() => {
    if (filterGenres?.length > 0) {
        dispatch(setVideogames());
        return () => {
            dispatch(filterByGenre(filterGenres));
        }
    }
    }, [filterGenres]);

    const handleChange = (e) => {
        e.preventDefault();
        setFilterGenres();
    }

    return (
        <div className='Filter'>
            <div className='selector'>
                <select onChange={e => handleChange(e)}>    
                    <option value='Action'>Action</option>
                    <option value='Adventure'>Adventure</option>
                    <option value='Arcade'>Arcade</option>
                    <option value='Board Games'>Board Games</option>
                    <option value='Card'>Card</option>
                    <option value='Casual'>Casual</option>
                    <option value='Educational'>Educational</option>
                    <option value='Family'>Family</option>
                    <option value='Fighting'>Fighting</option>
                    <option value='Indie'>Indie</option>
                    <option value='Massively Multiplayer'>Massively Multiplayer</option>
                    <option value='Platformer'>Platformer</option>
                    <option value='Puzzle'>Puzzle</option>
                    <option value='Racing'>Racing</option>
                    <option value='RPG'>RPG</option>
                    <option value='Shooter'>Shooter</option>
                    <option value='Simulation'>Simulation</option>
                    <option value='Sports'>Sports</option>
                    <option value='Strategy'>Strategy</option>
                </select>
            </div>
        </div>
    )
}