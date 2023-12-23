import * as React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Link,
} from "@mui/material";
import { graphql, useStaticQuery } from "gatsby";
// @ts-ignore
import relativeDate from "tiny-relative-date";
//https://traviswimer.com/blog/error-hydration-failed-because-the-initial-ui-does-not-match-what-was-rendered-on-the-server/
// React hydration expects to have the same thing sent from the server as the first render
// so neither the server nor the first render should render anything for the first render, so it matches!
export default function LastModif() {
  /* https://benborgers.com/posts/gatsby-last-built */
  const query = useStaticQuery(graphql`
    query BuildDate {
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
    <Box sx={{ }}>
      <AppBar
        position="static"
        sx={{ padding: "3px 0", backgroundColor: "#fcf4df" }}
        component={"div"}
      >
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
            The Milestone logo appearing on this website is the exclusive
            property of Milestone Institute.
            <br />
            <LastModif />
            <br />
            <i>Version: Beta, Closed testing!</i>
            <br />© 2024 Benedek Nemeth
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
