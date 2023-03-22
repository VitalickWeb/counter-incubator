import React from 'react';

export type UniversalButtonPropsType = {
    nameButton: string
    clickButton?: () => void
    disabled?: boolean
}

export const UniversalButton = ({
                                    nameButton,
                                    clickButton,
                                    disabled,
}: UniversalButtonPropsType) => {

    return (
        <div>
            <button
                disabled={disabled && disabled}
                onClick={clickButton}>{nameButton}
            </button>
        </div>
    );
};
