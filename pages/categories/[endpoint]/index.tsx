import {
  Button,
  Container,
  Box,
  Grid,
  IconButton,
  ImageList,
  ImageListItem,
  imageListItemClasses,
  ImageListItemBar,
  ListSubheader,
  CircularProgress,
  Breadcrumbs,
  Typography,
  Card,
  CardMedia,
  Fab,
} from "@mui/material";
import Link from "next/link";
import { Link as HyperLink } from "@mui/material";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import genericImage from "../../../public/images/generic.png";
import NavigationIcon from "@mui/icons-material/Navigation";

export default function Categories({ serverData, search }: any) {
  const router = useRouter();
  const [items, setItems] = useState(serverData.data);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [total, setTotal] = useState(serverData.total);
  const endpoint = router.query.endpoint;

  useEffect(() => {
    fetch(`https://eldenring.fanapis.com/api/${endpoint}?limit=10&page=${page}`)
      .then((response) => response.json())
      .then((data) => {
        setItems((prevItems: any) => prevItems.concat(data.data));
        setHasMore(page < Math.round(total / 10));
      });
    console.log(items);
  }, [page]);

  console.log(items);
  return (
    <>
      <Container maxWidth="xl">
        {/* Breadcrumb */}
        <Breadcrumbs aria-label="breadcrumb">
          <Link href="/">
            <a>Home</a>
          </Link>
          <Typography color="text.primary" sx={{ textTransform: "capitalize" }}>
            {endpoint}
          </Typography>
        </Breadcrumbs>

        <InfiniteScroll
          dataLength={items.length}
          next={() => {
            setPage((prevPage) => prevPage + 1);
          }}
          hasMore={hasMore}
          loader={<CircularProgress />}
          style={{ overflow: "inherit" }}
        >
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
            sx={{ p: 3 }}
          >
            {items.map((item: any) => (
              <Grid
                item
                xs={1}
                sm={2}
                md={3}
                key={item.id}
                sx={{ overflow: "hidden" }}
              >
                <Card>
                  <Link
                    href={"/categories/[endpoint]/[id]"}
                    as={`/categories/${router.query.endpoint}/${item.id}`}
                  >
                    <a data-testid={item.id}>
                      <CardMedia
                        component="img"
                        image={`${
                          item.image === null ? genericImage.src : item.image
                        }`}
                        alt={item.name}
                      />
                    </a>
                  </Link>
                </Card>
              </Grid>
            ))}
          </Grid>
        </InfiniteScroll>
      </Container>
      <Fab
        variant="extended"
        color="primary"
        aria-label="goTop"
        sx={{ position: "sticky", bottom: 1 }}
        href="#NavBar"
      >
        <NavigationIcon sx={{ mr: 1 ,position: "sticky", bottom: 1, left:1 }} />
      </Fab>
    </>
  );
}

export async function getServerSideProps(context: any) {
  const endpoint = context.query.endpoint;
  const serverData = await fetch(
    `https://eldenring.fanapis.com/api/${endpoint}?limit=10&page=0`
  ).then((response) => response.json());
  //const serverData = await response.json();

  return { props: { serverData } };
}
