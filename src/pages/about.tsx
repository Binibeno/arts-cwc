import * as React from "react";
//this project uses MUI
import { Grid, Link as MUILink } from "@mui/material";

// import css
import "../styles/main.css";

import { Box, CssBaseline } from "@mui/material";
import Typography from "@mui/material/Typography";
import { ThemeProvider } from "@mui/material/styles";
import { Footer } from "../components/Footer";
import { ResponsiveAppBar, theme } from "../components/general";
import artsImg from "../images/arts.png"; // Tell webpack this JS file uses this image
import cwcImg from "../images/cwc.png"; // Tell webpack this JS file uses this image

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
      <Typography variant="h4" component="h2" gutterBottom>
        <span style={{ color: "#f5c73e", fontFamily: "MyUnderwood" }}>
          Creative writing
        </span>{" "}
        <span style={{ fontFamily: "serif" }}> & </span>
        <span style={{ color: "#ef0f94", fontFamily: "cursive" }}> Arts </span>
        <span style={{ fontFamily: "serif" }}>Publications</span>
      </Typography>

      <Grid container justifyContent={"space-evenly"}>
        <Grid item xs={2.4}>
          <CenterImg>
            <Box
              sx={{ borderRadius: 1, height: size }}
              src={cwcImg}
              component={"img"}
              draggable={false}
            ></Box>
          </CenterImg>
        </Grid>

        <Grid item xs={2.4}>
          <CenterImg>
            <Box
              sx={{ borderRadius: 1, height: size }}
              src={artsImg}
              component={"img"}
              draggable={false}
            ></Box>
          </CenterImg>
        </Grid>
      </Grid>
      <br />
    </>
  );
}
const About = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <ResponsiveAppBar activePage="About" />
      <Box
        component="main"
        sx={{ p: 3, display: "flex", justifyContent: "center" }}
      >
        <Box sx={{ maxWidth: "780px" }}>
          <Intro />
          <Typography variant="body1" component="p" gutterBottom>
            This site serves as a platform to showcase the work of young artists
            who are looking to build their reputations and increase their
            exposure in the community. Here, we aim to bring awareness to the
            talented artists who attend our organization by sharing their
            creations with the world. We hope that you enjoy the work of our
            students and it inspires you to create something of your own.
          </Typography>

          <Typography variant="body1" component="p" gutterBottom>
            We made this page in collaboration with the Milestone Arts Society
            and the Creative Writing Community.
          </Typography>

          <Typography variant="body1" component="span">
            Special thanks to the following people for their contributions to
            this project:
            <ul>
              <li>Niki Fonth: President of the Creative Writing Community</li>
              <li>
                Marcell Borbély: Vice president of the Create Writing Community,
                President of the History Society
              </li>
              <li>Benedek Németh: Milestone student, Developer of the site</li>
            </ul>
          </Typography>
          <br />
          <Typography variant="body1" component="span">
            With any questions, comments, or concerns, you can reach us at:
            <ul>
              <li>
                <MUILink href="mailto:contact@binibeno.hu">
                  Benedek's email
                </MUILink>
              </li>
              <li>
                <MUILink href="https://www.instagram.com/binibeno/">
                  Benedek's Instagram
                </MUILink>
              </li>
              <li>
                <MUILink href="https://binibeno.hu/en?utm_source=milestone-cwc-arts">
                  Benedek's website
                </MUILink>
              </li>
              <li>
                <MUILink href="https://www.instagram.com/ms.arts.soc/?hl=en">
                  Milestone Arts Society Instagram
                </MUILink>
              </li>
              <li>
                <MUILink href="https://www.facebook.com/groups/6534419263258888">
                  Milestone Creative Writing Community Facebook
                </MUILink>
              </li>
            </ul>
          </Typography>
        </Box>
      </Box>
      <Footer />
    </ThemeProvider>
  );
};

export default About;

// add gastby head api

export function Head() {
  return (
    <>
      <html lang="en" />
      <title>About</title>
      {/* TODO: indexing disabled */}
      <meta name="robots" content="noindex"></meta>
    </>
  );
}
