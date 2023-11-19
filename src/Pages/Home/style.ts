import styled from "styled-components";

export const BackgroundImage = styled.div`
    background-image: url('/background.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    position: absolute;
    width: 100%;
    top: 0;
      z-index: -1;
`

export const FirstSection = styled.div`
    padding: 10px 5rem;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    margin-top: 12rem;
`

export const Title = styled.h1`
    font-size: 2rem;
    font-weight: 1000;
    text-align: left !important;
    margin-left: 1rem;
    color: #fff;
    text-align: center;
`

export const DivSearch = styled.div`
    background-color: #fff;
    border-radius: 20px;
    width: 100%;
    padding: 40px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    @media (max-width: 768px) { // Ajuste o breakpoint conforme necessário
        flex-direction: column;
        align-items: center;
        padding: 20px;
    }
`

export const ColDivSearch = styled.div`
    width: calc(33% - 20px); 
    margin:10px;
     @media (max-width: 1000px) { // Ajuste o breakpoint conforme necessário
        width: 80%; // Ou 100% se preferir que ocupe toda a largura disponível
        margin: 10px 0; // Ajuste a margem vertical para empilhar corretamente
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