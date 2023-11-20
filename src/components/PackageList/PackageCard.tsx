import React from 'react';
import { Package } from '../../interfaces/package';
import * as S from './style';

const PackageCard: React.FC<Package> = ({
    packageName,
    description,
    destination,
    startDate,
    endDate,
    price,
    images
}) => {
    return (
        <S.Card>
            <S.SeeMoreButton >Ver mais</S.SeeMoreButton>
            <S.CardImage src={images[0].image} alt={packageName} />
            <S.CardInfo>
                <S.Destination>{destination}</S.Destination>
                <S.DateRange>{`${startDate} - ${endDate}`}</S.DateRange>
                <S.Price>{`A partir de R$ ${price}`}</S.Price>
            </S.CardInfo>
        </S.Card>
    );
};

export default PackageCard;
