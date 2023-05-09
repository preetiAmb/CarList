import React, { ReactNode, createContext } from 'react';
import cars from '../../public/api/cars.json';

interface Car {
  id: string;
  modelName: string;
  bodyType: string;
  modelType: string;
  imageUrl: string;
}

export interface CarCarouselProps {
  cars: Car[];
}

export type CarProviderProps = {
  children: ReactNode;
};

export const CarContext = createContext<CarCarouselProps>({ cars });

export const CarProvider = ({ children }: CarProviderProps) => {

  return (
    <CarContext.Provider value={{ cars: cars }}>
      {children}
    </CarContext.Provider>
  );
};
