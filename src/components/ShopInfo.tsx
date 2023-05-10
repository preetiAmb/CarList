import React, { useContext } from "react";
import { useRouter } from "next/router";
import { CarContext } from "./CarContext";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/system";
import { Button } from "@mui/base";
import Image from "next/image";
import { Grid } from "@mui/material";

const ShopInfo: React.FC = () => {
  const { cars } = useContext(CarContext);
  const router = useRouter();
  const { id } = router.query;

  const getSingleCar = (id: string) => cars.find((car) => car.id === id);

  const car = getSingleCar(id as string);

  const { bodyType, imageUrl, modelName, modelType } = car || {};
  const getAmount = () => Math.floor(Math.random() * 100000 + 35000);

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
        <Box sx={{ flexGrow: 1 }} />
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
            width: "400px",
            margin: "auto",
          }}
        >
          <Grid container direction="column" spacing={2}>
            <Grid item>
              <Typography variant="h4" component="h2">
                {modelName}
              </Typography>
            </Grid>
            <Grid item>
              <Box sx={{ minWidth: "260px", maxWidth: "100%" }}>
                <Image
                  src={imageUrl || ""}
                  alt={modelName}
                  width={400}
                  height={300}
                />
              </Box>
            </Grid>
            <Grid item>
              <Button onClick={getAmount}>Buy for ${getAmount()}</Button>
            </Grid>
          </Grid>
        </Box>
      </Grid>
    </Grid>
  ) : null;
};

export default ShopInfo;
