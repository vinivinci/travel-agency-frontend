import React, { useEffect, useState } from 'react';
import * as S from './style';
import loadingAnimation from '../../assets/loading.json';
import Lootie from 'lottie-react';

const Loading: React.FC<{ isLoading: boolean }> = ({ isLoading }) => {
    const [isVisible, setIsVisible] = useState(isLoading);


    useEffect(() => {

        let timeoutId: NodeJS.Timeout;

        if (!isLoading) {
            timeoutId = setTimeout(() => setIsVisible(false), 1000);
        } else {
            setIsVisible(true);
        }

        return () => {
            clearTimeout(timeoutId);
            document.body.style.overflow = 'unset';
        }
    }, [isLoading]);



    return isVisible ? (
        <S.FullScreenWrapper>
            <Lootie animationData={loadingAnimation} loop style={{ width: "400px" }} />
            <S.LoadingLabel>Carregando...</S.LoadingLabel>
        </S.FullScreenWrapper>
    ) : null;
};

export default Loading;
