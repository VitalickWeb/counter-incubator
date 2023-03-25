import React from 'react';
import './App.css';
import {CounterIncrement} from "./component/counter/Counter-increment";
import {CounterSettings} from "./component/counter-settings/Counter-settings";
import {
    clickIncrementAC,
    getIncrementValueAC,
    resetIncrementAC,
    saveSettingsAC,
    settingMaxValueAC,
    settingMinValueAC
} from "./state/counter-reducer";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "./state/store";

export type StatusType = "init" | "error" | "counter setting"

export type CounterStateType = {
    numberMax: number
    numberMin: number
    incValue: number
    disabled: boolean
    message: string
    status: StatusType
}

function App() {
    const counter = useSelector<AppRootStateType, CounterStateType>(state => state.counter)
    const dispatch = useDispatch()

    const settingMaxValue = (maxValue: string) => {
        dispatch(settingMaxValueAC(maxValue))
    }
    const settingMinValue = (minValue: string) => {
        dispatch(settingMinValueAC(minValue))
    }
    const getIncrementValue = (valueInc: string) => {
        dispatch(getIncrementValueAC(valueInc))
    }
    const saveSettings = () => {
        dispatch(saveSettingsAC())
    }
    const clickIncrement = () => {
        dispatch(clickIncrementAC())
    }
    const resetIncrement = () => {
        dispatch(resetIncrementAC())
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
