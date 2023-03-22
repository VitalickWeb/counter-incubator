import React, {ChangeEvent} from 'react';


export type UniversalInputPropsType = {
    type: string
    valueInc: number
    getIncrementValue?: (valueInc: string) => void
    className?: string
}

export const UniversalInput = ({
                                   type,
                                   valueInc,
                                   getIncrementValue,
                                   className,
}: UniversalInputPropsType) => {

const changeIncrementValue = (e: ChangeEvent<HTMLInputElement>) => {
    getIncrementValue && getIncrementValue(e.currentTarget.value)
}

    let style = `${className}`

    return (
        <>
            <input
                className={style}
                type={type}
                value={valueInc}
                onChange={changeIncrementValue}
            />
        </>
    );
};

