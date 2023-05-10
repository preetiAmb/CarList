import { ReactNode } from "react";

export interface Car {
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
}