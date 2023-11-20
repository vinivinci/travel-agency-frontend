import React, { useCallback, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { getTravelPackagesByQuery } from "../../services/api";
import Layout from "../../components/Layout";
import Loading from "../../components/Loading";
import * as S from "./style";
import DualInput from "../../components/DualInput";
import { Icon } from "@iconify/react";
import PackageCard from "../../components/PackageList/PackageCard";

const PackagesPage: React.FC = () => {
    const [loading, setLoading] = React.useState(false);
    const [searchParams] = useSearchParams();

    const [origin, setOrigin] = React.useState(searchParams.get('origin') || '');
    const [destination, setDestination] = React.useState(searchParams.get('destination') || '');
    const [startDate, setStartDate] = React.useState(searchParams.get('startDate') || '');
    const [endDate, setEndDate] = React.useState(searchParams.get('endDate') || '');
    const [adults, setAdults] = React.useState(searchParams.get('adults') || '');
    const [rooms, setRooms] = React.useState(searchParams.get('rooms') || '');

    const [packages, setPackages] = React.useState<any[]>([]);

    const handleOriginChange = useCallback((value: string | Date) => {
        setOrigin(value as string);
    }, []);

    const handleDestinationChange = useCallback((value: string | Date) => {
        setDestination(value as string);
    }, []);

    const handleStartDateChange = useCallback((value: string | Date) => {
        const stringDate = value as Date ? (value as Date).toISOString().split('T')[0] : '';
        setStartDate(stringDate);
    }, []);

    const handleEndDateChange = useCallback((value: string | Date) => {
        const stringDate = value as Date ? (value as Date).toISOString().split('T')[0] : '';
        setEndDate(stringDate);
    }, []);

    const handleAdultsChange = useCallback((value: string | Date) => {
        setAdults(value as string);
    }, []);

    const handleRoomsChange = useCallback((value: string | Date) => {
        setRooms(value as string);
    }, []);



    useEffect(() => {
        setLoading(true);
        const filteredParams = new URLSearchParams();
        for (const [key, value] of searchParams.entries()) {
            if (value) {
                filteredParams.append(key, value);
            }
        }
        getTravelPackagesByQuery(filteredParams).then((response) => {
            setPackages(response.data);
            setLoading(false);
        }).catch((error) => {
            console.log(error);
            setLoading(false);
        });
    }, [searchParams]);

    const handleSearchClick = useCallback(() => {
        setLoading(true);
        const filteredParams = new URLSearchParams();
        if (origin) {
            filteredParams.append('origin', origin);
        }
        if (destination) {
            filteredParams.append('destination', destination);
        }
        if (startDate) {
            filteredParams.append('startDate', startDate);
        }
        if (endDate) {
            filteredParams.append('endDate', endDate);
        }
        if (adults) {
            filteredParams.append('adults', adults);
        }
        if (rooms) {
            filteredParams.append('rooms', rooms);
        }
        getTravelPackagesByQuery(filteredParams).then((response) => {
            setPackages(response.data);
            setLoading(false);
        }).catch((error) => {
            setPackages([])
            console.log(error);
            setLoading(false);
        });
    }, [origin, destination, startDate, endDate, adults, rooms]);

    function formatValue(value: string, defaultValue: string) {
        return value ? value : defaultValue;
    }

    return (
        <>
            <Loading isLoading={loading} />
            <Layout>
                <S.BackgroundImage>
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
                            Filtrar
                            <Icon icon="ic:round-arrow-circle-up" style={{ marginLeft: "10px" }} width={30} rotate={1} />
                        </S.SearchButton>
                    </S.DivSearch>
                </S.BackgroundImage>
                <S.TitleFindPackages>
                    Pacotes encontrados:
                </S.TitleFindPackages>
                <S.DescriptionFindPackages>
                    Saída: {formatValue(origin, 'indefinida')} |
                    Destino: {formatValue(destination, "indefinido")} |
                    Ida: {formatValue(startDate, "Não selecionada")} |
                    Vinda: {formatValue(endDate, "Não selecionada")} |
                    Quartos: {formatValue(rooms, "Não selecionado")} |
                    Viajantes: {formatValue(adults, "Não selecionado")}
                </S.DescriptionFindPackages>
                {packages && packages.length > 0 ? (<S.CardContainer>
                    {
                        packages.map((item) => (
                            <PackageCard key={item.id} {...item} />
                        ))
                    }
                </S.CardContainer>) :
                    (
                        <S.EmptyPackages>
                            <div>
                                Nenhum pacote encontrado, refaça os filtros ou tente novamente mais tarde
                            </div>
                            <Icon width={200} color="#66857A" icon="tabler:mood-empty" />
                        </S.EmptyPackages>
                    )
                }
            </Layout>
        </>
    );
}

export default PackagesPage;