import {
  Container,
  Grid,
  Typography,
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  CardActions,
} from "@mui/material";
import { useRouter } from "next/router";
import * as React from "react";
import { styled } from "@mui/material/styles";
import { Box } from "@mui/system";

export default function Element({ serverData }: any) {
  const data = serverData.data;

  return (
    <Container maxWidth="xl"
    sx={{
      display: "flex",
          alignItems: "center",
          justifyContent: "center",
    }}>
      {/* <Grid container spacing={{xs:1,md:2}} columns={{xs:2,md:12}}>
         <Grid item>
              <Typography> {data.name}</Typography>
         </Grid>
       </Grid> */}

      <Card
        sx={{
          maxWidth: 800,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box sx={{
              display: { xs: "none", md: "flex" },
              width:{ xs:"100%",md:"80%",lg:"50%"},
            }}>
        <CardMedia
          component="img"
          height="240"
          
          image={`${data.image}`}
          alt="green iguana"
        />
        </Box>
        
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
      </Card>
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
