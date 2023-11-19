// src/components/DualInput/style.ts
import styled from 'styled-components';
import DatePicker from 'react-datepicker';

export const DualInputContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #f0f0f0;
  border-radius: 20px;
  padding: 5px 10px;
`;

export const StyledInput = styled.input`
  flex: 1;
  border: none;
  background-color: transparent;
  padding: 10px;
  width: 100%;
  margin: 0 5px;
  &:focus {
    outline: none;
  }
`;

export const Separator = styled.div`
  height: 24px;
  width: 1px;
  background-color: #ccc;
  margin: 0 12px;
`;

export const StyledDatePicker = styled(DatePicker)`
  flex: 1;
  border: none;
  background-color: transparent;
  padding: 10px;
  margin: 0 5px;
  width: 100%;
  &:focus {
    outline: none;
  }

  .react-datepicker__input-container input {
    width: 100%;
    border: none;
    background-color: transparent;
    padding: 10px;
    margin: 0 5px;
    &:focus {
      outline: none;
    }
  }

  // Adicione estilos adicionais para o DatePicker aqui, se necessário
`;

export const DatePickerIconContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: transparent;
  padding: 10px;
  
  .react-datepicker-wrapper {
    flex-grow: 1;
  }

  .iconify {
    margin-right: 10px; // ajuste conforme necessário para o espaçamento do ícone
  }
`;