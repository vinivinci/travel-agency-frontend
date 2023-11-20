import styled from "styled-components";

export const DivSearch = styled.div`
    background-color: #fff;
    border-radius: 20px;
    position: relative;
    z-index: 10;
    width: 100%;
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    @media (max-width: 768px) { 
        flex-direction: column;
        align-items: center;
        padding: 20px;
    }
`

export const BackgroundImage = styled.div`
     background-image: url('/background.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    position: relative;
    width: 100%; 
    z-index: 1;
    padding: 6rem 3rem 1rem 3rem;
    
    @media screen and (max-width: 768px) {
        padding-top: 100px;
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

export const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  justify-content: center; 
  align-items: stretch; 
  padding: 16px; 
`

export const TitleFindPackages = styled.h1`
    font-size: 2rem;
    font-weight: 1000;
    text-align: center;
    margin-bottom: 20px;
    @media (max-width: 768px) { 
        font-size: 1.5rem;
        margin-bottom: 20px;
    }
`

export const DescriptionFindPackages = styled.p`
    font-size: 1rem;
    font-weight: 500;
    text-align: center;
    margin-bottom: 20px;
    @media (max-width: 768px) { 
        font-size: 0.7rem;
        margin-bottom: 20px;
    }
`

export const EmptyPackages = styled.div`
    font-size: 1.5rem;
    font-weight: 700;
    text-align: center;
    padding: 20px;
    color: #66857A;
    @media (max-width: 768px) { 
        font-size: 0.7rem;
        margin-bottom: 20px;
    }

`