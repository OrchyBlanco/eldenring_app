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
} from "@mui/material";
import Link from "next/link";
import { Link as HyperLink } from "@mui/material";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import genericImage from "../../../public/images/generic.png";

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

    // <>
    //   <InfiniteScroll
    //     dataLength={items.length}
    //     next={() => setPage((prevPage) => prevPage + 1)}
    //     hasMore={true}
    //     loader={<CircularProgress />}
    //   ></InfiniteScroll>
    //   <ListSubheader
    //     component="div"
    //     sx={{
    //       display: "flex",
    //       alignItems: "center",
    //       justifyContent: "center",
    //       width: "90%",
    //       textTransform: "capitalize",
    //     }}
    //   >
    //     <h1>{endpoint}</h1>
    //   </ListSubheader>

    //   <Box
    //     sx={{
    //       height: 450,
    //       width: "90%",
    //       display: "grid",
    //       gap: 2,
    //       gridTemplateColumns: {
    //         xs: "repeat(2, 1fr)",
    //         sm: "repeat(3, 1fr)",
    //         md: "repeat(4, 1fr)",
    //         lg: "repeat(5, 1fr)",
    //         xl: "repeat(7, 1fr)",
    //       },
    //       [`& .${imageListItemClasses.root}`]: {
    //         display: "flex",
    //         flexDirection: "column",
    //       },
    //     }}
    //   >
    //     {items.map((item: any, index: number) => (
    //       <Link
    //         href={"/categories/[endpoint]/[id]"}
    //         as={`/categories/${router.query.endpoint}/${item.id}`}
    //       >
    //         <a data-testid={item.id}>
    //           <ImageListItem
    //             key={index}
    //             cols={2}
    //             sx={{
    //               background: "#122620",
    //             }}
    //           >
    //             <img
    //               src={`${item.image === null ? genericImage.src : item.image}`}
    //               srcSet={`${
    //                 item.image === null ? genericImage.src : item.image
    //               }`}
    //               alt={item.name}
    //               loading="eager"
    //             />
    //             <ImageListItemBar
    //               title={item.name}
    //               subtitle={
    //                 item.category != undefined
    //                   ? item.category
    //                   : item.type != undefined
    //                   ? item.type
    //                   : item.affinity
    //               }
    //             />
    //           </ImageListItem>
    //         </a>
    //       </Link>
    //     ))}
    //   </Box>
    // </>
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
