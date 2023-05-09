import React, { useContext } from "react";
import Link from 'next/link';
import { Car } from "../../types";
import { useTheme, useMediaQuery, Grid, Box } from "@mui/material";
import { CarCard } from "./CarCard";
import { CarContext } from "./CarContext";


type CarListProps = {
  cars: Car[];
};

export const CarList: React.FC<CarListProps> = ({ cars }) => {

  return (
    <>
      {cars.map((car) => (
        <Grid key={car.id} item>
          <Box p={1}>
            <CarCard key={car.id} car={car} />
          </Box>
        </Grid>
      ))}
    </>
  );
};
