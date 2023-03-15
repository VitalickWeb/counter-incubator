import React, {useState} from 'react';
import './App.css';
import {CounterIncrement} from "./component/Counter-increment";
import {CounterSettings} from "./component/Counter-settings";

export type CounterType = {
    numberMax: number
    numberMin: number
    incValue: number
    disabled: boolean
    message: Array<string>
    error: boolean
}

function App() {
    const [counter, setCounter] = useState<CounterType>({
        numberMax: 5,
        numberMin: 1,
        incValue: 0,
        disabled: false,
        message: ["error", "Incorrect value", "enter values and press 'set'"],
        error: false
    })

    const settingMaxValue = (maxValue: number) => {
        setCounter({...counter, numberMax: maxValue})
    }

    const settingMinValue = (minValue: number) => {
        setCounter({...counter, numberMin: minValue})
    }

    const getIncrementValue = (valueInc: number) => {
        setCounter({...counter, incValue: valueInc})
    }

    const clickIncrement = () => {
        if (counter.incValue <= counter.numberMax) {
            setCounter({...counter, incValue: counter.incValue + 1})

            if (counter.incValue >= counter.numberMax) {
                setCounter({...counter, disabled: counter.disabled === true})
                // setCounter({...counter, message: counter.message})
            }
        } else {

        }
    }
    const resetIncrement = () => {
        setCounter({...counter, incValue: counter.incValue && 0})
    }

    return (
        <div className="App">
            <CounterSettings
                maxValue={counter.numberMax}
                minValue={counter.numberMin}
                settingMaxValue={settingMaxValue}
                settingMinValue={settingMinValue}
            />
            <CounterIncrement
                maxValue={counter.numberMax}
                valueInc={counter.incValue}
                inkDisabled={counter.disabled}
                errorMessage={counter.message[1]}
                getIncrementValue={getIncrementValue}
                clickIncrement={clickIncrement}
                resetIncrement={resetIncrement}
            />
        </div>
    );
}

export default App;
