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
    description: "In Elden Ring, Armor are protective items worn by the player's character which grant protections, resistances, and various bonus effects against damage and status effects, as well as influencing statistics such as carry load and poise.",
  },
  {
    label: "Sorceries",
    endpoint: "sorceries",
    description: "Sorceries are a type of Magic in Elden Ring. Sorcery Spells are often dependent on the Intelligence stat, and have a variety of effects, from conjuring magic projectiles, to calling down meteors, and even attacking using blood magic. ",
  },
  {
    label: "Incantations",
    endpoint: "bosses",
    description: "Incantations are a type of Magic in Elden Ring. Incantation Spells are often dependent on the Faith stat, and have a variety of effects (such as healing, curing status effects, dealing damage, and enchanting people or weapons).",
  },
  {
    label: "Shields",
    endpoint: "shields",
    description: "Shields in Elden Ring are pieces of protective equipment which provide defense against the world's Enemies and Bosses. Typically wielded in the off-hand, Shields are capable of guarding, parrying, bashing, or even something entirely unique with their respective Ashes of War.",
  },
  {
    label: "Ashes of War",
    endpoint: "ashes",
    description: "Ashes of War for Elden Ring are special items which enables you to replace Weapon Skills and Affinities of your equipment with new ones or even one at all.",
  },
  {
    label: "Bosses",
    endpoint: "bosses",
    description: "Bosses in Elden Ring are powerful enemies that add challenging experiences to the game. Bosses are encountered throughout the game in both the overworld and inside traditional dungeon-style levels. ",
  },
  {
    label: "Classes",
    endpoint: "classes",
    description: "Classes for Elden Ring are the starting archetypes available to the player.Choosing a class determines the player's starting Stats and Equipment which can then be improved and upgraded later on as you progress throughout the game.",
  },
  {
    label: "Items",
    endpoint: "items",
    description: "Items in Elden Ring contain all obtainable items such as Consumables, Key Items, Materials, and more. Items may be obtained as drops from Enemies and Bosses, given by NPCs, looted from chests, or found throughout the Lands Between.",
  },
  {
    label: "Locations",
    endpoint: "locations",
    description: "Locations in Elden Ring are vast and interconnected. The world of Elden Ring is a persistent Map that can be traversed without loading screens. There are vast landscapes in between the “dungeon-esque” areas. ",
  },
  {
    label: "NPCs",
    endpoint: "npcs",
    description: "NPCs in Elden Ring are the various inhabitants that the player encounters throughout their journey. These NPCs often provide information that helps players piece together the Lore of the game, ",
  },
  {
    label: "Spirit Ashes",
    endpoint: "spirits",
    description: "Spirit Ashes in Elden Ring are Spirit companions that can aid the player in combat. As players progress through the game, they will be able to collect Spirit Ashes, which allow them to summon the spirits of fallen warriors and creatures. ",
  },
  {
    label: "Talismans",
    endpoint: "talismans",
    description: "Talismans in Elden Ring are accessories which can be equipped to acquire a variety of offensive, defensive, or utility effects. Talismans may be obtained as an item drop from Enemies or Bosses, looted from chests, or purchased from Merchants.",
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
