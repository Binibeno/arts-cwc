import * as React from "react";

import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import {
  AppBar,
  Autocomplete,
  Avatar,
  AvatarGroup,
  Box,
  Button,
  Container,
  IconButton,
  InputBase,
  Menu,
  MenuItem,
  Stack,
  Toolbar,
  Tooltip,
  Typography,
  createTheme,
} from "@mui/material";
import { alpha } from "@mui/material/styles";
import { Link as GatsbyLink, graphql, navigate, useStaticQuery } from "gatsby";
// @ts-ignore

import Link, { LinkProps } from "@mui/material/Link";
import { LinkProps as RouterLinkProps } from "@reach/router";

import artsImg from "../images/arts.png"; // Tell webpack this JS file uses this image
import cwcImg from "../images/cwc.png"; // Tell webpack this JS file uses this image
import historyImg from "../images/history.png"; // Tell webpack this JS file uses this image
import siteIcon from "../images/icon.png"; // Tell webpack this JS file uses this image
import mstImg from "../images/mst.png"; // Tell webpack this JS file uses this image

const LinkBehavior = React.forwardRef<
  HTMLAnchorElement,
  Omit<RouterLinkProps<any>, "to"> & { href: RouterLinkProps<any>["to"] }
>((props, ref) => {
  const { href, ...other } = props;
  // Map href (Material UI) -> to (react-router)

  if (href.startsWith("http") || href.startsWith("mailto")) {
    return <a ref={ref as any} href={href} {...other} />;
  } else {
    return <GatsbyLink ref={ref as any} to={href} {...other} />;
  }
});

// //see: mui.com/material-ui/guides/routing/
// const LinkBehavior = React.forwardRef<
//   HTMLAnchorElement,
//   Omit<GatsbyLinkProps<any>, "to"> & { href: GatsbyLinkProps<any>["to"] }
// >((props, ref) => {
//   const { href, children, ...other } = props;
//   // Map href (Material UI) -> to (react-router)

//   if (href.startsWith("http")) {
//     return <a href={href}>{children}</a>;
//   } else {
//     return (
//       <GatsbyLink className="GASTBYLINK" to={href}>
//         {children}
//       </GatsbyLink>
//     );
//   }
// });

export const theme = createTheme({
  typography: {
    fontSize: 16,
    h5: {
      fontFamily: "Times New Roman",
    },
    // h6: {
    //   fontFamily: "Times New Roman",
    // },
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
      // active: "#FFF",
    },
    text: {
      // milestone black
      primary: "#212529", // Replace with your desired primary text color
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
        {
          props: { variant: "outlined" },
          style: {
            ":hover": {
              borderColor: "rgba(33, 37, 41, 1)", // milestone black
            },
            borderColor: "rgba(33, 37, 41, 0.4)", // milestone black lighter
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
    MuiLink: {
      defaultProps: {
        component: LinkBehavior,
      } as LinkProps,
      // styleOverrides: {
      //   root: {
      // color: "inherit",
      // textDecorationColor: "inherit",
      //   },
      // },
      variants: [
        {
          props: { variant: "inherit" },
          style: {
            color: "#212529",
            textDecorationColor: "rgba(33, 37, 41, 0.4)", // default font color
            ":hover": {
              //hover
              // rgba(253, 199, 47, 0.4).  this is the original behavior. Use 0.4 alpha, on origial color
              //! #212529 == rgba(33, 37, 41, 1) MILESTONE BLACK
              textDecorationColor: "#212529", // Milestone black
            },
          },
        },
      ],
    },
    MuiButtonBase: {
      defaultProps: {
        LinkComponent: LinkBehavior,
      },
    },
    MuiAvatarGroup: {
      styleOverrides: {
        avatar: {
          marginLeft: "-30px",
        },
      },
    },
  },
});

function AppBarSearch() {
  // use static query
  const data: Queries.SearchDocsQuery = useStaticQuery(graphql`
    query SearchDocs {
      allContentfulArticle {
        nodes {
          link
          title
          author
        }
      }
    }
  `);

  const allDocs = data.allContentfulArticle.nodes;
  return (
    <Autocomplete
      freeSolo
      disableClearable
      clearOnBlur
      // defaultValue="Search..."
      options={allDocs.map((option) => option.title)}
      onInputChange={(event, value) => {
        if (value) {
          const doc = allDocs.find((doc) => doc.title == value);
          if (doc) {
            // navigate(doc);
            console.log(doc.link);
            navigate("/published/" + doc.link);
          }
        }
      }}
      sx={{
        width: { xs: "100%", md: "unset" },
      }}
      renderInput={(params) => (
        <Box
          sx={{
            position: "relative",
            borderRadius: 1,
            backgroundColor: alpha(theme.palette.common.white, 0.15),
            "&:hover": {
              backgroundColor: alpha(theme.palette.common.white, 0.25),
            },
            // marginLeft: { sx: 0, md: "auto" },
            [theme.breakpoints.up("sm")]: {
              marginLeft: theme.spacing(1),
              // width: "auto",
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
            inputProps={params.inputProps}
            // {...params}
            // variant="standard"
            // color=''
            sx={{
              color: "inherit",
              "& .MuiInputBase-input": {
                padding: theme.spacing(1, 1, 1, 0),
                // vertical padding + font size from searchIcon
                paddingLeft: `calc(1em + ${theme.spacing(4)}) !important`,
                // transition: theme.transitions.create("width"),
                [theme.breakpoints.up("sm")]: {
                  // width: "12ch",
                  "&:focus": {
                    // width: "20ch",
                  },
                },
              },
            }}
            ref={params.InputProps.ref}
            placeholder="Search…"
            // inputProps={{ "aria-label": "search" }}
            // InputProps={{
            //   "aria-label": "search",
            //   ...params.InputProps,
            //   type: "search",
            // }}
          />
        </Box>
      )}
    />
  );
}

// TODO: appbar search dynamicly query contentful

//TODO: need this https://mui.com/material-ui/react-avatar/#grouped

export function ResponsiveAppBar({
  activePage,
}: {
  activePage: "Home" | "About" | "content";
}) {
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
    <>
      <AppBar position="relative">
        <Container maxWidth={false}>
          <Toolbar disableGutters>
            <Box sx={{ display: { xs: "none", md: "flex" }, mt: 1, mx: 1 }}>
              <img src={mstImg} style={{ height: "4.5em" }}></img>
            </Box>
            {/* For desktop */}
            <Stack>
              <Typography
                variant="h5"
                noWrap
                component="h1"
                sx={{
                  mr: 2,
                  display: { xs: "none", md: "block" },
                  fontFamily: "serif",
                  fontWeight: 700,
                  color: "inherit",
                  textDecoration: "none",
                  letterSpacing: "-1px",
                }}
              >
                Creative Community
              </Typography>
              <Typography
                variant="subtitle1"
                textAlign="center"
                // textAlign="left"
                noWrap
                component="p"
                sx={{
                  mr: 2,
                  display: { xs: "none", md: "block" },
                  fontFamily: "serif",
                  fontWeight: 700,
                  color: "inherit",
                  textDecoration: "none",
                  letterSpacing: "-1px",
                }}
              >
                <Link
                  sx={{ textDecoration: "none" }}
                  href="https://milestone-institute.org/en/"
                >
                  Milestone Institute
                </Link>
              </Typography>
            </Stack>
            {/* For mobile */}
            <Box
              sx={{ flexGrow: 1, display: { xs: "flex", md: "none" }, pr: 2 }}
            >
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
                  <MenuItem key={page.title}>
                    <Button sx={{ color: "black" }} href={page.url}>
                      {page.title}
                    </Button>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            <Box sx={{ display: { xs: "none", md: "none" } }}>
              <img src={siteIcon} style={{ height: "5em" }}></img>
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
                  variant={activePage == page.title ? "outlined" : "text"}
                  key={page.title}
                  href={page.url}
                  onClick={() => {
                    handleCloseNavMenu();
                  }}
                  sx={{
                    my: 2,
                    mx: 1,
                    display: "block",
                    color: "black",
                    // borderColor: "black",
                  }}
                >
                  {page.title}
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
        <Container sx={{ display: { md: "none", xs: "block" }, mb: 1 }}>
          <Stack>
            <Typography
              variant="h4"
              component="p"
              textAlign={"center"}
              sx={{
                fontSize: "2.2rem",
                mr: 2,
                fontFamily: "serif",
                fontWeight: 700,
                color: "inherit",
                textDecoration: "none",
                letterSpacing: "-1px",
              }}
            >
              Creative Community
            </Typography>
            <Typography
              variant="subtitle1"
              textAlign="center"
              component="p"
              sx={{
                mr: 2,
                fontFamily: "serif",
                fontWeight: 700,
                color: "inherit",
                textDecoration: "none",
                letterSpacing: "-1px",
              }}
            >
              Milestone Institute
            </Typography>
          </Stack>
        </Container>
        <Stack
          direction={"row"}
          alignItems={"center"}
          sx={{ justifyContent: { xs: "start", md: "end" } }}
          px={{ xs: 0, md: 3 }}
        >
          <Typography
            variant="body1"
            noWrap
            component="div"
            mr={2}
            sx={{ height: "fit-content", display: { xs: "none", md: "block" } }}
          >
            Operated by:
          </Typography>
          <Typography
            variant="h6"
            noWrap
            component="div"
            mx={1}
            sx={{ height: "fit-content", display: { xs: "block", md: "none" } }}
          >
            By:
          </Typography>
          <AvatarGroup>
            <Tooltip title="Creative Writing Community">
              <Avatar
                sx={{
                  cursor: "pointer",
                  height: { xs: "2em", md: "2.5em" },
                  width: { xs: "2em", md: "2.5em" },
                }}
                onClick={() => {
                  navigate("/about");
                }}
                alt="Creative Writing Community"
                src={cwcImg}
              />
            </Tooltip>
            <Tooltip title="Arts Society">
              <Avatar
                sx={{
                  cursor: "pointer",
                  height: { xs: "2em", md: "2.5em" },
                  width: { xs: "2em", md: "2.5em" },
                }}
                onClick={() => {
                  navigate("/about");
                }}
                alt="Arts Society"
                src={artsImg}
              />
            </Tooltip>
            <Tooltip title="History Society">
              <Avatar
                sx={{
                  cursor: "pointer",
                  height: { xs: "2em", md: "2.5em" },
                  width: { xs: "2em", md: "2.5em" },
                }}
                onClick={() => {
                  navigate("/about");
                }}
                alt="History Society"
                src={historyImg}
              />
            </Tooltip>
          </AvatarGroup>
          <Avatar
            sx={{
              // zIndex: "800",
              position: "absolute",
              cursor: "pointer",
              width: "4.9em",
              height: "auto",
              // marginTop: "0em",
              padding: "0.3em",
              backgroundColor: "#fdc72f",
              // marginLeft: "auto",
              right: 0,
              marginRight: "0",
              display: { xs: "block", md: "none" },
            }}
            onClick={() => {
              navigate("/about");
            }}
            alt="Creative Writing Community"
            src={mstImg}
          />
        </Stack>
      </AppBar>
      <Box sx={{ height: "2.5em" }}></Box>
    </>
  );
}
