import React, {ChangeEvent} from 'react';


export type UniversalInputPropsType = {
    type: string
    valueInc: number
    getIncrementValue?: (valueInc: number) => void
    className?: string
}

export const UniversalInput = ({
                                   type,
                                   valueInc,
                                   getIncrementValue,
                                   className,
}: UniversalInputPropsType) => {

const changeIncrementValue = (e: ChangeEvent<HTMLInputElement>) => {
    getIncrementValue && getIncrementValue(+e.currentTarget.value)
}

    let style = `${className}`

    return (
        <form>
            <input
                className={style}
                type={type}
                value={valueInc}
                onChange={changeIncrementValue}
            />
        </form>
    );
};
