import React, { useContext } from "react";
import { useRouter } from "next/router";
import { CarContext } from "./CarContext";
import Image from "next/image";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/system";
import Link from "next/link";

const LearnInfo: React.FC = () => {
  const { cars } = useContext(CarContext);
  const router = useRouter();
  const { id } = router.query;

  const getSingleCar = (id: string) => cars.find((car) => car.id === id);

  const car = getSingleCar(id as string);

  const { bodyType, imageUrl, modelName, modelType } = car || {};

  return car ? (
    <Grid container justifyContent="center">
      <Grid
        item
        xs={12}
        md={8}
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "40vh",
          width: "800px",
          margin: "auto",
        }}
      >
        <Typography variant="h3" component="h1">
          {modelName}
        </Typography>

        <Box sx={{ flexGrow: 1 }} />

        <Box
          sx={{
            minWidth: "260px",
            maxWidth: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image
            src={imageUrl || ""}
            alt={modelName}
            width={400}
            height={300}
          />
        </Box>

        <Typography
          variant="h4"
          component="h2"
          sx={{ textTransform: "uppercase" }}
        >
          {modelType}
        </Typography>

        <Typography
          variant="h5"
          component="h3"
          sx={{ textTransform: "uppercase" }}
        >
          {bodyType}
        </Typography>

        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Box sx={{ mr: 2 }}>
            <Link href={`/shop/${car.id}`}>Buy</Link>
          </Box>
        </Box>
      </Grid>
    </Grid>
  ) : null;
};

export default LearnInfo;
