
import React from 'react';
import Layout from '../../components/Layout';
import * as S from './style'
import DualInput from '../../components/DualInput';
import { Icon } from '@iconify/react';

const Home: React.FC = () => {
    return (
        <Layout>
            <S.BackgroundImage >
                <S.FirstSection>
                    <S.Title>
                        Encontre seu destino
                    </S.Title>
                    <S.DivSearch>
                        <S.ColDivSearch>
                            <S.LabelDivSearch>
                                Selecione:
                            </S.LabelDivSearch>
                            <div style={{ marginTop: "10px" }}>
                                <DualInput
                                    leftIcon='mdi:location'
                                    rightIcon='mdi:location'
                                    leftType='text'
                                    rightType='text'
                                    leftPlaceholder='Origem'
                                    rightPlaceholder='Destino'
                                />
                            </div>

                        </S.ColDivSearch>
                        <S.ColDivSearch>
                            <S.LabelDivSearch>
                                Selecione:
                            </S.LabelDivSearch>
                            <div style={{ marginTop: "10px" }}>
                                <DualInput
                                    leftIcon='material:calendar-today'
                                    leftType='date'
                                    rightType='date'
                                    rightIcon='material:calendar-today'
                                    leftPlaceholder='Data de ida'
                                    rightPlaceholder='Data de volta'
                                />
                            </div>
                        </S.ColDivSearch>
                        <S.ColDivSearch>
                            <S.LabelDivSearch>
                                Selecione:
                            </S.LabelDivSearch>
                            <div style={{ marginTop: "10px" }}>
                                <DualInput
                                    leftIcon='material-symbols:bed'
                                    rightIcon='material-symbols:group'
                                    leftType='number'
                                    rightType='number'
                                    leftPlaceholder='Quartos'
                                    rightPlaceholder='Viajantes'
                                />
                            </div>
                        </S.ColDivSearch>
                        <S.SearchButton>
                            Buscar Destino
                            <Icon icon="ic:round-arrow-circle-up" style={{ marginLeft: "10px" }} width={30} rotate={1} />
                        </S.SearchButton>


                    </S.DivSearch>

                </S.FirstSection>
                <S.PromoSection>
                    <S.PromoTitle>
                        Confira as promoções de hotéis!
                    </S.PromoTitle>
                    <S.PromoContent>
                        Aproveite os melhores descontos e ofertas exclusivas para sua próxima viagem.
                    </S.PromoContent>
                    <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 48 48">
                        <g transform="rotate(180 24 24)">
                            <path fill="none" stroke="white" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="m12 24l12-12l12 12M12 36l12-12l12 12" />
                        </g>
                    </svg>

                </S.PromoSection>
            </S.BackgroundImage>
        </Layout>
    );
};

export default Home;
