import React from 'react';

export type UniversalButtonPropsType = {
    nameButton: string
    clickIncrement?: () => void
    inkDisabled?: boolean
}

export const UniversalButton = ({
                                    nameButton,
                                    clickIncrement,
                                    inkDisabled
}: UniversalButtonPropsType) => {

    return (
        <div>
            <button
                disabled={inkDisabled && inkDisabled}
                onClick={clickIncrement}>{nameButton}
            </button>
        </div>
    );
};
