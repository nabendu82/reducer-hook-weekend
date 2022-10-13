import React, { useContext } from 'react'
import { CountContext } from '../App'

const Child1 = () => {
    const countContext = useContext(CountContext);

    return (
        <div>
            <h1>Child1 - {countContext.countState}</h1>
            <button onClick={() => countContext.countDispatch('increment')}>Increment</button>
            <button onClick={() => countContext.countDispatch('decrement')}>Decrement</button>
            <button onClick={() => countContext.countDispatch('reset')}>Reset</button>
        </div>
    )
}

export default Child1