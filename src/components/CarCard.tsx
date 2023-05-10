import React from "react";
import { Car } from "../../types";
import Link from "@mui/material/Link";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { ChevronRight } from "@mui/icons-material";
import { IconButton, Stack, useMediaQuery, useTheme } from "@mui/material";

type CarProps = {
  car: Car;
};

export const CarCard: React.FC<CarProps> = ({ car }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <>
      <Card>
        <CardContent>
          <>
            {isMobile ? (
              <>
                <Typography variant="subtitle1" color="textSecondary">
                  {car.bodyType.toUpperCase()}
                </Typography>
                <Typography variant="subtitle1" component="h2">
                  <strong>{car.modelName}</strong>
                </Typography>
                <Typography variant="subtitle1" component="h2">
                  {car.modelType}
                </Typography>
              </>
            ) : (
              <>
                <Typography variant="subtitle1" color="textSecondary">
                  {car.bodyType.toUpperCase()}
                </Typography>
                <Typography variant="subtitle1" component="h2">
                  <strong>{car.modelName}</strong> {car.modelType}
                </Typography>
              </>
            )}
          </>

          <CardMedia
            component="img"
            src={car.imageUrl}
            alt={car.modelName}
            height="140"
          />
          <CardActions>
            <Grid container justifyContent="center">
              <Grid item>
                <Link href={`./learn/${car.id}`} underline="none">
                  <Typography variant="subtitle1">
                    Learn
                    <IconButton
                      size="small"
                      sx={{
                        color: "inherit",
                      }}
                    >
                      <ChevronRight />
                    </IconButton>
                  </Typography>
                </Link>
              </Grid>
              <Grid item>
                <Link href={`./shop/${car.id}`} underline="none">
                  <Typography variant="subtitle1">
                    Shop
                    <IconButton
                      size="small"
                      sx={{
                        color: "inherit",
                      }}
                    >
                      <ChevronRight />
                    </IconButton>
                  </Typography>
                </Link>
              </Grid>
            </Grid>
          </CardActions>
        </CardContent>
      </Card>
    </>
  );
};
