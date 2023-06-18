import * as React from "react";
//this project uses MUI
import { Link as MUILink } from "@mui/material";

// import css
import "../styles/main.css";

import {
  Box,
  CssBaseline
} from "@mui/material";
import Typography from "@mui/material/Typography";
import { ThemeProvider } from "@mui/material/styles";
import { Footer, ResponsiveAppBar, theme } from ".";
const About = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <ResponsiveAppBar />
      <Box component="main" sx={{ p: 3 }}>
        <Typography variant="body1" component="p" gutterBottom>
          This site serves as a platform to showcase the work of young artists
          who are looking to build their reputations and increase their exposure
          in the community. Here, we aim to bring awareness to the talented
          artists who attend our organization by sharing their creations with
          the world. We hope that you enjoy the work of our students and it
          inspires you to create something of your own.
        </Typography>

        <Typography variant="body1" component="p" gutterBottom>
          We made this page in collaboration with the Milestone Arts Society and
          the Creative Writing Community.
        </Typography>

        <Typography variant="body1" component="p" gutterBottom>
          Special thanks to the following people for their contributions to this
          project:
          <ul>
            <li>
              Niki Fonth: President of the Creative Writing Community society
            </li>
            <li>Marcell Borbély: President of the History Society</li>
            <li>Benedek Németh: Milestone student, Website developer</li>
          </ul>
        </Typography>
        <Typography variant="body1" component="p" gutterBottom>
          With any questions, comments, or concerns, please contact us at
          {/* list of links */}
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
              <MUILink href="https://www.instagram.com/history_society_ms/?hl=en">
                History Society Instagram
              </MUILink>
            </li>
          </ul>
        </Typography>
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
