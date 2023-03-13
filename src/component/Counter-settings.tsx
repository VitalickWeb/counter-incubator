import React from 'react';
import {UniversalButton} from "./Universal-button";
import {CounterType} from "../App";

export type CounterSettingsPropsType = {
    numberMax: number
    numberMin: number
    counter: CounterType
}

export const CounterSettings = ({
                                    numberMax,
                                    numberMin,
                                    counter,
                                }: CounterSettingsPropsType) => {


    return (
        <div>
            {/*<UniversalInput*/}
            {/*    type="number"*/}
            {/*    numberMax={numberMax}*/}
            {/*/>*/}

            {/*<UniversalInput*/}
            {/*    type="number"*/}
            {/*    numberMin={numberMin}*/}
            {/*/>*/}

            <UniversalButton
                nameButton="set"
                counter={counter}
            />
        </div>
    );
};

