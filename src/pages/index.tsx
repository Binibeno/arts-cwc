import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
//this project uses MUI
import { Button, IconButton } from "@mui/material";

// import css
import "../styles/main.css";

import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { ThemeOptions, ThemeProvider, createTheme } from "@mui/material/styles";
import { blue, orange, red } from "@mui/material/colors";
import {
  Grid,
  Box,
  Card,
  CardActions,
  CardContent,
  AppBar,
  Toolbar,
  CssBaseline,
  Drawer,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Paper,
  MenuItem,
  Menu,
  Container,
  ListItemButton,
} from "@mui/material";
import LikeIcon from "@mui/icons-material/ThumbUp";
import BookmarkDisabled from "@mui/icons-material/TurnedInNot";
import BookmarkEnabled from "@mui/icons-material/TurnedInNot";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import { Share } from "@mui/icons-material";
import { faker } from "@faker-js/faker";
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";

// MUI sx responsive values:
//mui.com/system/getting-started/usage/#responsive-values
/*
<Box
  sx={{
    width: {
      xs: 100, // theme.breakpoints.up('xs')
      sm: 200, // theme.breakpoints.up('sm')
      md: 300, // theme.breakpoints.up('md')
      lg: 400, // theme.breakpoints.up('lg')
      xl: 500, // theme.breakpoints.up('xl')
    },
  }}
>
  This box has a responsive width.
</Box>*/

//  import image
// @ts-ignore
import artsImg from "../images/arts.png"; // Tell webpack this JS file uses this image
// @ts-ignore
import cwcImg from "../images/cwc.jpg"; // Tell webpack this JS file uses this image

// declare module "@mui/material/styles" {
//   interface Theme {
//     status: {
//       danger: string;
//       primary: string;
//       mode: string;
//     };
//   }
//   // allow configuration using `createTheme`
//   interface ThemeOptions {
//     status?: {
//       danger?: string;
//       primary: string;

//       mode: string;
//     };
//   }
// }
const theme = createTheme({
  palette: {
    // primary: orange[500],
    mode: "dark",
    primary: {
      main: blue[600],
    },
  },
});
function capitalizeFirstLetter(string: string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function Center({ children }: { children?: React.ReactNode }) {
  return <Container>{children}</Container>;
}

function Intro() {
  function CenterImg({ children }: { children?: React.ReactNode }) {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          // alignItems: "center",
        }}
      >
        {children}
      </Box>
    );
  }

  const size = "6rem";
  return (
    <Box>
      <Typography variant="h3" component="h2" gutterBottom m={"0.5em 0"}>
        Milestone <span style={{ color: "#ef0f94" }}>Arts</span>+
        <span style={{ color: "#f5c73e" }}>Creative writing</span> Newspaper
      </Typography>

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-evenly",
        }}
      >
        <Grid container>
          <Grid item xs={4}>
            <CenterImg>
              <img
                src={artsImg}
                alt=""
                style={{ height: size, borderRadius: "5%" }}
              />
            </CenterImg>
          </Grid>
          <Grid item xs={4}>
            <CenterImg>
              <Typography variant="h1" component="h2">
                +
              </Typography>
            </CenterImg>
          </Grid>
          <Grid item xs={4}>
            <CenterImg>
              <img
                src={cwcImg}
                alt=""
                style={{ height: size, borderRadius: "5%" }}
              />
            </CenterImg>
            {/* <p>Creative Writing Community</p> */}
            {/* https://milestone.instructure.com/courses/1400/pages/creative-writing-community-2023-slash-24 */}
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}

function DataCard({ children }: { children?: React.ReactNode }) {
  return (
    <Box sx={{ justifyContent: "center" }}>
      <Card>
        <CardMedia
          sx={{ height: 140 }}
          image={`${faker.image.url()}?random=${faker.datatype.number()}`}
          title={faker.lorem.words(2)}
        />
        <CardContent>
          <Grid container spacing={2}>
            <Grid item xs={8}></Grid>
            <Grid item xs={4}></Grid>
          </Grid>
          <Typography gutterBottom variant="h5" component="div">
            {capitalizeFirstLetter(faker.lorem.words(2))}
          </Typography>
          {/* add Author */}
          <Typography variant="body2" color="text.primary">
            By: {faker.name.firstName()} {faker.name.lastName()}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {faker.lorem.paragraphs(1)}
          </Typography>
        </CardContent>

        <CardActions>
          <Button size="small" sx={{ marginRight: "auto" }}>
            Read
          </Button>
          <Typography variant="body2" color="text.secondary">
            {faker.datatype.number(100)}
          </Typography>
          <IconButton aria-label="Like">
            {/* like buttin */}
            <LikeIcon />
          </IconButton>
          <IconButton aria-label="Bookmark">
            {/* like buttin */}
            <BookmarkDisabled />
          </IconButton>
          {/*  share iconbutton using navgiator.share */}
          {/* <IconButton aria-label="Share">
            <Share />
          </IconButton> */}
        </CardActions>
      </Card>
    </Box>
  );
}

function Footer() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ padding: "3px 0" }}>
        <Toolbar>
          <Typography
            width={"100%"}
            textAlign={"center"}
            variant="body1"
            color="inherit"
            // padding={"24px"}
            component="div"
          >
            © 2023 Benedek Nemeth. All rights reserved.
            <br />
            All logos were made by Milestone Institute and its students.
            <br />
            <i>Version: Early Alpha, Not public!</i>
          </Typography>
        </Toolbar>
        {/* facebook, instagram, twitter buttons centered, in a grey color */}
        <Box
          sx={{
            flexGrow: 1,
            display: "flex",
            justifyContent: "center",
            gap: "1em",
          }}
        >
          <IconButton color="inherit" aria-label="Facebook">
            <FacebookIcon />
          </IconButton>
          <IconButton color="inherit" aria-label="Instagram">
            <InstagramIcon />
          </IconButton>
          <IconButton color="inherit" aria-label="Twitter">
            <TwitterIcon />
          </IconButton>
        </Box>
      </AppBar>
    </Box>
  );
}

function ResponsiveAppBar() {
  const pages = ["Home", "About", "Edit page"];

  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* For desktop */}
          {/* <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} /> */}
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            News
          </Typography>
          {/* For mobile */}
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
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
            {/* drop down menu for mobile */}
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
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          {/* <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} /> */}
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            News
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                {page}
              </Button>
            ))}
          </Box>

          {/* <SearchAppBar /> */}

          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleOpenNavMenu}
            color="inherit"
            sx={{ display: { md: "none", xs: "flex" } }}
          >
            <SearchIcon />
          </IconButton>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

// todo: add editing page
// todo: add search
//todo:add like button counter
// todo: add viewcounter
// todo: add analytics
// todo: list alll authors inside of about
// todo: add share button
// todo: login using milestone id and masterpassword

// todo: add icons into navbar

const IndexPage = () => {
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ flexGrow: 1 }}>
        {/* <CssBaseline /> */}
        {/* <<CssBaseline /> */}
        <ResponsiveAppBar />
        <Box component="main" sx={{ p: 3 }}>
          <Intro></Intro>
          {/* <h2>Your favorites / saved (maybe add into top menu?):</h2> */}

          <h2>Artworks:</h2>
          <i>Working on it...</i>
          <h2>Writings:</h2>

          {/* <h3>Most popular:</h3> */}
          <h3>Latest: </h3>
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
            alignItems="stretch"
          >
            {Array.from(Array(6)).map((_, index) => (
              <Grid
                // sx={{ height: "100%" }}
                item
                xs={4}
                sm={4}
                md={4}
                key={index}
              >
                <DataCard />
              </Grid>
            ))}
          </Grid>
          <Container
            maxWidth="sm"
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Button variant="contained" sx={{ marginTop: "1em" }}>
              Load more
            </Button>
          </Container>
        </Box>
      </Box>
      <Footer />
    </ThemeProvider>
  );
};

//add a head component using the Head API

export default IndexPage;

export function Head() {
  return (
    <>
      <html lang="en" />
      <body className="my-body-class" />
      <title>Arts CWC newspaper</title>
    </>
  );
}
