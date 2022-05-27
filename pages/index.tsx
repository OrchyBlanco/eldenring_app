import {
  Box,
  Button,
  Grid,
  Paper,
  Typography,
  Card,
  CardMedia,
  CardContent,
  CardActions,
} from "@mui/material";
import type { NextPage } from "next";
import Link from "next/link";

const pages = [
  {
    label: "Weapons",
    endpoint: "weapons",
    description:
      "Weapons in Elden Ring is a piece of offensive equipment that is used by the player's character to inflict damage against Enemies and Bosses.",
  },
  {
    label: "Armors",
    endpoint: "armors",
    description: "ARMOR DESCRIPTION",
  },
  {
    label: "Sorceries",
    endpoint: "sorceries",
    description: "Sorceries DESCRIPTION",
  },
  {
    label: "Shields",
    endpoint: "shields",
    description: "Shields DESCRIPTION",
  },
  {
    label: "Ashes of War",
    endpoint: "ashes",
    description: "Ashes of War DESCRIPTION",
  },
];

const Home: NextPage = () => {
  return (
    <>
      <Box sx={{ py: 2, px: 3 }}>
        <Grid
          container
          spacing={{ xs: 1, md: 2 }}
          columns={{ xs: 2, sm: 12, md: 12 }}
        >
          {pages.map((page, index) => (
            <Grid item xs={12} sm={8} md={3} key={index}>
              <Link
                href={`/categories/[endpoint]`}
                as={`/categories/${page.endpoint}`}
              >
                <a>
                  <Card sx={{ maxWidth: 345 }}>
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        {page.label}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {page.description}
                      </Typography>
                    </CardContent>
                  </Card>
                </a>
              </Link>
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
};

export default Home;
