import React from 'react';
import { CustomArrowProps } from 'react-slick';

export const PrevArrow: React.FC<CustomArrowProps> = ({ className, style, onClick }) => (
    <div
        className={className}
        style={{ ...style, display: 'block', left: '10px', zIndex: 1 }}
        onClick={onClick}
    />
);

export const NextArrow: React.FC<CustomArrowProps> = ({ className, style, onClick }) => (
    <div
        className={className}
        style={{ ...style, display: 'block', right: '10px', zIndex: 1 }}
        onClick={onClick}
    />
);
