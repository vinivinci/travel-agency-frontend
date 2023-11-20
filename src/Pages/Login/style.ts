import { styled } from "styled-components";



export const LoginContainer = styled.div`
    display: flex;
    flex-direction: row;
    background-color: #fff;
    padding: 50px 30px;
    width: 50%;
    height: fit-content;
    border-radius: 5px;

    @media screen and (max-width: 1300px) {
        padding: 30px 10px;
        width: 70%;
    }

    @media screen and (max-width: 768px) {
        width: 100%;
        padding: 10px 10px;
        margin-top:25px;
    }
`;

export const BackgroundImage = styled.div`
    background-image: url('/background.jpg');
    justify-content: center;
    display: flex;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    position: relative;
    align-items: center;
    width: 100%; 
    z-index: 1;
    padding: 6rem 3rem 1rem 3rem;
    min-height: 92vh;
    @media screen and (max-width: 768px) {
        padding-top: 100px;
    }
`

export const LoginInput = styled.input`
    border-radius: 5px;
    border: 0.50px #6C6C6C solid;
    width: 100%;
    padding: 10px;
    margin-top:25px;
`;

export const LoginLabel = styled.label`
    color: black;
    font-size: 25px;
    font-family: Montserrat;
    font-weight: 500;
    line-height: 45.50px;
    word-wrap: break-word;
`;

export const TitleLogin = styled.h1`
    color: black;
    font-size: 25px;
    text-align: center;
    font-family: Montserrat;
    font-weight: 700;
    line-height: 45.50px;
    word-wrap: break-word;
    margin: 0;
`;

export const RowLogin = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    text-align: center;
    width: 100%;
`;

export const LoginButton = styled.button`
  background-color: #66857A;
    color: #fff;
    border-radius: 10px;
    padding: 15px;
    margin-top: 30px;
    width: 100%;
    display: flex;
    width: 100%;
    font-weight: 700;
    align-items: center;
    justify-content: center;
    &:hover {
        background-color: #fff;
        color: #66857A;
        border: 1px solid #66857A;
    }
`;

export const BackgroundImageColumn = styled.div`
  flex: 1; 
  background-size: cover;
  background-repeat: no-repeat;
  background-image: url('/login.jpg');
  background-position: center;
  border-radius: 10px;
  
    @media screen and (max-width: 900px) {
        display: none;
    }
  `;

export const LoginFormColumn = styled.div`
  flex: 1; 
  display: flex;
  flex-direction: column;
  padding: 0 0 0 30px;
   @media screen and (max-width: 768px) {
        width: 100%;
        padding: 0px 5px 0px 5px;
    }
`;

export const LineWithText = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;
  text-align: center;
  width: 100%;
`;

export const FieldSet = styled.fieldset`
    border-top: 1px solid #333;
    margin-top: 20px;
    border-bottom: none;
    border-left: none;
    border-right: none;
    display: block;
    text-align: center;

    fieldset legend{
        padding: 5px 10px;
    }
`

export const FormLogin = styled.form`
    margin-top: 40px;

    @media screen and (max-width: 768px) {
        margin-top: 0px;
    }
`;