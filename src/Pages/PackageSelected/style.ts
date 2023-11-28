import Slider from 'react-slick';
import styled from 'styled-components';
import isPropValid from '@emotion/is-prop-valid';


export const BackgroundImage = styled.div`
    background-image: url('/background.jpg');
    background-size: 100% auto; 
    background-repeat: no-repeat;
    background-position: center 26%; 
    position: relative;
    width: 100%; 
    z-index: 1;
    padding: 6rem 3rem 1rem 3rem;
    
    @media screen and (max-width: 768px) {
        padding-top: 100px;
    }
`

export const Container = styled.div`
  margin-top: 30px; 
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column; 
  align-items: center; 
`;

export const SliderWrapper = styled.div`
  width: 80%; 
  margin: 20px auto; 
  .slick-slider {
    position: relative;
  }
  @media screen and (max-width: 1024px) {
    width: 100%;
    margin: 10px auto;
  }
`;

export const Image = styled.img`
  width: 40rem;
  height: 30rem;
  image-rendering: auto;
  display: block; 
  margin: auto; 

  @media screen and (max-width: 1024px) {
    max-height: auto;
    width: 30rem;
    height: 20rem;
  }

  @media screen and (max-width: 768px) {
    max-height: auto;
    width: 100% !important;
    height: 20rem;
  }
`;

export const ImageContainer = styled.div`
  background-color: rgb(245, 246, 247);
`

export const ImagePagination = styled.img`
  opacity: 0.5;
  &:focus {
    opacity: 1;
  }
`;
export const SliderContainer = styled.div`
  width: 100%; 
  display: flex; 
  flex-direction: row; 
  align-items: center; 
  
  @media (max-width: 1024px) { 
    flex-direction: column;
    max-height: 100%;
  }
`;

export const MainSliderWrapper = styled.div`
  width: calc(100% - 120px); 
  margin: 0;
  padding: 0;
`;

export const ThumbnailSliderWrapper = styled.div`
  width: 120px; 
  height: 100%; 
  overflow: hidden; 
  .slick-slide {
    height: 100%; 
    display: flex; 
    justify-content: center; 
    align-items: center; 
  }
  @media screen and (max-width: 1024px) {
    display: none;
  }
`;

export const PackageInfo = styled.div`
  width: 70%;
  text-align: center;
  margin-bottom: 20px;
`;

export const PackageName = styled.h2`
  font-size: 24px;
  font-weight: bold;
`;

export const Description = styled.p`
  font-size: 16px;
  color: #666;
  margin-bottom: 20px;
`;

export const PriceButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 70%;
`;


export const PackagePrice = styled.p`
  font-size: 28px;
  font-weight: bold;
  color: #66857A;
  margin-right: 20px; 

  @media screen and (max-width: 1024px) {
    font-size: 20px;
  }
`;
export const ThumbnailSlider = styled(Slider)`
  .slick-list {
    margin: 0; 
  }

  .slick-track{
    height: 100% !important;
  }
  .slick-slide img {
    transition: opacity 0.5s ease;
    opacity: 0.5; 
  }

  .slick-current img {
    opacity: 1;
  }
`;

export const ReserveButton = styled.button`
  padding: 10px 20px;
  background-color: #66857A;
  color: white;
  font-size: 18px;
  border: none;
  font-weight: 600;
  cursor: pointer;
  &:hover {
    background-color: #66855F;
  }
`;

export const Arrow = styled.div.withConfig({
  shouldForwardProp: (prop) => isPropValid(prop) && prop !== 'currentSlide' && prop !== 'slideCount',
})`
  z-index: 100;
  color: #333;
  cursor: pointer;
  position: absolute;
  top: 50%;
  transform: translate(0, -50%);

  &.slick-prev {
    left: 25px;
  }

  &.slick-next {
    right: 25px;
  }

  &:before {
    font-size: 30px; 
    color: #333; 
    opacity: 1; 
     @media screen and (max-width: 1024px) {
      color: #fff;
    }
  }
`;

export const Title = styled.h2`
    margin-top: 15px;
    color: #1a0909;
    margin:0 ;
    font-size: 31px;
    font-weight: bold;
    font-weight: 700;
    display: block;
    line-height: 16px;
     @media (max-width: 768px) { 
        font-size: 1.5rem;
   }
`