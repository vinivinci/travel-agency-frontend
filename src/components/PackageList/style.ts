import styled from 'styled-components';


export const CardImage = styled.img`
  width: 100%;
  height: 100%;
  display: block;
  object-fit: cover;
`;

export const CardInfo = styled.div`
  position: absolute;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  color: white;
  width: 100%;
  padding: 10px;
  box-sizing: border-box; 
  height: 100px; 
`;

export const Destination = styled.h2`
  font-size: 1.25rem;
  margin: 0;
`;

export const DateRange = styled.p`
  font-size: 1rem;
  margin: 0;
`;

export const Price = styled.p`
  font-size: 1.5rem;
  font-weight: bold;

  margin: 0;
    margin-bottom: 10px;
`;

export const CarouselWrapper = styled.div`
  .slick-slide {
    padding: 0 10px; 
  }
`;

export const SeeMoreButton = styled.button`
  position: absolute;
  top: 10px; 
  left: 10px; 
  background-color: #fff;
  color: #66857A;
  border: 1px solid #66857A; 
  border-radius: 10px; 
  cursor: pointer;
  display: flex;
    max-width: 400px;
    align-items: center;
    justify-content: center;
  
`;
export const Card = styled.div`
  position: relative;
  width: 100%;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  max-width: 400px;
  height: 250px;
  cursor:pointer;

  &:hover {
     transform: scale(1.05);
    button {
      background-color: #66857A; 
     color: #fff;
     transition: 1s;
    }
     
  }
`;
