import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

function MovieDetails() {
    const dispatch = useDispatch();
    const details = useSelector(store => store.details);
    console.log('in MovieDetails');
    dispatch ({ type: 'SET_DETAILS', payload: details.id});
        return (
            (details)
        )
}



export default MovieDetails;