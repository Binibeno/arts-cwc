import { Link, navigate } from "gatsby";
import * as React from "react";
//this project uses MUI
import { Button, IconButton, Link as MUILink } from "@mui/material";

// import css
import "../styles/main.css";

import { faker } from "@faker-js/faker";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import LikeIcon from "@mui/icons-material/ThumbUp";
import LikeIconDisabled from "@mui/icons-material/ThumbUpOutlined";
import {
  default as BookmarkDisabled,
  default as BookmarkEnabled,
} from "@mui/icons-material/TurnedInNot";
import TwitterIcon from "@mui/icons-material/Twitter";
import {
  AppBar,
  Box,
  Card,
  CardActions,
  CardContent,
  Container,
  CssBaseline,
  Grid,
  Menu,
  MenuItem,
  Toolbar,
} from "@mui/material";
import CardMedia from "@mui/material/CardMedia";
import InputBase from "@mui/material/InputBase";
import Typography from "@mui/material/Typography";
import { ThemeProvider, alpha, createTheme } from "@mui/material/styles";

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
// @ts-ignore
import { graphql, useStaticQuery } from "gatsby";
// @ts-ignore
import relativeDate from "tiny-relative-date";
import { ArticleType } from "./published/{contentfulArticle.link}";

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
  typography: {
    fontSize: 16,
    // allVariants: {
    //   color: "#212529",
    // },
  },
  palette: {
    mode: "light",
    primary: {
      // milestone yellow
      main: "#fdc72f",
    },
    secondary: {
      // milestone blue
      main: "#19adc3",
    },
    action: {
      active: "#FFF",
    },
    text: {
      // milestone black
      primary: "#212529", // Replace with your desired primary text color
      //! NOTE: main.css has this overwritten for links
      // secondary: "#AAA", // Replace with your desired secondary text color
    },
  },
  // set the color of the button
  components: {
    MuiButton: {
      // defaultProps: {
      //   // variant: "outlined",
      // },
      variants: [
        {
          props: { variant: "contained" },
          style: {
            color: "white",
            ":hover": {
              backgroundColor: "#127f90",
            },
            // bluebutton
            backgroundColor: "#19adc3",
          },
        },
      ],
      styleOverrides: {
        root: {
          // color: "white",
          // backgroundColor: "#19adc3",
        },
        colorInherit: {
          // color: "white",
          // backgroundColor: "#19adc3",
        },
      },
    },
  },
});

export { theme };

function capitalizeFirstLetter(string: string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function Intro() {
  function CenterImg({ children }: { children?: React.ReactNode }) {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
        }}
      >
        {children}
      </Box>
    );
  }

  const size = { md: "6.857142857142857rem", xs: "4.857142857142857rem" };
  // TODO: auto get (see responsive docs)
  return (
    <>
      <Typography
        variant="h4"
        // sx={{ fontSize: "h3" }}
        component="h2"
        gutterBottom
        m={"0.5em 0"}
      >
        Milestone{" "}
        <span style={{ color: "#ef0f94", fontFamily: "cursive" }}>Arts</span>+
        <span style={{ color: "#f5c73e", fontFamily: "MyUnderwood" }}>
          Creative writing
        </span>{" "}
        Publications
      </Typography>

      <Grid container>
        <Grid item xs={4}>
          <CenterImg>
            <Box
              sx={{ borderRadius: 1, height: size }}
              src={artsImg}
              component={"img"}
              draggable={false}
            ></Box>
          </CenterImg>
        </Grid>
        <Grid item xs={4}>
          <CenterImg>
            <Typography
              variant="h1"
              component="h2"
              fontFamily={"cursive"}
              sx={{ userSelect: "none" }}
            >
              +
            </Typography>
          </CenterImg>
        </Grid>
        <Grid item xs={4}>
          <CenterImg>
            <Box
              sx={{ borderRadius: 1, height: size }}
              src={cwcImg}
              component={"img"}
              draggable={false}
            ></Box>
          </CenterImg>
          {/* <p>Creative Writing Community</p> */}
          {/* https://milestone.instructure.com/courses/1400/pages/creative-writing-community-2023-slash-24 */}
        </Grid>
      </Grid>
    </>
  );
}

function DataCard({ children }: { children?: React.ReactNode }) {
  return (
    <Card sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
      <CardMedia
        sx={{ height: 140 }}
        image={`${faker.image.url()}?random=${faker.number.int()}`}
        title={faker.lorem.words(2)}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {capitalizeFirstLetter(faker.lorem.words(2))}
        </Typography>
        {/* add Author */}
        <Typography variant="body2" color="text.primary">
          By: {faker.person.firstName()} {faker.person.lastName()}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {faker.lorem.paragraphs(2)}
        </Typography>
      </CardContent>

      <CardActions sx={{ mt: "auto" }}>
        <Button variant="contained" size="small" sx={{ marginRight: "auto" }}>
          Read
        </Button>
        <Typography variant="body2" color="text.secondary">
          {faker.number.int(100)}
        </Typography>
        <IconButton aria-label="Like">
          {/* 50-50 chance to be enabled or disabled */}
          {faker.datatype.boolean() ? (
            <LikeIcon color={"secondary"} />
          ) : (
            <LikeIconDisabled color={"secondary"} />
          )}
        </IconButton>
        <IconButton aria-label="Bookmark">
          {/* 50-50 chance to be enabled or disabled */}
          {faker.datatype.boolean() ? (
            <BookmarkEnabled color={"secondary"} />
          ) : (
            <BookmarkDisabled color={"secondary"} />
          )}
        </IconButton>
        {/*  share iconbutton using navgiator.share */}
        {/* <IconButton aria-label="Share">
            <Share />
          </IconButton> */}
      </CardActions>
    </Card>
  );
}

export function Footer() {
  const query = useStaticQuery(graphql`
    query {
      site {
        buildTime
      }
    }
  `);

  const buildTime = new Date(query.site.buildTime);
  const buildTimeRelative = relativeDate(buildTime);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ padding: "3px 0" }} component={"div"}>
        <Toolbar>
          <Typography
            width={"100%"}
            textAlign={"center"}
            variant="body1"
            color="inherit"
            // padding={"24px"}
            component="div"
            pt={2}
            pb={2}
          >
            {/* © 2023 Benedek Nemeth. All rights reserved. */}
            {/* <br /> */}
            Website development by:{" "}
            <Typography
              component="a"
              href="https://binibeno.hu/en?utm_source=milestone-cwc-arts"
            >
              binibeno.hu
            </Typography>
            , © 2023 Benedek Nemeth
            <br />
            All logos appearing on this website are the exclusive property of
            Milestone Institute.
            <br />
            {/* https://benborgers.com/posts/gatsby-last-built */}
            Last Updated: {buildTimeRelative}
            <br />
            <i>Version: Alpha, Closed testing!</i>
          </Typography>
        </Toolbar>
        <Box
          sx={{
            flexGrow: 1,
            display: "flex",
            justifyContent: "center",
            gap: "1em",
          }}
        >
          <IconButton
            href="https://www.facebook.com/msinst"
            color="inherit"
            aria-label="Facebook"
          >
            <FacebookIcon />
          </IconButton>
          <IconButton
            href="https://www.instagram.com/milestone_institute/"
            color="inherit"
            aria-label="Instagram"
          >
            <InstagramIcon />
          </IconButton>
          <IconButton
            color="inherit"
            aria-label="Twitter"
            href="https://twitter.com/yourmilestone"
          >
            <TwitterIcon />
          </IconButton>
        </Box>
      </AppBar>
    </Box>
  );
}

export function ResponsiveAppBar() {
  const pages = [
    { title: "Home", url: "/" },
    { title: "About", url: "/about" },
  ];

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
      <Container maxWidth={false}>
        <Toolbar disableGutters>
          {/* For desktop */}
          {/* <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} /> */}
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="https://milestone-institute.org/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              color: "inherit",
              textDecoration: "none",
              // letterSpacing: "-2px",
            }}
          >
            Milestone Institute
          </Typography>
          {/* For mobile */}
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" }, pr: 2 }}>
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
                <MenuItem
                  key={page.title}
                  onClick={() => {
                    navigate(page.url);
                    handleCloseNavMenu();
                  }}
                >
                  <Typography textAlign="center">
                    <Link
                      to={page.url}
                      style={{
                        color: "inherit",
                        textDecoration: "none",
                      }}
                    >
                      {page.title}
                    </Link>
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          {/* <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} /> */}
          {/* TODO: disabled */}
          {/* <Typography
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
          </Typography> */}
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button
                key={page.title}
                onClick={() => {
                  navigate(page.url);
                  handleCloseNavMenu();
                }}
                sx={{ my: 2, display: "block", color: "black" }}
              >
                <Link
                  to={page.url}
                  style={{
                    color: "inherit",
                    textDecoration: "none",
                  }}
                >
                  {page.title}
                </Link>
              </Button>
            ))}
          </Box>

          <AppBarSearch />
          {/* 
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
          </IconButton> */}
        </Toolbar>
      </Container>
    </AppBar>
  );
}

function AppBarSearch() {
  return (
    <Box
      sx={{
        position: "relative",
        borderRadius: 1,
        backgroundColor: alpha(theme.palette.common.white, 0.15),
        "&:hover": {
          backgroundColor: alpha(theme.palette.common.white, 0.25),
        },
        marginLeft: 0,
        width: "100%",
        [theme.breakpoints.up("sm")]: {
          marginLeft: theme.spacing(1),
          width: "auto",
        },
      }}
    >
      <Box
        sx={{
          padding: theme.spacing(0, 2),
          height: "100%",
          position: "absolute",
          pointerEvents: "none",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <SearchIcon />
      </Box>
      <InputBase
        // color=''
        sx={{
          color: "inherit",
          "& .MuiInputBase-input": {
            padding: theme.spacing(1, 1, 1, 0),
            // vertical padding + font size from searchIcon
            paddingLeft: `calc(1em + ${theme.spacing(4)})`,
            transition: theme.transitions.create("width"),
            width: "100%",
            [theme.breakpoints.up("sm")]: {
              width: "12ch",
              "&:focus": {
                width: "20ch",
              },
            },
          },
        }}
        placeholder="Search…"
        inputProps={{ "aria-label": "search" }}
      />
    </Box>
  );
}
// todo: add editing page
// todo: add milestone icon
// todo: add search
//todo:add like button counter
// todo: add viewcounter
// todo: add analytics
// todo: list alll authors inside of about
// todo: add share button
// todo: login using milestone id and masterpassword

//TODO: branches: dev:only me, prod: public on domain, stable: testing on github pages

const IndexPage = () => {
  // query all articles
  // const allDocs: ArticleType[] = useStaticQuery(graphql`
  //   {
  //     allContentfulArticle {
  //       nodes {
  //         link
  //         id
  //       }
  //     }
  //   }
  // `);
  const allDocs: ArticleType[] = [];
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ flexGrow: 1, bgcolor: "palette.background.default" }}>
        <CssBaseline />
        {/* <<CssBaseline /> */}
        <ResponsiveAppBar />
        <Box component="main" sx={{ p: 3, pt: 0 }}>
          <Intro></Intro>

          <Typography variant="body1" component="p" gutterBottom>
            Welcome to our website! This site serves as a platform to showcase
            the work of young artists who are looking to build their reputations
            and increase their exposure in the community. Here, we aim to bring
            awareness to the talented artists who attend our organization by
            sharing their creations with the world. To learn more about our team
            visit the <MUILink href="/about">about page</MUILink>.
          </Typography>

          <h2>Works:</h2>

          <h3>2023 Summer works:</h3>

          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "stretch",
              gap: 4,
              flexWrap: { md: "nowrap", xs: "wrap" },
            }}
          >
            {Array.from(allDocs).map((_, index) => (
              <Box
                sx={{
                  maxWidth: { md: `${100 / 2}%}`, xs: "unset" },
                  flexBasis: { md: `${100 / 2}%`, xs: "unset" },
                }}
                key={index}
              >
                <DataCard />
              </Box>
            ))}
          </Box>
          <h3>2022 Summer term:</h3>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "stretch",
              gap: 4,
              flexWrap: { md: "nowrap", xs: "wrap" },
            }}
          >
            {Array.from(Array(2)).map((_, index) => (
              <Box
                sx={{
                  maxWidth: { md: `${100 / 2}%}`, xs: "unset" },
                  flexBasis: { md: `${100 / 2}%`, xs: "unset" },
                }}
                key={index}
              >
                <DataCard />
              </Box>
            ))}
          </Box>
          <Container
            maxWidth={false}
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
      <title>Milestone Publications</title>
      {/* TODO: indexing disabled */}
      <meta name="robots" content="noindex"></meta>
    </>
  );
}
