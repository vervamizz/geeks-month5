import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, incrementByTen, decrementByTen, reset } from '../store/actions';

const Counter = () => {
    const count = useSelector(state => state.count);
    const dispatch = useDispatch();

    return (
        <div style={{ textAlign: 'center' }}>
            <h1>{count}</h1>
            <button onClick={() => dispatch(increment())}>+1</button>
            <button onClick={() => dispatch(incrementByTen())}>+10</button>
            <button onClick={() => dispatch(decrementByTen())}>-10</button>
            <button onClick={() => dispatch(decrement())}>-1</button>
            <button onClick={() => dispatch(reset())}>Сброс</button>
        </div>
    );
};

export default Counter;
