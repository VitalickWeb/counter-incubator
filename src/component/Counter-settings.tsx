import React from 'react';
import {UniversalButton} from "./Universal-button";
import {UniversalInput} from "./Universal-input";

export type CounterSettingsPropsType = {
    maxValue: number
    minValue: number
    settingMaxValue: (maxValue: number) => void
    settingMinValue: (minValue: number) => void
}

export const CounterSettings = ({
                                    maxValue,
                                    minValue,
                                    settingMaxValue,
                                    settingMinValue,
                                }: CounterSettingsPropsType) => {

    return (
        <div>
            <UniversalInput
                type="number"
                valueInc={maxValue}
                getIncrementValue={settingMaxValue}
            />

            <UniversalInput
                type="number"
                valueInc={minValue}
                getIncrementValue={settingMinValue}
            />

            <UniversalButton
                nameButton="set"
            />
        </div>
    );
};

