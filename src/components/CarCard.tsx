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
import { IconButton } from "@mui/material";

type CarProps = {
  car: Car;
};

export const CarCard: React.FC<CarProps> = ({ car }) => {
  return (
    <Card>
      <CardContent>
        <Typography variant="subtitle1" color="textSecondary">
          {car.bodyType.toUpperCase()}
        </Typography>
        <Typography variant="subtitle1">
          {car.modelName} - {car.modelType}
        </Typography>
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
  );
};
