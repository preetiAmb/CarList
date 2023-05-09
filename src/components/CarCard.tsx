import React from "react";
import { Car } from "../../types";
import Link from "next/link";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

type CarProps = {
  car: Car;
};

export const CarCard: React.FC<CarProps> = ({ car }) => {
 
  return (
    <Grid container spacing={3}>
      <Grid item xs={12} sm={6} md={4} key={car.id}>
        <Card
          sx={{
            maxWidth: 345,
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <CardMedia
            component="img"
            height="auto"
            image={car.imageUrl}
            alt={car.modelName}
          />
          <CardContent sx={{ flexGrow: 1 }}>
            <Typography gutterBottom variant="h5" component="div">
              {car.modelName}
            </Typography>
            <Typography
              gutterBottom
              variant="subtitle1"
              component="div"
              style={{ color: "grey" }}
            >
              {car.modelType}
            </Typography>
            <Typography
              variant="body1"
              color="text.secondary"
              style={{ lineHeight: "1.5em" }}
            >
              {car.bodyType}
            </Typography>
          </CardContent>

          <CardActions>
            <Link href={`./learn/${car.id}`}>Learn</Link>
            <Link href={`./shop/${car.id}`}>Shop</Link>
          </CardActions>
        </Card>
      </Grid>
    </Grid>
  );
};
