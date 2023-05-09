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
};



export interface CarouselProps {
  children?: ReactNode;
  autoPlay?: boolean;
  animation?: 'slide' | 'fade';
  indicators?: boolean;
  navButtonsProps?: {
    PrevButtonComponent?: React.ComponentType<{ onClick: () => void }>;
    NextButtonComponent?: React.ComponentType<{ onClick: () => void }>;
  };
}

export type CustomArrowButtonProps = {
  direction: 'left' | 'right';
  onClick: () => void;
};