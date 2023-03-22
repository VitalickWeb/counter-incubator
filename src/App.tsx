import React, {useState} from 'react';
import './App.css';
import {CounterIncrement} from "./component/counter/Counter-increment";
import {CounterSettings} from "./component/counter-settings/Counter-settings";

export type WordFilter = "" | "error" | "save" | "Incorrect value!" | "Enter values and press 'save'"

export type CounterType = {
    numberMax: number
    numberMin: number
    incValue: number
    disabled: boolean
    message: string
    wordsFiltered: WordFilter
}

function App() {
    const [counter, setCounter] = useState<CounterType>({
        numberMax: 5,
        numberMin: 0,
        incValue: 0,
        disabled: false,
        message: "" ,
        wordsFiltered: "" as WordFilter,
    })

console.log(counter)
    const settingMaxValue = (maxValue: number) => {
        if (maxValue <= 0 || maxValue <= counter.numberMin || counter.numberMin < 0) {
            setCounter({...counter, wordsFiltered: "error", message: "Incorrect value!", disabled: true, numberMax: maxValue})
        } else {
            setCounter({...counter, message: "Enter values and press 'save'", wordsFiltered: "save", disabled: true, numberMax: maxValue})
        }
    }

    const settingMinValue = (minValue: number) => {
        if (minValue < 0 || minValue >= counter.numberMax) {
            setCounter({...counter, wordsFiltered: "error", message: "Incorrect value!", disabled: true, numberMin: minValue})
        } else {
            setCounter({...counter, message: "Enter values and press 'save'", wordsFiltered: "save", disabled: true, numberMin: minValue, incValue: 0})
        }
    }

    const getIncrementValue = (valueInc: number) => {
        if (counter.numberMax > 0 || counter.numberMax > counter.numberMin) {
            setCounter({...counter, incValue: valueInc})
        }
    }

    const saveSettings = () => {
        setCounter({...counter, incValue: counter.numberMin, message: "", wordsFiltered: ""})
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
                    disabled={counter.disabled}
                    wordsFiltered={counter.wordsFiltered}
                    settingMaxValue={settingMaxValue}
                    settingMinValue={settingMinValue}
                    clickButton={saveSettings}
                />
                <CounterIncrement
                    maxValue={counter.numberMax}
                    wordsFiltered={counter.wordsFiltered}
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
