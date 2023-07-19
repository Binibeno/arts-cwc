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
  Autocomplete,
  TextField,
  AutocompleteRenderInputParams,
  AvatarGroup,
  Avatar,
  Tooltip,
  Stack,
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

import artsImg from "../images/arts.png"; // Tell webpack this JS file uses this image
import cwcImg from "../images/cwc.png"; // Tell webpack this JS file uses this image
import historyImg from "../images/history.png"; // Tell webpack this JS file uses this image
import siteIcon from "../images/icon.png"; // Tell webpack this JS file uses this image
import mstImg from "../images/mst.png"; // Tell webpack this JS file uses this image

const LinkBehavior = React.forwardRef <
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

      export const theme= createTheme({
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
      props: {variant: "contained" },
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
      props: {variant: "outlined" },
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
      props: {variant: "inherit" },
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
  const allDocs = [
    {
      link: "fluffy-blueberry-pancakes",
    id: "07437cd0-f2e9-5ebe-899a-4cc8f047e5d2",
    title: "Fluffy Blueberry Pancakes",
    author: "ChatGPT",
    description: {
      description:
    "Start your day off right with these heavenly fluffy blueberry pancakes. Packed with plump and juicy blueberries, these pancakes are a delightful combination of fluffy texture and bursts of fruity sweetness, making them an instant breakfast favourite.",
      },
    documentBody: {
      raw: '{"data":{ },"content":[{"data":{ },"content":[{"data":{ },"marks":[],"value":"Ingredients:","nodeType":"text"}],"nodeType":"paragraph"},{"data":{ },"content":[{"data":{ },"content":[{"data":{ },"content":[{"data":{ },"marks":[],"value":"1 cup all-purpose flour","nodeType":"text"}],"nodeType":"paragraph"}],"nodeType":"list-item"},{"data":{ },"content":[{"data":{ },"content":[{"data":{ },"marks":[],"value":"2 tablespoons granulated sugar","nodeType":"text"}],"nodeType":"paragraph"}],"nodeType":"list-item"},{"data":{ },"content":[{"data":{ },"content":[{"data":{ },"marks":[],"value":"2 teaspoons baking powder","nodeType":"text"}],"nodeType":"paragraph"}],"nodeType":"list-item"},{"data":{ },"content":[{"data":{ },"content":[{"data":{ },"marks":[],"value":"1/2 teaspoon salt","nodeType":"text"}],"nodeType":"paragraph"}],"nodeType":"list-item"},{"data":{ },"content":[{"data":{ },"content":[{"data":{ },"marks":[],"value":"1 cup milk","nodeType":"text"}],"nodeType":"paragraph"}],"nodeType":"list-item"},{"data":{ },"content":[{"data":{ },"content":[{"data":{ },"marks":[],"value":"1 large egg","nodeType":"text"}],"nodeType":"paragraph"}],"nodeType":"list-item"},{"data":{ },"content":[{"data":{ },"content":[{"data":{ },"marks":[],"value":"2 tablespoons unsalted butter, melted","nodeType":"text"}],"nodeType":"paragraph"}],"nodeType":"list-item"},{"data":{ },"content":[{"data":{ },"content":[{"data":{ },"marks":[],"value":"1 cup fresh blueberries","nodeType":"text"}],"nodeType":"paragraph"}],"nodeType":"list-item"},{"data":{ },"content":[{"data":{ },"content":[{"data":{ },"marks":[],"value":"Optional toppings: maple syrup, additional blueberries, powdered sugar","nodeType":"text"}],"nodeType":"paragraph"}],"nodeType":"list-item"}],"nodeType":"unordered-list"},{"data":{ },"content":[{"data":{ },"marks":[],"value":"Instructions:","nodeType":"text"}],"nodeType":"paragraph"},{"data":{ },"content":[{"data":{ },"content":[{"data":{ },"content":[{"data":{ },"marks":[],"value":"In a large mixing bowl, whisk together the flour, sugar, baking powder, and salt until well combined.","nodeType":"text"}],"nodeType":"paragraph"}],"nodeType":"list-item"},{"data":{ },"content":[{"data":{ },"content":[{"data":{ },"marks":[],"value":"In a separate bowl, whisk together the milk and egg until thoroughly mixed.","nodeType":"text"}],"nodeType":"paragraph"}],"nodeType":"list-item"},{"data":{ },"content":[{"data":{ },"content":[{"data":{ },"marks":[],"value":"Pour the milk and egg mixture into the dry ingredients. Add the melted butter as well. Stir the batter gently until just combined. Be careful not to overmix; a few lumps are okay.","nodeType":"text"}],"nodeType":"paragraph"}],"nodeType":"list-item"},{"data":{ },"content":[{"data":{ },"content":[{"data":{ },"marks":[],"value":"Gently fold in the fresh blueberries into the batter, being careful not to crush them.","nodeType":"text"}],"nodeType":"paragraph"}],"nodeType":"list-item"},{"data":{ },"content":[{"data":{ },"content":[{"data":{ },"marks":[],"value":"Let the batter rest for about 5 minutes to allow it to thicken slightly.","nodeType":"text"}],"nodeType":"paragraph"}],"nodeType":"list-item"},{"data":{ },"content":[{"data":{ },"content":[{"data":{ },"marks":[],"value":"Preheat a non-stick skillet or griddle over medium heat. You can lightly grease it with butter or cooking spray if desired.","nodeType":"text"}],"nodeType":"paragraph"}],"nodeType":"list-item"},{"data":{ },"content":[{"data":{ },"content":[{"data":{ },"marks":[],"value":"Once the skillet is hot, ladle about 1/4 cup of batter onto the skillet for each pancake.","nodeType":"text"}],"nodeType":"paragraph"}],"nodeType":"list-item"},{"data":{ },"content":[{"data":{ },"content":[{"data":{ },"marks":[],"value":"Cook until bubbles start to form on the surface of the pancake, then flip it with a spatula. Cook for another 1-2 minutes, or until golden brown.","nodeType":"text"}],"nodeType":"paragraph"}],"nodeType":"list-item"},{"data":{ },"content":[{"data":{ },"content":[{"data":{ },"marks":[],"value":"Repeat the process with the remaining batter, adding more butter or cooking spray to the skillet as needed.","nodeType":"text"}],"nodeType":"paragraph"}],"nodeType":"list-item"},{"data":{ },"content":[{"data":{ },"content":[{"data":{ },"marks":[],"value":"Serve the pancakes warm with your favorite toppings such as maple syrup, additional blueberries, or a dusting of powdered sugar.","nodeType":"text"}],"nodeType":"paragraph"}],"nodeType":"list-item"}],"nodeType":"ordered-list"},{"data":{ },"content":[{"data":{ },"marks":[],"value":"Enjoy your fluffy blueberry pancakes and savor the burst of fruity goodness in every bite!\\n","nodeType":"text"}],"nodeType":"paragraph"}],"nodeType":"document"}',
      },
    coverImage: {
      url: "https://images.ctfassets.net/lnx6p1dpjtms/5oYHjyzFPmTpPp9gnraTn5/a1c23ddeb236062e47f1703a7601aac7/Blueberry-Pancakes_8.webp",
      },
    },
    {
      link: "chocolate-chip-cookies",
    id: "cae181ac-9a6f-5adf-b5c1-0ff28420468a",
    title: "Chocolate Chip Cookies",
    author: "ChatGPT",
    description: {
      description:
    "Indulge in the ultimate comfort treat with these irresistible chocolate chip cookies. Each bite is a perfect balance of buttery dough and gooey chocolate chips, creating a heavenly combination that will satisfy your sweet tooth and leave you wanting more.",
      },
    documentBody: {
      raw: '{"data":{ },"content":[{"data":{ },"content":[{"data":{ },"marks":[],"value":"Ingredients:","nodeType":"text"}],"nodeType":"paragraph"},{"data":{ },"content":[{"data":{ },"content":[{"data":{ },"content":[{"data":{ },"marks":[],"value":"1 cup unsalted butter, softened","nodeType":"text"}],"nodeType":"paragraph"}],"nodeType":"list-item"},{"data":{ },"content":[{"data":{ },"content":[{"data":{ },"marks":[],"value":"1 cup granulated sugar","nodeType":"text"}],"nodeType":"paragraph"}],"nodeType":"list-item"},{"data":{ },"content":[{"data":{ },"content":[{"data":{ },"marks":[],"value":"1 cup brown sugar, packed","nodeType":"text"}],"nodeType":"paragraph"}],"nodeType":"list-item"},{"data":{ },"content":[{"data":{ },"content":[{"data":{ },"marks":[],"value":"2 large eggs","nodeType":"text"}],"nodeType":"paragraph"}],"nodeType":"list-item"},{"data":{ },"content":[{"data":{ },"content":[{"data":{ },"marks":[],"value":"1 teaspoon vanilla extract","nodeType":"text"}],"nodeType":"paragraph"}],"nodeType":"list-item"},{"data":{ },"content":[{"data":{ },"content":[{"data":{ },"marks":[],"value":"3 cups all-purpose flour","nodeType":"text"}],"nodeType":"paragraph"}],"nodeType":"list-item"},{"data":{ },"content":[{"data":{ },"content":[{"data":{ },"marks":[],"value":"1 teaspoon baking soda","nodeType":"text"}],"nodeType":"paragraph"}],"nodeType":"list-item"},{"data":{ },"content":[{"data":{ },"content":[{"data":{ },"marks":[],"value":"1/2 teaspoon salt","nodeType":"text"}],"nodeType":"paragraph"}],"nodeType":"list-item"},{"data":{ },"content":[{"data":{ },"content":[{"data":{ },"marks":[],"value":"2 cups chocolate chips","nodeType":"text"}],"nodeType":"paragraph"}],"nodeType":"list-item"},{"data":{ },"content":[{"data":{ },"content":[{"data":{ },"marks":[],"value":"Optional: chopped nuts, such as walnuts or pecans","nodeType":"text"}],"nodeType":"paragraph"}],"nodeType":"list-item"}],"nodeType":"unordered-list"},{"data":{ },"content":[{"data":{ },"marks":[],"value":"Instructions:","nodeType":"text"}],"nodeType":"paragraph"},{"data":{ },"content":[{"data":{ },"content":[{"data":{ },"content":[{"data":{ },"marks":[],"value":"Preheat your oven to 350°F (175°C) and line a baking sheet with parchment paper.","nodeType":"text"}],"nodeType":"paragraph"}],"nodeType":"list-item"},{"data":{ },"content":[{"data":{ },"content":[{"data":{ },"marks":[],"value":"In a large mixing bowl, cream together the softened butter, granulated sugar, and brown sugar until light and fluffy.","nodeType":"text"}],"nodeType":"paragraph"}],"nodeType":"list-item"},{"data":{ },"content":[{"data":{ },"content":[{"data":{ },"marks":[],"value":"Add the eggs, one at a time, mixing well after each addition. Stir in the vanilla extract.","nodeType":"text"}],"nodeType":"paragraph"}],"nodeType":"list-item"},{"data":{ },"content":[{"data":{ },"content":[{"data":{ },"marks":[],"value":"In a separate bowl, whisk together the flour, baking soda, and salt. Gradually add the dry ingredients to the butter mixture, mixing until just combined.","nodeType":"text"}],"nodeType":"paragraph"}],"nodeType":"list-item"},{"data":{ },"content":[{"data":{ },"content":[{"data":{ },"marks":[],"value":"Fold in the chocolate chips and any optional chopped nuts, ensuring they are evenly distributed throughout the dough.","nodeType":"text"}],"nodeType":"paragraph"}],"nodeType":"list-item"},{"data":{ },"content":[{"data":{ },"content":[{"data":{ },"marks":[],"value":"Using a cookie scoop or tablespoon, drop rounded portions of dough onto the prepared baking sheet, spacing them about 2 inches apart.","nodeType":"text"}],"nodeType":"paragraph"}],"nodeType":"list-item"},{"data":{ },"content":[{"data":{ },"content":[{"data":{ },"marks":[],"value":"Bake in the preheated oven for 10-12 minutes, or until the edges are golden brown. The centers may appear slightly undercooked but will firm up as the cookies cool.","nodeType":"text"}],"nodeType":"paragraph"}],"nodeType":"list-item"},{"data":{ },"content":[{"data":{ },"content":[{"data":{ },"marks":[],"value":"Remove from the oven and allow the cookies to cool on the baking sheet for 5 minutes, then transfer them to a wire rack to cool completely.","nodeType":"text"}],"nodeType":"paragraph"}],"nodeType":"list-item"},{"data":{ },"content":[{"data":{ },"content":[{"data":{ },"marks":[],"value":"Repeat the baking process with the remaining dough until all the cookies are baked.","nodeType":"text"}],"nodeType":"paragraph"}],"nodeType":"list-item"},{"data":{ },"content":[{"data":{ },"content":[{"data":{ },"marks":[],"value":"Once cooled, enjoy these irresistible chocolate chip cookies with a tall glass of milk or as a delightful snack any time of the day.","nodeType":"text"}],"nodeType":"paragraph"}],"nodeType":"list-item"}],"nodeType":"ordered-list"},{"data":{ },"content":[{"data":{ },"marks":[],"value":"Note: Feel free to adjust the chocolate chip quantity or add other mix-ins according to your preference. Get ready to savor the deliciousness of these homemade treats!","nodeType":"text"}],"nodeType":"paragraph"}],"nodeType":"document"}',
      },
    coverImage: {
      url: "https://images.ctfassets.net/lnx6p1dpjtms/1WdwEA6UGtlcYwbB3lVOVF/bc7750cd6ae70eab8ad3ce61411159f8/JT-Chocolate-Chip-Cookies-master768.jpg",
      },
    },
    {
      link: "pancake-recipe",
    id: "4fafdbb9-47d7-5978-970e-e8728ae51d4f",
    title: "Classic Pancake Recipe",
    author: "Benedek Nemeth",
    description: {
      description:
    "Whip up everyone's favorite, easy-to-make pancakes in a flash with this mouthwatering recipe by OpenAI's ChatGPT. Perfectly fluffy, lightly sweetened, and topped with your favorite delights, these pancakes will become an instant breakfast sensation.",
      },
    documentBody: {
      raw: '{"data":{ },"content":[{"data":{ },"content":[{"data":{ },"marks":[],"value":"Ingredients:","nodeType":"text"}],"nodeType":"paragraph"},{"data":{ },"content":[{"data":{ },"content":[{"data":{ },"content":[{"data":{ },"marks":[],"value":"1 cup all-purpose flour","nodeType":"text"}],"nodeType":"paragraph"}],"nodeType":"list-item"},{"data":{ },"content":[{"data":{ },"content":[{"data":{ },"marks":[],"value":"2 tablespoons granulated sugar","nodeType":"text"}],"nodeType":"paragraph"}],"nodeType":"list-item"},{"data":{ },"content":[{"data":{ },"content":[{"data":{ },"marks":[],"value":"2 teaspoons baking powder","nodeType":"text"}],"nodeType":"paragraph"}],"nodeType":"list-item"},{"data":{ },"content":[{"data":{ },"content":[{"data":{ },"marks":[],"value":"1/2 teaspoon salt","nodeType":"text"}],"nodeType":"paragraph"}],"nodeType":"list-item"},{"data":{ },"content":[{"data":{ },"content":[{"data":{ },"marks":[],"value":"1 cup milk","nodeType":"text"}],"nodeType":"paragraph"}],"nodeType":"list-item"},{"data":{ },"content":[{"data":{ },"content":[{"data":{ },"marks":[],"value":"1 large egg","nodeType":"text"}],"nodeType":"paragraph"}],"nodeType":"list-item"},{"data":{ },"content":[{"data":{ },"content":[{"data":{ },"marks":[],"value":"2 tablespoons unsalted butter, melted","nodeType":"text"}],"nodeType":"paragraph"}],"nodeType":"list-item"},{"data":{ },"content":[{"data":{ },"content":[{"data":{ },"marks":[],"value":"Optional toppings: maple syrup, fresh fruits, chocolate chips, etc.","nodeType":"text"}],"nodeType":"paragraph"}],"nodeType":"list-item"}],"nodeType":"unordered-list"},{"data":{ },"content":[{"data":{ },"marks":[],"value":"Instructions:","nodeType":"text"}],"nodeType":"paragraph"},{"data":{ },"content":[{"data":{ },"content":[{"data":{ },"content":[{"data":{ },"marks":[],"value":"In a large mixing bowl, whisk together the flour, sugar, baking powder, and salt until well combined.","nodeType":"text"}],"nodeType":"paragraph"}],"nodeType":"list-item"},{"data":{ },"content":[{"data":{ },"content":[{"data":{ },"marks":[],"value":"In a separate bowl, whisk together the milk and egg until thoroughly mixed.","nodeType":"text"}],"nodeType":"paragraph"}],"nodeType":"list-item"},{"data":{ },"content":[{"data":{ },"content":[{"data":{ },"marks":[],"value":"Pour the milk and egg mixture into the dry ingredients. Add the melted butter as well.","nodeType":"text"}],"nodeType":"paragraph"}],"nodeType":"list-item"},{"data":{ },"content":[{"data":{ },"content":[{"data":{ },"marks":[],"value":"Stir the batter gently until just combined. Be careful not to overmix; a few lumps are okay. Let the batter rest for about 5 minutes to allow it to thicken slightly.","nodeType":"text"}],"nodeType":"paragraph"}],"nodeType":"list-item"},{"data":{ },"content":[{"data":{ },"content":[{"data":{ },"marks":[],"value":"Preheat a non-stick skillet or griddle over medium heat. You can lightly grease it with butter or cooking spray if desired.","nodeType":"text"}],"nodeType":"paragraph"}],"nodeType":"list-item"},{"data":{ },"content":[{"data":{ },"content":[{"data":{ },"marks":[],"value":"Once the skillet is hot, ladle about 1/4 cup of batter onto the skillet for each pancake.","nodeType":"text"}],"nodeType":"paragraph"}],"nodeType":"list-item"},{"data":{ },"content":[{"data":{ },"content":[{"data":{ },"marks":[],"value":"Cook until bubbles start to form on the surface of the pancake, then flip it with a spatula. Cook for another 1-2 minutes, or until golden brown.","nodeType":"text"}],"nodeType":"paragraph"}],"nodeType":"list-item"},{"data":{ },"content":[{"data":{ },"content":[{"data":{ },"marks":[],"value":"Repeat the process with the remaining batter, adding more butter or cooking spray to the skillet as needed.","nodeType":"text"}],"nodeType":"paragraph"}],"nodeType":"list-item"},{"data":{ },"content":[{"data":{ },"content":[{"data":{ },"marks":[],"value":"Serve the pancakes warm with your favorite toppings, such as maple syrup, fresh fruits, or chocolate chips.","nodeType":"text"}],"nodeType":"paragraph"}],"nodeType":"list-item"}],"nodeType":"ordered-list"},{"data":{ },"content":[{"data":{ },"marks":[],"value":"Enjoy your homemade pancakes!","nodeType":"text"}],"nodeType":"paragraph"}],"nodeType":"document"}',
      },
    coverImage: {
      url: "https://images.ctfassets.net/lnx6p1dpjtms/7FD9lWzt2Wh6IHSUT3BMSp/73db7730cc1b46d7492cbebcf8dd3250/21014-Good-old-Fashioned-Pancakes-mfs_001-1fa26bcdedc345f182537d95b6cf92d8.jpg",
      },
    },
    ];

    return (
    <Autocomplete
      freeSolo
      disableClearable
      clearOnBlur
      // defaultValue="Search..."
      options={allDocs.map((option) => option.title)}
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

    //TODO: need this https://mui.com/material-ui/react-avatar/#grouped

    export function ResponsiveAppBar({
      activePage,
}: {
      activePage: "Home" | "About" | "content";
}) {
  const pages = [
    {title: "Home", url: "/" },
    {title: "About", url: "/about" },
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
              <Box sx={{ display: { xs: "none", md: "flex" } }}>
                <img src={siteIcon} style={{ height: "5em" }}></img>
              </Box>
              {/* For desktop */}
              <Stack>
                <Typography
                  variant="h5"
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
                  Creative Community Website
                </Typography>
                <Typography
                  variant="subtitle1"
                  textAlign="center"
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
                  Milestone Institute
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
          <Stack
            direction={"row"}
            alignItems={"center"}
            sx={{ justifyContent: { xs: "start", md: "start" } }}
            px={{ xs: 0, md: 3 }}
          >
            <Typography
              variant="h6"
              noWrap
              component="div"
              mr={2}
              sx={{ height: "fit-content" }}
            >
              Operated by:
            </Typography>
            <AvatarGroup>
              <Tooltip title="Creative Writing Community">
                <Avatar
                  sx={{ cursor: "pointer", height: "2.7em", width: "2.7em" }}
                  onClick={() => {
                    navigate("/about");
                  }}
                  alt="Creative Writing Community"
                  src={cwcImg}
                />
              </Tooltip>
              <Tooltip title="Arts Society">
                <Avatar
                  sx={{ cursor: "pointer", height: "2.7em", width: "2.7em" }}
                  onClick={() => {
                    navigate("/about");
                  }}
                  alt="Arts Society"
                  src={artsImg}
                />
              </Tooltip>
              <Tooltip title="History Society">
                <Avatar
                  sx={{ cursor: "pointer", height: "2.7em", width: "2.7em" }}
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
                zIndex: "800",
                position: "absolute",
                cursor: "pointer",
                width: "5em",
                height: "auto",
                marginTop: "0.7em",
                padding: "0.4em",
                backgroundColor: "#fdc72f",
                // marginLeft: "auto",
                right: 0,
                marginRight: "1em",
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
      //https://traviswimer.com/blog/error-hydration-failed-because-the-initial-ui-does-not-match-what-was-rendered-on-the-server/
      // React hydration expects to have the same thing sent from the server as the first render
      // so neither the server nor the first render should render anything for the first render, so it matches!
      export default function LastModif() {
  /* https://benborgers.com/posts/gatsby-last-built */
  const query = useStaticQuery(graphql`
      query {
        site {
        buildTime
      }
    }
      `);

      const buildTime = new Date(query.site.buildTime);
      const buildTimeRelative = relativeDate(buildTime);

      const [initialRenderComplete, setInitialRenderComplete] =
      React.useState(false);
  // This useEffect will only run once, during the first render
  React.useEffect(() => {
        // Updating a state causes a re-render
        setInitialRenderComplete(true);
  }, []);
      // initialRenderComplete will be false on the first render and true on all following renders
      if (!initialRenderComplete) {
    // Returning null will prevent the component from rendering, so the content will simply be missing from
    // the server HTML and also wont render during the first client-side render.
    return null;
  } else {
    return `Last Updated: ${buildTimeRelative}`;
  }
}
      export function Footer() {
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
              <br />
              All logos appearing on this website are the exclusive property of
              Milestone Institute.
              <br />
              <LastModif />
              <br />
              <i>Version: Alpha, Closed testing!</i>
              <br />© 2023 Benedek Nemeth
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
