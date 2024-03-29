import React from 'react';
import {UniversalButton} from "../universal-button/Universal-button";
import {UniversalInput} from "../universal-input/Universal-input";
import st from './Counter-settings.module.css';

export type CounterSettingsPropsType = {
    maxValue: number
    minValue: number
    wordsFiltered: string
    settingMaxValue: (maxValue: string) => void
    settingMinValue: (minValue: string) => void
    clickButton: () => void
}

export const CounterSettings = ({
                                    maxValue,
                                    minValue,
                                    wordsFiltered,
                                    settingMaxValue,
                                    settingMinValue,
                                    clickButton
                                }: CounterSettingsPropsType) => {

    let error = `${st.errorValue}`
    let opacity = `${st.errorButton}`

    return (
        <div className={st.blockSettingForm}>
            <div className={st.subBlockSettings}>
                <div className={st.blockInput}>
                    <div className={st.inputMax}>
                        <div className={st.itemText}>
                            max value:
                        </div>
                        <div className={st.itemInput}>
                            <UniversalInput
                                className={maxValue <= 0 || maxValue <= minValue ? error : ""}
                                type="number"
                                valueInc={maxValue}
                                getIncrementValue={settingMaxValue}
                            />
                        </div>
                    </div>
                    <div className={st.line}></div>
                    <div className={st.inputStart}>
                        <div className={st.itemText}>
                            min value:
                        </div>
                        <div>
                            <UniversalInput
                                className={minValue < 0 || minValue >= maxValue ? error : ""}
                                type="number"
                                valueInc={minValue}
                                getIncrementValue={settingMinValue}
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className={st.buttonSet}>
                <div className={minValue < 0 || minValue >= maxValue || wordsFiltered !== "counter setting" ? opacity : ""}>
                    <UniversalButton
                        nameButton="save"
                        disabled={minValue < 0 || minValue >= maxValue || wordsFiltered !== "counter setting"}
                        clickButton={clickButton}
                    />
                </div>
            </div>
        </div>
    );
};

