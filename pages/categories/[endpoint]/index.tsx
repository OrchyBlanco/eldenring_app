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
import { useEffect, useState } from "react";

export default function Categories({ serverData }: any) {
  const router = useRouter();
  return (
    <>
      <div>
        {serverData.data.map((category: any) => {
          return (
            <>
              <Link
                href={"/categories/[endpoint]/[id]"}
                as={`/categories/${router.query.endpoint}/${category.id}`}
              >
                <a>
                  <Button variant="outlined" color="info" sx={{ m: 1 }}>
                    {category.name}
                  </Button>
                </a>
              </Link>
            </>
          );
        })}
      </div>

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
                  }}
                >
                  <h1>{router.query.endpoint}</h1>
                </ListSubheader>
              </ImageListItem>
              {serverData.data.map((item: any, index: number) => (
                <Link
                  href={"/categories/[endpoint]/[id]"}
                  as={`/categories/${router.query.endpoint}/${item.id}`}
                >
                  <a>
                    <ImageListItem key={index} cols={2}>
                      <img
                        src={`${item.image}`}
                        srcSet={`${item.image}`}
                        alt={item.name}
                        loading="lazy"
                      />
                      <ImageListItemBar
                        title={item.name}
                        subtitle={
                          item.category == undefined
                            ? `${item.type}`
                            : item.category
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
