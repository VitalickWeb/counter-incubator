import React from 'react';
import {CounterType} from "../App";

export type UniversalButtonPropsType = {
    nameButton: string
    clickIncrement?: () => void
    counter: CounterType
}

export const UniversalButton = ({nameButton, clickIncrement, counter}: UniversalButtonPropsType) => {

    const clickIncrementChange = () => {
        clickIncrement && clickIncrement()
    }

    return (
        <div>
            <button disabled={counter.disabled}
                onClick={clickIncrementChange}>{nameButton}
            </button>
        </div>
    );
};
