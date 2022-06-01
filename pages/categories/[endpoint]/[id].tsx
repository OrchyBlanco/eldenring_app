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
  Breadcrumbs,
} from "@mui/material";
import { useRouter } from "next/router";
import * as React from "react";
import { styled } from "@mui/material/styles";
import { Box } from "@mui/system";
import genericImage from "../../../public/images/generic.png";
import Link from "next/link";

export default function Element({ serverData }: any) {
  const data = serverData.data;
  const router = useRouter();
  const endpoint= router.query.endpoint;

  return (
    <Container
      maxWidth="xl"
      sx={{
        width: 1050,
        height: 1050,
        background: "#122620",
      }}
    >
      {/* Breadcrumb */}
      <Breadcrumbs aria-label="breadcrumb">
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href={`/categories/${endpoint}`}>
          <a style={{ textTransform: "capitalize" }}>{endpoint}</a>
        </Link>
        
        <Typography color="text.primary" sx={{ textTransform: "capitalize" }}>
          {data.name}
        </Typography>
      </Breadcrumbs>

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
