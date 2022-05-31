import * as React from "react";
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  Container,
  Avatar,
  Tooltip,
  MenuItem,
  Button,
} from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import MenuIcon from "@mui/icons-material/Menu";
import Logo from "../../public/Logo.webp";
import { pages } from "../Pages";

const settings = ["Profile", "Account", "Dashboard", "Logout"];

const ResponsiveAppBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/** LOGO LEFT */}
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              mr: 2,
              pt: 1,
              flexGrow: 1,
            }}
          >
            <Link href="/">
              <a>
                <Image
                  src={Logo}
                  alt={"Logo Five Fingers"}
                  height={60}
                  width={60}
                />
              </a>
            </Link>
          </Box>

          {/** Burger Menu - Small viewports */}
          {/* <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page, index) => (
                <MenuItem key={index} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">
                    <Link
                      href={`/categories/[endpoint]`}
                      as={`/categories/${page.endpoint}`}
                    >
                      <a>{page.label}</a>
                    </Link>
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box> */}

          {/**LOGO CENTER */}
          <Box
            sx={{
              display: { xs: "flex", md: "none" },
              mr: 1,
              pt: 1,
              flexGrow: 1,
            }}
          >
            <Link href="/">
              <a>
                <Image
                  src={Logo}
                  alt={"Logo Five Fingers"}
                  height={60}
                  width={60}
                />
              </a>
            </Link>
          </Box>

          {/* Nav Menu */}
          {/* <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page, index) => (
              <Button key={index} onClick={handleCloseNavMenu}>
                <Link
                  href={`/categories/[endpoint]`}
                  as={`/categories/${page.endpoint}`}
                >
                  <a>
                    <h3>{page.label}</h3>
                  </a>
                </Link>
              </Button>
            ))}
          </Box> */}

          {/** User LOGGER */}
          {/* <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box> */}
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;
