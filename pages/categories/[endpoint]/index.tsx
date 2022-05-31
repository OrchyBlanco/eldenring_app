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

export default function Categories({ serverData }: any) {
  const router = useRouter();

  return (
    <>
      <Container maxWidth="xl">
        <Grid container spacing="2">
          <Grid item xs={12}>
            <ImageList key="ImageHeader">
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
                  <a data-testid={item.id}>
                    <ImageListItem key={index} cols={2}>
                      <img
                        src={`${item.image}`}
                        srcSet={`${item.image}`}
                        alt={item.name}
                        loading="lazy"
                      />
                      <ImageListItemBar
                        key={index}
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
