
import React, { useEffect } from 'react';
import Layout from '../../components/Layout';
import * as S from './style'
import DualInput from '../../components/DualInput';
import { Icon } from '@iconify/react';
import { getTravelPackages } from '../../services/api';
import PackageList from '../../components/PackageList';
import Loading from '../../components/Loading';
import { useNavigate } from 'react-router-dom';

const Home: React.FC = () => {
    const [packages, setPackages] = React.useState<any[]>([]);
    const [loading, setLoading] = React.useState(false);

    const [origin, setOrigin] = React.useState('');
    const [destination, setDestination] = React.useState('');
    const [startDate, setStartDate] = React.useState('');
    const [endDate, setEndDate] = React.useState('');
    const [adults, setAdults] = React.useState('');
    const [rooms, setRooms] = React.useState('');

    const navigate = useNavigate();

    const handleOriginChange = (value: string | Date) => {
        setOrigin(value as string);
    }

    const handleDestinationChange = (value: string | Date) => {
        setDestination(value as string);
    }

    const handleStartDateChange = (value: string | Date) => {
        const stringDate = value as Date ? (value as Date).toISOString().split('T')[0] : '';
        setStartDate(stringDate);
    }

    const handleEndDateChange = (value: string | Date) => {
        const stringDate = value as Date ? (value as Date).toISOString().split('T')[0] : '';
        setEndDate(stringDate);
    }

    const handleAdultsChange = (value: string | Date) => {
        setAdults(value as string);
    }

    const handleRoomsChange = (value: string | Date) => {
        setRooms(value as string);
    }

    const handleSearchClick = () => {
        navigate(`/pacotes?origin=${origin}&destination=${destination}&startDate=${startDate}&endDate=${endDate}&adults=${adults}&rooms=${rooms}`);
    }


    useEffect(() => {
        setLoading(true);
        getTravelPackages().then((response) => {
            setPackages(response.data);
            setLoading(false);
        }).catch((error) => {
            console.log(error);
            setLoading(false);
        });
    }, []);

    return (
        <>
            {loading && <Loading />}
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
                                        leftValue={origin}
                                        rightValue={destination}
                                        onLeftChange={handleOriginChange}
                                        onRightChange={handleDestinationChange}
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
                                        leftValue={startDate}
                                        rightValue={endDate}
                                        onLeftChange={handleStartDateChange}
                                        onRightChange={handleEndDateChange}
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
                                        leftValue={rooms}
                                        rightValue={adults}
                                        onLeftChange={handleRoomsChange}
                                        onRightChange={handleAdultsChange}
                                    />
                                </div>
                            </S.ColDivSearch>
                            <S.SearchButton onClick={handleSearchClick}>
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
                                <path fill="none" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="m12 24l12-12l12 12M12 36l12-12l12 12" />
                            </g>
                        </svg>

                    </S.PromoSection>
                </S.BackgroundImage>
                <S.SecondSection>
                    <S.SecondSectionContainer>
                        <S.SecondSectionRow>
                            <S.SecondSectionTitle>
                                <Icon icon="fontisto:suitcase" style={{ marginRight: "10px" }} />
                                Pacotes em destaque
                            </S.SecondSectionTitle>
                        </S.SecondSectionRow>
                        <S.SecondSectionDescription>
                            Confira os pacotes mais vendidos e aproveite!
                        </S.SecondSectionDescription>
                    </S.SecondSectionContainer>
                    <PackageList packages={packages} />
                </S.SecondSection>
            </Layout>
        </>
    );
};

export default Home;
