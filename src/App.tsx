import React, {useState} from 'react';
import './App.css';
import {CounterIncrement} from "./component/Counter-increment";
import {CounterSettings} from "./component/Counter-settings";



export type CounterType = {
    numberMax: number
    numberMin: number
    incValue: number
    disabled: boolean
    message: string
    error: boolean
}

function App() {
    const [counter, setCounter] = useState<CounterType>({
        numberMax: 5,
        numberMin: 0,
        incValue: 0,
        disabled: false,
        message: 'Enter number',
        error: false
    })


    const getIncrementValue = (valueInc: number) => {
        setCounter({...counter, incValue: valueInc})
    }

    const clickIncrement = () => {
        setCounter({...counter, incValue: counter.incValue + 1})
        if (counter.incValue >= 5) {
            setCounter({...counter, disabled: counter.disabled === true})
        }
    }
    const resetIncrement = () => {
        setCounter({...counter, incValue: counter.incValue && 0})
    }

    return (
        <div className="App">
            <CounterSettings
                counter={{...counter}}
                numberMax={counter.numberMax}
                numberMin={counter.numberMin}
            />
            <CounterIncrement
                counter={{...counter}}
                getIncrementValue={getIncrementValue}
                clickIncrement={clickIncrement}
                resetIncrement={resetIncrement}
            />
        </div>
    );
}

export default App;
