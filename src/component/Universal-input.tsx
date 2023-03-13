import React, {ChangeEvent} from 'react';
import {CounterType} from "../App";


export type UniversalInputPropsType = {
    type: string
    counter: CounterType
    getIncrementValue: (valueInc: number) => void
}

export const UniversalInput = ({
                                   type, counter, getIncrementValue
}: UniversalInputPropsType) => {

const changeIncrementValue = (evt: ChangeEvent<HTMLInputElement>) => {
    console.log(evt.currentTarget.value)
    getIncrementValue(+evt.currentTarget.value)
}

    return (
        <form>
            <input
                type={type}
                value={counter.incValue}
                onChange={changeIncrementValue}
            />
        </form>
    );
};

