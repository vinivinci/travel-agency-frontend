import React, { useEffect } from 'react';
import * as S from './style';
import loadingAnimation from '../../assets/loading.json';
import Lootie from 'lottie-react';

const Loading: React.FC = () => {

    useEffect(() => {
        document.body.style.overflow = 'hidden';
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, []);

    return (
        <S.FullScreenWrapper>
            <Lootie animationData={loadingAnimation} loop style={{ width: "400px" }} />
            <S.LoadingLabel>Carregando...</S.LoadingLabel>
        </S.FullScreenWrapper>
    );
};

export default Loading;
