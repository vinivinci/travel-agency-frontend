import React, { useEffect, useRef } from 'react';
import Slider, { Settings } from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Package } from '../../interfaces/package';
import { useNavigate, useParams } from 'react-router-dom';
import Layout from '../../components/Layout';
import api from '../../services/api';
import Loading from '../../components/Loading';
import * as S from './style';

const PackageSelected: React.FC = () => {
    const params = useParams();
    const [packageSelected, setPackageSelected] = React.useState<Package>();
    const [loading, setLoading] = React.useState<boolean>(false);
    const { id } = params;
    const navigate = useNavigate();

    const mainSlider = useRef<Slider>(null);
    const thumbSlider = useRef<Slider>(null);

    const mainSettings: Settings = {
        infinite: false,
        nextArrow: <S.Arrow />,
        prevArrow: <S.Arrow />,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        asNavFor: thumbSlider.current!,
    };

    const thumbSettings: Settings = {
        infinite: false,
        slidesToShow: 5,
        slidesToScroll: 1,
        dots: false,
        focusOnSelect: true,
        vertical: true,
        verticalSwiping: true,
        asNavFor: mainSlider.current!,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    vertical: false,
                    verticalSwiping: false,
                    asNavFor: mainSlider.current!,
                },
            },
        ],
    };

    useEffect(() => {
        async function getPackage() {
            try {
                setLoading(true);
                const response = await api.get(`/travel-packages/${id}`);
                setPackageSelected(response.data);
            } catch (error) {
                console.error(error);
            } finally {
                setLoading(false);
            }
        }
        getPackage();
    }, [id]);

    return (
        <Layout>
            <Loading isLoading={loading} />
            <S.BackgroundImage />
            {packageSelected && (
                <S.Container>
                    <S.Title>{packageSelected.packageName}</S.Title>
                    <S.SliderWrapper>
                        <S.SliderContainer>
                            <S.MainSliderWrapper>
                                <Slider {...mainSettings} ref={mainSlider}>
                                    {packageSelected.images.map((image, index) => (
                                        <S.ImageContainer key={index}>
                                            <S.Image src={image.image} alt={packageSelected.packageName} />
                                        </S.ImageContainer>
                                    ))}
                                </Slider>
                            </S.MainSliderWrapper>
                            <S.ThumbnailSliderWrapper>
                                <S.ThumbnailSlider {...thumbSettings} ref={thumbSlider}>
                                    {packageSelected.images.map((image, index) => (
                                        <S.ImagePagination key={index + "thumb"} src={image.image} alt={`Thumbnail ${index}`} />
                                    ))}
                                </S.ThumbnailSlider>
                            </S.ThumbnailSliderWrapper>
                        </S.SliderContainer>
                    </S.SliderWrapper>
                    <S.PackageInfo>
                        <S.Description>{packageSelected.description}</S.Description>
                    </S.PackageInfo>
                    <S.PriceButtonWrapper>
                        <S.PackagePrice>R$ {packageSelected.price}</S.PackagePrice>
                        <S.ReserveButton onClick={() => navigate(`/checkout/${packageSelected.packageID}`)}>Reservar</S.ReserveButton>
                    </S.PriceButtonWrapper>
                </S.Container>
            )}
        </Layout>
    );

};

export default PackageSelected;
