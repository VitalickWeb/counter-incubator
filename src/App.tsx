import React, {useState} from 'react';
import './App.css';
import {CounterIncrement} from "./component/counter/Counter-increment";
import {CounterSettings} from "./component/counter-settings/Counter-settings";

export type StatusType = "init" | "error" | "counter setting"

export type CounterType = {
    numberMax: number
    numberMin: number
    incValue: number
    disabled: boolean
    message: string
    status: StatusType
}

function App() {
    const [counter, setCounter] = useState<CounterType>({
        numberMax: 5,
        numberMin: 0,
        incValue: 0,
        disabled: false,
        message: "" ,
        status: "init" as StatusType,
    })

console.log(counter)
    const settingMaxValue = (maxValue: string) => {
        if (+maxValue <= 0 || +maxValue <= counter.numberMin || counter.numberMin < 0) {
            setCounter({...counter, status: "error", message: "Incorrect value!", disabled: true, numberMax: +maxValue})
        } else {
            setCounter({...counter, message: "Enter values and press 'save'", status: "counter setting", disabled: true, numberMax: +maxValue})
        }
    }

    const settingMinValue = (minValue: string) => {
        if (+minValue < 0 || +minValue >= counter.numberMax) {
            setCounter({...counter, status: "error", message: "Incorrect value!", disabled: true, numberMin: +minValue})
        } else {
            setCounter({...counter, message: "Enter values and press 'save'", status: "counter setting", disabled: true, numberMin: +minValue, incValue: 0})
        }
    }

    const getIncrementValue = (valueInc: string) => {
        if (counter.numberMax > 0 || counter.numberMax > counter.numberMin) {
            setCounter({...counter, incValue: +valueInc})
        }
    }

    const saveSettings = () => {
        setCounter({...counter, incValue: counter.numberMin, message: "", status: "init"})
    }

    const clickIncrement = () => {
        if (counter.incValue < counter.numberMax) {
            setCounter({...counter, incValue: counter.incValue + 1})
        }
    }

    const resetIncrement = () => {
        setCounter({...counter, incValue: counter.numberMin})
    }

    return (
        <div className="App">
            <div className="mainContainer">
                <CounterSettings
                    maxValue={counter.numberMax}
                    minValue={counter.numberMin}
                    wordsFiltered={counter.status}
                    settingMaxValue={settingMaxValue}
                    settingMinValue={settingMinValue}
                    clickButton={saveSettings}
                />
                <CounterIncrement
                    maxValue={counter.numberMax}
                    wordsFiltered={counter.status}
                    errorMessage={counter.message}
                    valueInc={counter.incValue}
                    disabled={counter.disabled}
                    getIncrementValue={getIncrementValue}
                    clickButton={clickIncrement}
                    resetIncrement={resetIncrement}
                />
            </div>
        </div>
    );
}

export default App;
