import React, { useContext } from "react";
import { useRouter } from "next/router";
import { CarContext } from "./CarContext";

import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

const LearnInfo: React.FC = () => {
  const { cars } = useContext(CarContext);
  const router = useRouter();
  const { id } = router.query;

  const getSingleCar = (id: string) => cars.find((car) => car.id === id);

  const car = getSingleCar(id as string);

  const { bodyType, imageUrl, modelName, modelType } = car || {};

  return car ? (
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
            image={imageUrl}
            alt={modelName}
          />
          <CardContent sx={{ flexGrow: 1 }}>
            <Typography gutterBottom variant="h5" component="div">
              {modelName}
            </Typography>
            <Typography
              gutterBottom
              variant="subtitle1"
              component="div"
              style={{ color: "grey" }}
            >
              {modelType}
            </Typography>
            <Typography
              variant="body1"
              color="text.secondary"
              style={{ lineHeight: "1.5em" }}
            >
              {bodyType}
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  ) : null;
};

export default LearnInfo;
