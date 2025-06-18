import { Stack, Box, Typography } from "@mui/material";
import FlightBanner from "/flight_banner.webp";
import ArrowButton from "./Common/ArrowButton";
import { ArrowForwardIos } from "@mui/icons-material";
import { RightArrowButtonSx } from "../Styles/ArrowButtonSx";
import { images } from "../utils/productRowHelper";

const ProductRow = () => {
  return (
    <>
      <Box
        sx={{
          m: 2,
          height: "320px",
          width: "100%",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          columnGap: 3,
        }}
      >
        <Box
          sx={{
            p: 3,
            height: "100%",
            width: "80%",
            backgroundColor: "white",
            position: "relative",
          }}
        >
          <Typography variant="h5" fontWeight={"bold"}>
            Best of Electronics
          </Typography>
          <Stack
            direction="row"
            width={"100%"}
            height={"100%"}
            alignItems={"center"}
            spacing={4}
            overflow={"hidden"}
            p={2}
            // mt={2}
          >
            {images.map((item) => (
              <Stack
                direction={"column"}
                justifyContent={"center"}
                alignItems={"center"}
                p={1}
                width={"100%"}
                height={"100%"}
              >
                <img
                  key={item.id}
                  src={item.img}
                  alt={item.name}
                  width={"150px"}
                  height={"150px"}
                  style={{ objectFit: "contain" }}
                />
                <Typography variant="body2" mt={3}>
                  {item.name}
                </Typography>
                <Typography variant="body2" fontWeight={"bold"}>
                  {item.description}
                </Typography>
              </Stack>
            ))}
          </Stack>
          <ArrowButton sx={RightArrowButtonSx}>
            <ArrowForwardIos />
          </ArrowButton>
        </Box>
        <Box sx={{ height: "100%", width: "16.3%", backgroundColor: "white" }}>
          <img
            src={FlightBanner}
            alt="flight_banner"
            width={"100%"}
            height={"100%"}
          />
        </Box>
      </Box>
    </>
  );
};

export default ProductRow;
