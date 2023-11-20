import React from 'react';
import 'react-datepicker/dist/react-datepicker.css';
import { Icon } from '@iconify/react';
import { DualInputContainer, StyledInput, Separator, StyledDatePicker } from './style';
import ptBR from 'date-fns/locale/pt-BR';

interface DualInputProps {
    leftType: 'text' | 'date' | 'number';
    rightType: 'text' | 'date' | 'number';
    leftPlaceholder?: string;
    rightPlaceholder?: string;
    leftValue?: string | Date;
    rightValue?: string | Date;
    onLeftChange?: (value: string | Date) => void;
    onRightChange?: (value: string | Date) => void;
    leftIcon?: string;
    rightIcon?: string;
}

const DualInput: React.FC<DualInputProps> = ({
    leftType,
    rightType,
    leftPlaceholder,
    rightPlaceholder,
    leftValue,
    rightValue,
    onLeftChange,
    onRightChange,
    leftIcon,
    rightIcon,
}) => {

    return (
        <DualInputContainer>
            {leftIcon && <Icon icon={leftIcon} />}
            {leftType === 'date' ? (
                <StyledDatePicker
                    selected={leftValue instanceof Date ? leftValue : leftValue ? new Date(leftValue) : null}
                    onChange={date => onLeftChange && onLeftChange(date as Date)}
                    placeholderText={leftPlaceholder}
                    locale={ptBR}
                />
            ) : (
                <StyledInput
                    type={leftType}
                    placeholder={leftPlaceholder}
                    value={leftValue as string}
                    onChange={e => onLeftChange && onLeftChange(e.target.value)}
                />
            )}
            <Separator />
            {rightIcon && <Icon icon={rightIcon} />}
            {rightType === 'date' ? (
                <StyledDatePicker
                    selected={rightValue instanceof Date ? rightValue : rightValue ? new Date(rightValue) : null}
                    onChange={date => onRightChange && onRightChange(date as Date)}
                    placeholderText={rightPlaceholder}
                    locale={ptBR}
                />
            ) : (
                <StyledInput
                    type={rightType}
                    placeholder={rightPlaceholder}
                    value={rightValue as string}
                    onChange={e => onRightChange && onRightChange(e.target.value)}
                />
            )}
        </DualInputContainer>
    );
};

export default DualInput;
