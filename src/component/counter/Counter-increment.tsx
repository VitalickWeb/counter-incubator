import React from 'react';
import {UniversalInput} from "../universal-input/Universal-input";
import {UniversalButton} from "../universal-button/Universal-button";
import st from './Counter-increment.module.css';


export type CounterIncrementPropsType = {
    maxValue: number
    valueInc: number
    getIncrementValue: (valueInc: string) => void
    clickButton: () => void
    resetIncrement: () => void
    disabled: boolean
    errorMessage: string
    wordsFiltered: string
}

export const CounterIncrement = ({
                                     maxValue,
                                     valueInc,
                                     clickButton,
                                     resetIncrement,
                                     disabled,
                                     errorMessage,
                                     wordsFiltered,
}: CounterIncrementPropsType) => {
    console.log(wordsFiltered)
    let colored = `${st.innerInput}`
    let opacity = `${st.disabled}`
    let styleInput = `${wordsFiltered === "error" ? st.inputIncorrect : st.inputCorrect}`

    return (
        <div className={st.blockForm}>
            <div className={st.subBlockCounter}>
                <div className={st.inputInc}>
                    {wordsFiltered === "error" || wordsFiltered === "counter setting"
                        ? <div className={styleInput}>{errorMessage}</div>
                        : <UniversalInput
                            className={valueInc >= maxValue ? colored : ""}
                            type="text"
                            valueInc={valueInc}
                        />}
                </div>
            </div>

            <div className={st.blockButtons}>
                <div className={st.blockButtonInc}>
                    <div className={st.buttonInc}>
                        <div className={errorMessage !== "" || valueInc >= maxValue ? opacity : ""}>
                            <UniversalButton
                                nameButton="ink"
                                disabled={wordsFiltered === "init" ? false : disabled}
                                clickButton={clickButton}
                            />
                        </div>
                    </div>
                </div>
                <div className={st.blockButtonRes}>
                    <div className={st.buttonReset}>
                        <div className={errorMessage !== "" ? opacity : ""}>
                            <UniversalButton
                                nameButton="reset"
                                disabled={wordsFiltered === "init" ? false : disabled}
                                clickButton={resetIncrement}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

