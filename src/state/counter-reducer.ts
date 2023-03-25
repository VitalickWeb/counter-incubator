import {CounterStateType, StatusType} from "../App";


const initialState: CounterStateType = {
    numberMax: 5,
    numberMin: 0,
    incValue: 0,
    disabled: false,
    message: "" ,
    status: "init" as StatusType,
}

type settingMaxValueAT = ReturnType<typeof settingMaxValueAC>
type settingMinValueAT = ReturnType<typeof settingMinValueAC>
type getIncrementValueAT = ReturnType<typeof getIncrementValueAC>
type saveSettingsAT = ReturnType<typeof saveSettingsAC>
type clickIncrementAT = ReturnType<typeof clickIncrementAC>
type resetIncrementAT = ReturnType<typeof resetIncrementAC>

export type ActionsType = settingMaxValueAT |
                        settingMinValueAT |
                        getIncrementValueAT |
                        saveSettingsAT |
                        clickIncrementAT |
                        resetIncrementAT

export const counterReducer = (state: CounterStateType = initialState, action: ActionsType): CounterStateType =>  {
    console.log(state)
    console.log(action)
    switch (action.type) {
        case 'SETTING-MAX-VALUE': {
            return +action.maxValue <= 0 || +action.maxValue <= state.numberMin || state.numberMin < 0
            ? {...state, status: "error", message: "Incorrect value!", disabled: true, numberMax: +action.maxValue}
            : {...state, message: "Enter values and press 'save'", status: "counter setting", disabled: true, numberMax: +action.maxValue}
        }

        case 'SETTING-MIN-VALUE': {
            return +action.minValue < 0 || +action.minValue >= state.numberMax
            ? {...state, status: "error", message: "Incorrect value!", disabled: true, numberMin: +action.minValue}
            : {...state, message: "Enter values and press 'save'", status: "counter setting", disabled: true, numberMin: +action.minValue, incValue: 0}
        }

        case 'GET-INCREMENT-VALUE': {
            return state.numberMax > 0 || state.numberMax > state.numberMin
            ? {...state, incValue: +action.valueInc}
            : {...state, incValue: state.incValue}
        }

        case 'SAVE-SETTINGS': {
            return {...state, incValue: state.numberMin, message: "", status: "init"}
        }

        case 'CLICK-INCREMENT': {
           return  state.incValue < state.numberMax
           ? {...state, incValue: state.incValue + 1}
           : {...state, incValue: state.incValue}
        }

        case 'RESET-INCREMENT': {
            return {...state, incValue: state.numberMin}
        }

        default:
            return state
    }
}

export const settingMaxValueAC = (maxValue: string) => {
    return {
        type: "SETTING-MAX-VALUE",
        maxValue
    } as const
}
export const settingMinValueAC = (minValue: string) => {
    return {
        type: "SETTING-MIN-VALUE",
        minValue
    } as const
}
export const getIncrementValueAC = (valueInc: string) => {
    return {
        type: "GET-INCREMENT-VALUE",
        valueInc
    } as const
}
export const saveSettingsAC = () => {
    return {
        type: "SAVE-SETTINGS"
    } as const
}
export const clickIncrementAC = () => {
    return {
        type: "CLICK-INCREMENT"
    } as const
}
export const resetIncrementAC = () => {
    return {
        type: "RESET-INCREMENT"
    } as const
}