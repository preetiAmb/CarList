import React, { useEffect, useRef, useState } from "react";
import { Car } from "../../types";
import { Grid, Box, Button, useMediaQuery, useTheme } from "@mui/material";
import { CarCard } from "./CarCard";
import { MobileStepper } from "@mui/material";
import Slider, { Settings } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ChevronRight, ChevronLeft } from "@mui/icons-material";

type CarListProps = {
  cars: Car[];
};

export const CarList: React.FC<CarListProps> = ({ cars }) => {
  const customSlider = useRef<Slider>(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [activeStep, setActiveStep] = useState(0);
  const [showButtons, setShowButtons] = useState(true);

  const handleAfterChange = (currentSlide: number) => {
    setActiveStep(currentSlide);
  };

  const handleResize = () => {
    setShowButtons(!isMobile);
  };

  useEffect(() => {
    setShowButtons(!isMobile);
  }, [isMobile]);

  const handleNext = () => {
    customSlider.current?.slickNext();
  };

  const handleBack = () => {
    customSlider.current?.slickPrev();
  };

  const settings: Settings = {
    speed: 300,
    slidesToShow: 4,
    arrows: showButtons,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1.2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1.2,
          dots: true,
          arrows: false,
          afterChange: handleAfterChange,
        },
      },
    ],
  };

  return (
    <>
      <Slider ref={customSlider} {...settings}>
        {cars.map((car) => (
          <Grid key={car.id} item>
            <Box p={1}>
              <CarCard key={car.id} car={car} />
            </Box>
          </Grid>
        ))}
      </Slider>
      {!isMobile && (
        <Box display="flex" justifyContent="flex-end">
          <Button
            className="button-nav"
            onClick={handleBack}
            sx={{
              backgroundColor: "white",
              border: "1px solid black",
              borderRadius: "50%",
              marginTop: 2,
              width: "20px", 
            }}
          >
            <ChevronLeft sx={{ color: "black", fontSize: 28 }} />
          </Button>
          <Button
            className="button-nav"
            onClick={handleNext}
            sx={{
              backgroundColor: "white",
              border: "1px solid black",
              borderRadius: "50%",
              marginLeft: 2,
              marginTop: 2,
              width: "20px", 
            }}
          >
            <ChevronRight sx={{ color: "black", fontSize: 28 }} />
          </Button>
        </Box>
      )}
    </>
  );
};
