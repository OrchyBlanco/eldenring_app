import {
  Container,
  Grid,
  Typography,
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  CardActions,
  CardActionArea,
} from "@mui/material";
import { useRouter } from "next/router";
import * as React from "react";
import { styled } from "@mui/material/styles";
import { Box } from "@mui/system";
import genericImage from "../../../public/images/generic.png";

export default function Element({ serverData }: any) {
  const data = serverData.data;

  return (
    <Container
      maxWidth="xl"
      sx={{
        width: 1050,
        height: 1050,
        background: "#122620",
      }}
    >
      <Grid
        container
        spacing={2}
        sx={{
          pt: 2,
        }}
      >
        <Grid item lg={4}>
          <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="280"
                image={`${data.image === null ?  genericImage.src : data.image }`}
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h4" component="div">
                  {data.name}
                </Typography>
                <Typography gutterBottom variant="h5" component="div">
                  {data.category}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {data.description}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item container spacing={1} lg={8}>
          <Typography color="text.secondary">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
            modi deleniti atque, nobis, labore repellat, accusamus ratione
            corporis dolorem explicabo magnam cupiditate quia laudantium id
            neque ab repudiandae omnis possimus!
          </Typography>
          <Typography color="text.secondary">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
            modi deleniti atque, nobis, labore repellat, accusamus ratione
            corporis dolorem explicabo magnam cupiditate quia laudantium id
            neque ab repudiandae omnis possimus!
          </Typography>
          <Typography color="text.secondary">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
            modi deleniti atque, nobis, labore repellat, accusamus ratione
            corporis dolorem explicabo magnam cupiditate quia laudantium id
            neque ab repudiandae omnis possimus!
          </Typography>
        </Grid>
        <Grid item container spacing={1} lg={12}>
          <Typography color="text.secondary">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
            modi deleniti atque, nobis, labore repellat, accusamus ratione
            corporis dolorem explicabo magnam cupiditate quia laudantium id
            neque ab repudiandae omnis possimus!
          </Typography>
          <Typography color="text.secondary">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
            modi deleniti atque, nobis, labore repellat, accusamus ratione
            corporis dolorem explicabo magnam cupiditate quia laudantium id
            neque ab repudiandae omnis possimus!
          </Typography>
          <Typography color="text.secondary">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
            modi deleniti atque, nobis, labore repellat, accusamus ratione
            corporis dolorem explicabo magnam cupiditate quia laudantium id
            neque ab repudiandae omnis possimus!
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
}

export async function getServerSideProps(context: any) {
  const endpoint = context.query.endpoint;
  const id = context.query.id;

  const response = await fetch(
    `https://eldenring.fanapis.com/api/${endpoint}/${id}`
  );
  const serverData = await response.json();

  return { props: { serverData } };
}
