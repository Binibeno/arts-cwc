import * as React from "react";

import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import TwitterIcon from "@mui/icons-material/Twitter";
import {
  AppBar,
  Box,
  Container,
  Menu,
  MenuItem,
  Toolbar,
  createTheme,
  Button,
  IconButton,
  Typography,
  InputBase,
  Link,
} from "@mui/material";
import { alpha } from "@mui/material/styles";
import {
  graphql,
  useStaticQuery,
  Link as GatsbyLink,
  navigate,
  GatsbyLinkProps,
} from "gatsby";
// @ts-ignore
import relativeDate from "tiny-relative-date";

import {
  Link as RouterLink,
  LinkProps as RouterLinkProps,
} from "@reach/router";
import { LinkProps } from "@mui/material/Link";

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
  },
});

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
                  href={page.url}
                  onClick={() => {
                    handleCloseNavMenu();
                  }}
                >
                  {page.title}
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
                href={page.url}
                onClick={() => {
                  handleCloseNavMenu();
                }}
                sx={{ my: 2, display: "block", color: "black" }}
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
    </AppBar>
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
            Website development by:{" "}
            <Link href="https://binibeno.hu/en?utm_source=milestone-cwc-arts">
              binibeno.hu
            </Link>
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
