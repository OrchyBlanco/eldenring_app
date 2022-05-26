import { Box, Button, Grid, Paper } from "@mui/material";
import type { NextPage } from "next";
import Link from "next/link";

const pages = [
  { label: "Weapons", url: "/weapons", img: "" },
  { label: "Armors", url: "/armors", img: "" },
  { label: "Sorceries", url: "/sorceries", img: "" },
];

const Home: NextPage = () => {
  return (
    <>
      <Box sx={{ m: 3 }}>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {pages.map((page, index) => (
            <Grid item xs={2} sm={4} md={4} key={index}>
              <Paper sx={{ p: 3 }}>{page.label}</Paper>
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
};

export default Home;
