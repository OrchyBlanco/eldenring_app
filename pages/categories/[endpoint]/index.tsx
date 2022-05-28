import {
  Button,
  Container,
  Grid,
  IconButton,
  ImageList,
  ImageListItem,
  ImageListItemBar,
  ListSubheader,
} from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";
import { useEffect, useState } from "react";
import genericImage from "../../../public/images/generic.jpg";
<<<<<<< Updated upstream
=======
import useMediaQuery from "@mui/material/useMediaQuery";
import { ThemeContext } from "@emotion/react";
>>>>>>> Stashed changes

export default function Categories({ serverData }: any) {
  const router = useRouter();

  return (
    <>
<<<<<<< Updated upstream
      <Container maxWidth="xl">
        <Grid container spacing="2">
          <Grid item xs={12}>
            <ImageList>
              <ImageListItem key="Subheader" cols={12}>
                <ListSubheader
                  component="div"
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",

                    textTransform: "capitalize",

                  }}
                >
                  <h1>{router.query.endpoint}</h1>
                </ListSubheader>
=======
      <ListSubheader
        component="div"
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "90%",
          textTransform: "capitalize",
        }}
      >
        <h1>{router.query.endpoint}</h1>
      </ListSubheader>
      <Box
        sx={{
          height: 450,
          width: "90%",
          display: "grid",
          gap: 2,
          gridTemplateColumns: {
            xs: "repeat(2, 1fr)",
            sm: "repeat(3, 1fr)",
            md: "repeat(4, 1fr)",
            lg: "repeat(5, 1fr)",
            xl: "repeat(7, 1fr)",
          },
          [`& .${imageListItemClasses.root}`]: {
            display: "flex",
            flexDirection: "column",
          },
        }}
      >
        {serverData.data.map((item: any, index: number) => (
          <Link
            href={"/categories/[endpoint]/[id]"}
            as={`/categories/${router.query.endpoint}/${item.id}`}
          >
            <a>
              <ImageListItem key={index} cols={2}>
                
                <img
                  src={`${item.image != null ? item.image : genericImage}`}
                  srcSet={`${item.image}`}
                  alt={item.name}
                  loading="eager"
                  color="background.paper"
                />

                <ImageListItemBar
                  title={item.name}
                  subtitle={
                    item.category != undefined
                      ? item.category
                      : item.type != undefined
                      ? item.type
                      : item.affinity
                  }
                />
>>>>>>> Stashed changes
              </ImageListItem>
              {serverData.data.map((item: any, index: number) => (
                <Link
                  href={"/categories/[endpoint]/[id]"}
                  as={`/categories/${router.query.endpoint}/${item.id}`}
                >
                  <a>
                    <ImageListItem key={index} cols={5}>

                      {/* <Image src={item.image} alt={""} height={60} width={60} /> */}

                      <img
                        src={`${
                        
                          item.image != null ? item.image : genericImage
                        }`}
                        srcSet={`${item.image}`}
                        alt={item.name}
                        loading="eager"

                      />
                      <ImageListItemBar
                        title={item.name}
                        subtitle={
                          item.category != undefined
                            ? item.category
                            : item.type != undefined
                            ? item.type
                            : item.affinity
                        }
                      />
                    </ImageListItem>
                  </a>
                </Link>
              ))}
            </ImageList>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export async function getServerSideProps(context: any) {
  const endpoint = context.query.endpoint;
  const response = await fetch(
    `https://eldenring.fanapis.com/api/${endpoint}?limit=307`
  );
  const serverData = await response.json();

  return { props: { serverData } };
}
