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
      {/* <Grid container spacing={{xs:1,md:2}} columns={{xs:2,md:12}}>
         <Grid item>
              <Typography> {data.name}</Typography>
         </Grid>
       </Grid> */}

      {/* <Card
        sx={{
          maxWidth: 800,
          minHeight: 1200,
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
        <div>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis quibusdam esse blanditiis facilis, earum aspernatur labore reiciendis iusto eum nulla fugiat consequuntur necessitatibus odio, voluptatibus nemo, cum aliquid nesciunt porro.
        </div>
      </Card> */}
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
                image={`${data.image === null ? /* "https://eldenring.wiki.fextralife.com/file/Elden-Ring/lost_ashes_of_war_elden_ring_wiki_guide_200px.png" */ genericImage.src : data.image }`}
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
