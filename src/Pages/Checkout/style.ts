import styled, { css } from 'styled-components';

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


export const CheckoutContainer = styled.div`
  background: #fff;
  border-radius: 4px;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.1);
  margin: 2rem auto;
  padding: 2rem;
  max-width: 1000px;
`;

export const PaymentHeader = styled.h2`
  text-align: center;
  margin-bottom: 2rem;
  color: black;
`;

export const PaymentDescription = styled.p`
  color: #787878;
  font-size: 17px;
  font-family: Montserrat;
  font-weight: 400;
  line-height: 45.50px;
  word-wrap: break-word;
  margin-left: 10px;
`;

export const PaymentOptions = styled.div`
  display: flex;
  justify-content: space-around;
  margin-bottom: 2rem;

  @media screen and (max-width: 768px) {
    width: 100%;
    flex-direction: column;
    align-items: center;
  }
`;

const activeStyle = css`
  border-color: #66857A;
  background-color: rgba(102, 133, 122, 0.24);
  svg {
    fill: #007bff;
  }
`;

export const PaymentSection = styled.section`
  display: flex;
  justify-content: space-between;
  margin-bottom: 2rem;

  @media screen and (max-width: 768px) {
    width: 100%;
    flex-direction: column;
  }
`;

export const PaymentOption = styled.div<{ active: boolean }>`
  padding: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 150px;
  cursor: pointer;
  transition: all 0.3s ease;
  flex-direction: column;
  ${({ active }) => active && activeStyle}

  @media screen and (max-width: 768px) {
    width: 100%;
    margin: 10px;
  }
`;

export const CreditCardForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 15px;
  &:not(:last-child) {
    margin-right: 1rem; 
  }

  &.half-width {
    flex: 1;
    max-width: calc(47% - 0.5rem);
  }

  @media screen and (max-width: 768px) {
    &:not(:last-child) {
      margin-right: 0; 
    }
    &.half-width {
      max-width: 100%;
    }
    width: 100%;
  }
`;


export const Label = styled.label`
  margin-bottom: 0.5rem;
`;

export const FlexGroup = styled.div`
  display: flex;
  gap: 1rem;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;


export const Input = styled.input`
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  max-width: 100%;
  &:focus {
    border-color: #007bff;
    outline: none;
    box-shadow: 0 0 0 2px rgba(0, 123, 255, 0.25);
  }
`;

export const SubmitButton = styled.button`
   padding: 0.5rem 1rem;
   background-color: #66857A;
   color: white;
   border: none;
   border-radius: 4px;
   min-width: 150px;
   cursor: pointer;
   &:hover {
     background-color: #66858B;
   }
   margin-top: 20px; 
    align-self: flex-end;

   @media screen and (max-width: 768px) {
     width: 100%;
     margin-top: 1rem;
   }
`;
export const PaymentForm = styled.div`
  display: flex;
  justify-content: space-between;
  position: relative;
  align-items: flex-start;
  flex-direction: column;
   @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

export const FormPersonalDetails = styled.div`
  display: flex;
  flex-direction: column;
  padding-right: 1rem; 
  width: 48%; 

  @media screen and (max-width: 768px) {
    width: 100%;
    padding-right: 0;
  }
`;

export const FormPaymentDetails = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 1rem; 
  width: 48%; 

  @media screen and (max-width: 768px) {
    margin-top: 1rem;
    width: 100%;
    padding-left: 0;
  }
`;


export const StepsContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

export const StepIndicator = styled.div<{ active?: boolean }>`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
  font-family: Montserrat, sans-serif;
`;

export const StepNumber = styled.div`
  width: 25px;
  height: 25px;
  border-radius: 50%;
  background-color: #66857A; 
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 0.5rem;
`;

export const StepDescription = styled.span`
  font-size: 17px;
  color:  '#000' ;
`;


export const FormRow = styled.div`
  display: flex;
  justify-content: space-between; 
  align-items: flex-start; 
  flex-wrap: wrap;
  width: 100%;
  @media screen and (max-width: 768px) {
    width: 100%;
    flex-direction: column;
  }
`;
export const ItemDetailsCard = styled.div`
  background: #f8f8f8;
  border: 1px solid #e1e1e1;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  padding: 20px;
  margin-right: 2rem; 
  flex: 1; 

  h3 {
    margin-bottom: 0.5rem;
    font-size: 1.1rem;
    color: #333;
  }

  p {
    color: #666;
    font-size: 0.9rem;
  }

  @media screen and (max-width: 768px) {
    margin-right: 0;
    margin-bottom: 2rem; 
  }
`;

export const PaymentOptionsContainer = styled.div`
  flex: 1; 
  align-self: flex-end;
`;
