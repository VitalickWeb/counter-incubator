import React from 'react';
import {UniversalInput} from "./Universal-input";
import {UniversalButton} from "./Universal-button";
import st from './Counter-increment.module.css'
import {CounterType} from "../App";


export type CounterIncrementPropsType = {
    counter: CounterType
    getIncrementValue: (valueInc: number) => void
    clickIncrement: () => void
    resetIncrement: () => void
}

export const CounterIncrement = ({
                                     counter,
                                     getIncrementValue,
                                     clickIncrement,
                                     resetIncrement
}: CounterIncrementPropsType) => {


    return (
        <div>
            <UniversalInput
                type="text"
                counter={counter}
                getIncrementValue={getIncrementValue}
            />
            <div className={st.blockButtons}>
                <div className={st.buttonInc}>
                    <UniversalButton
                        nameButton="ink"
                        clickIncrement={clickIncrement}
                        counter={counter}
                    />
                </div>
                <div className={st.buttonReset}>
                    <UniversalButton
                        nameButton="reset"
                        clickIncrement={resetIncrement}
                        counter={counter}
                    />
                </div>
            </div>
        </div>
    );
};

