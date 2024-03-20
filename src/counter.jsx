import React from 'react'

import { increment,decrement } from './actions'
import { useDispatch,useSelector } from 'react-redux'

const Counter=()=>{
    const count=useSelector(state=>state.count);
    const dispatch=useDispatch();
    return(
        <>
        <h1>Counter:{count}</h1>
        <button onClick={()=>dispatch(increment())}>increment</button>
        <button onClick={()=>dispatch(decrement())}>decrement</button>
        </>
    )
}

export default Counter;