import styled from "styled-components";

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

export const BookingsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;
    padding: 2rem;
`;

export const BookingCard = styled.div`
    background: white;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    padding: 1.5rem;
    margin-bottom: 1rem;
    width: calc(50% - 10px); 
    max-width: 500px;

    @media screen and (max-width: 768px) {
        width: 100%; 
    }
`;

export const BookingDetails = styled.div`
    margin-bottom: 1rem;
    
    h2 {
        margin: 0;
        color: #333;
        font-size: 1.5rem;
    }
    
    p {
        color: #666;
        margin: 0.25rem 0;
    }
`;

export const CancelButton = styled.button`
    background-color: #ff6b6b;
    color: white;
    border: none;
    border-radius: 4px;
    padding: 0.5rem 1rem;
    cursor: pointer;
    font-weight: bold;
    &:hover {
        background-color: #ff4757;
    }
`;

export const NoBookingsContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 70vh; // Ajuste conforme necessário
    text-align: center;
`;

export const NoBookingsMessage = styled.p`
    font-size: 1.5rem;
    color: #666;
    margin-bottom: 2rem;
`;

export const BrowsePackagesButton = styled.button`
    background-color: #66857A;
    color: white;
    border: none;
    border-radius: 4px;
    padding: 1rem 2rem;
    cursor: pointer;
    font-size: 1rem;
    font-weight: bold;
    &:hover {
        background-color: #556B2F;
    }
`;
