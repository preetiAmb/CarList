import React, { createContext } from 'react';
import cars from '../../public/api/cars.json';
import { CarCarouselProps, CarProviderProps } from '../../types'

export const CarContext = createContext<CarCarouselProps>({ cars });

export const CarProvider = ({ children }: CarProviderProps) => {

  return (
    <CarContext.Provider value={{ cars: cars }}>
      {children}
    </CarContext.Provider>
  );
};
