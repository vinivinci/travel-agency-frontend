import styled from "styled-components";

export const BackgroundImage = styled.div`
     background-image: url('/background.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    position: relative;
    width: 100%; 
    z-index: 1;
    min-height: 90vh;
    padding-top: 10rem;
    @media screen and (max-width: 768px) {
        padding-top: 1px;
    }
`

export const FirstSection = styled.div`
    padding: 10px 5rem;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    @media screen and (max-width: 768px) {
        padding: 10px 5px;
        margin-top: 10rem;
    }
`

export const Title = styled.h1`
    font-size: 2rem;
    font-weight: 1000;
    text-align: left !important;
    margin-left: 1rem;
    color: #fff;
    text-align: center;
     @media (max-width: 768px) { 
        font-size: 2rem;
        margin-left: 1px;
        text-align: center  !important;;
   }
`

export const DivSearch = styled.div`
    background-color: #fff;
    border-radius: 20px;
    position: relative;
    z-index: 10;
    width: 100%;
    padding: 40px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    @media (max-width: 768px) { 
        flex-direction: column;
        align-items: center;
        padding: 20px;
    }
`

export const ColDivSearch = styled.div`
    width: calc(33% - 20px); 
    margin:10px;
     @media (max-width: 1000px) { 
        width: 100%; 
        margin: 10px 0; 
    }
`

export const LabelDivSearch = styled.label`
    font-size: 1rem;
    font-weight: 1000;
    text-align: left !important;
    color: #000;
    text-align: center;
`

export const SearchButton = styled.button`
    background-color: #66857A;
    color: #fff;
    border-radius: 10px;
    padding: 10px 20px;
    margin-top: 30px;
    width: 100%;
    display: flex;
    max-width: 400px;
    align-items: center;
    justify-content: center;

    &:hover {
        background-color: #fff;
        color: #66857A;
        border: 1px solid #66857A;
    }

`
export const PromoSection = styled.div`
  margin-top: 2rem;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 3rem 5rem; 
  display: flex;
  flex-direction: column;
  font-weight: bold;
  align-items: center;
  justify-content: center;
  text-align: center;
   @media (max-width: 768px) { 
        padding: 0; 
    
   }
`;

export const PromoTitle = styled.h2`
  font-size: 2rem;
  color: #fff; 
  margin-bottom: 1rem; 
`;

export const PromoContent = styled.p`
  font-size: 1rem;
  color: #fff; 
  text-align: center;
  max-width: 800px; 
`;

export const SecondSection = styled.div`
    background-color: #fff;
    width: 100%;
    padding: 0;
    padding-bottom: 2rem;
`
export const SecondSectionContainer = styled.div`
    width: 100%;
    margin: 0 auto;
    padding: 2rem;
    @media (max-width: 768px) { 
        padding: 1rem;
   }
`

export const SecondSectionRow = styled.div`
    display: flex;
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
   
`
export const SecondSectionTitle = styled.h2`
    color: #1a0909;
    margin:0 ;
    font-size: 2rem;
    font-weight: 700;
    display: block;
    line-height: 16px;
     @media (max-width: 768px) { 
        font-size: 1.5rem;
   }
`

export const SecondSectionDescription = styled.p`
    color: #1a0909;
    font-weight: 500;
    font-size: 18px;
    margin-left: 44px;
    line-height: 16px;
    @media (max-width: 768px) { 
        font-size: 14px;
        margin-left: 0;
   }
`