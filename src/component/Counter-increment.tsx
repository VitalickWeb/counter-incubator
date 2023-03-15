import React from 'react';
import {UniversalInput} from "./Universal-input";
import {UniversalButton} from "./Universal-button";
import st from './Counter-increment.module.css'


export type CounterIncrementPropsType = {
    maxValue: number
    valueInc: number
    getIncrementValue: (valueInc: number) => void
    clickIncrement: () => void
    resetIncrement: () => void
    inkDisabled: boolean
    errorMessage: string
}

export const CounterIncrement = ({
                                     maxValue,
                                     valueInc,
                                     clickIncrement,
                                     resetIncrement,
                                     inkDisabled,
                                     errorMessage,
}: CounterIncrementPropsType) => {
console.log(errorMessage)
    let opacity = `${st.disabled}`
    let colored = `${st.innerInput}`

    return (
        <div className={st.blockForm}>
            <div className={st.inputIncrement}>
                <UniversalInput
                    className={valueInc >= maxValue ? colored : ""}
                    type="text"
                    valueInc={valueInc}
                />
            </div>
            <div className={st.blockButtons}>
                <div className={valueInc >= 5 ? opacity : ""}>
                    <UniversalButton
                        nameButton="ink"
                        inkDisabled={inkDisabled}
                        clickIncrement={clickIncrement}
                    />
                </div>
                <div className={st.buttonReset}>
                    <UniversalButton
                        nameButton="reset"
                        clickIncrement={resetIncrement}
                    />
                </div>
            </div>
        </div>
    );
};

