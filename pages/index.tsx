import React from "react";
import { CarList } from "../src/components/CarList";
import { CarContext } from "../src/components/CarContext";

const CarPage: React.FC = () => {
  const { cars } = React.useContext(CarContext);

  return (
    <> 
      <CarList cars={cars} />
    </>
  );
};

export default CarPage;
