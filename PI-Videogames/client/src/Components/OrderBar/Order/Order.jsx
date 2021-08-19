import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import './Order.css';
import { setVideogames, orderByName } from '../../../Actions/Actions';
import { Filter } from '../Filter/Filter';


export function Order() {
    const [order, setOrder] = useState({
        orderName: '',
        orderRating: ''
    });

    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(orderByName(order.orderName)) // eslint-disable-next-line
    }, [])

    useEffect(() => {
      if (order.orderName.length !== null) {
        setVideogames();
      // return () => {
      //       dispatch(orderByName(order.orderName));
      //     }
      } // eslint-disable-next-line
    }, []);
    
    // useEffect(() => {
    //   if (order.orderRating.length !== null) {
    //     setVideogames();
    //     return () => {
    //         orderByName(order.orderRating);
    //       }
    //   }
    // }, [order.orderRating]);

    const handleChange = (e) => {
      e.preventDefault();
      setOrder();
    }

    return (
      <div className='Order'>
        <div className='order-AZ'>
          <span>Order:</span>
          <select name='Name' onChange={handleChange}>
            <option value='A-Z'>A-Z</option>
            <option value='Z-A'>Z-A</option>
          </select>    
          <div className='filterGenres'>
            <Filter />
          </div>
        </div>
      </div>
    )
}