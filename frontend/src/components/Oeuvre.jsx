import Card from "@mui/joy/Card";
import Typography from "@mui/joy/Typography";
import AspectRatio from "@mui/joy/AspectRatio";
import Box from "@mui/material/Box";
import Favorite from "@mui/icons-material/Favorite";
import Stack from "@mui/joy/Stack";

function Oeuvre({ product }) {
  return (
    <section>
      <Card
        sx={{
          margin: "1rem",
          bgcolor: "#d1c8e1",
          border: " 0.1rem solid #605f5d",
          borderRadius: "0px",
          boxShadow: "0px 4px 4px #00000040",
          padding: "0.7rem",
          overflow: "hidden",
          "&:hover": {
            boxShadow: "md",
          },
        }}
      >
        <AspectRatio ratio="3/3">
          <Box backgroundColor="#b28244cb">
            <Box
              className="box"
              sx={{
                border: "0.6rem solid white",
                width: "93%",
                height: "93%",
                margin: "0 auto",
                overflow: "hidden",
                "&:hover": { opacity: "0.8", cursor: "pointer" },
              }}
            >
              <img
                src={product.thumbnail}
                srcSet={product.thumbnail}
                loading="lazy"
                alt=""
                style={{
                  width: "100%",
                  height: "100%",
                }}
              />
            </Box>
          </Box>
        </AspectRatio>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          bgcolor="white"
          margin="-0.3rem"
          marginTop="0.4rem"
          lineHeight="8px"
          sx={{
            fontSize: "25rem",
            "@media screen and (min-width: 1024px)": {
              fontSize: "24px",
            },
          }}
        >
          <Box padding={0.5} overflow="hidden">
            <Typography
              sx={{
                fontSize: "13px",
                "@media screen and (min-width: 1024px)": {
                  fontSize: "24px",
                },
              }}
              level="title-sm"
            >
              {product.title}
            </Typography>
            <Typography
              level="body-sm"
              sx={{
                fontSize: "13px",
                "@media screen and (min-width: 1024px)": {
                  fontSize: "24px",
                },
              }}
            >
              {product.brand}
            </Typography>
            <Typography
              fontSize="title-sm"
              fontWeight="lg"
              sx={{
                fontSize: "13px",
                "@media screen and (min-width: 1024px)": {
                  fontSize: "24px",
                },
              }}
            >
              {product.price} €
            </Typography>
          </Box>
          <Favorite
            sx={{
              fontWeight: "md",
              fontSize: "1.9rem",
              color: "text.secondary",
              "&:hover": { color: "#CB1F27" },
            }}
          />
        </Stack>
      </Card>
    </section>
  );
}

export default Oeuvre;
