import React, { useContext } from 'react'
import { CountContext } from '../App'

const GranParent1 = () => {
    const countContext = useContext(CountContext);

    return (
        <div>
            <h1>GrandParent1 - {countContext.countState}</h1>
            <button onClick={() => countContext.countDispatch('increment')}>Increment</button>
            <button onClick={() => countContext.countDispatch('decrement')}>Decrement</button>
            <button onClick={() => countContext.countDispatch('reset')}>Reset</button>
        </div>
    )
}

export default GranParent1