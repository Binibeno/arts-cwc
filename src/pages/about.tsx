import * as React from "react";
import { Link, type HeadFC, type PageProps, navigate } from "gatsby";
//this project uses MUI
import { Button, IconButton, Link as MUILink, TextField } from "@mui/material";

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
import LikeIconDisabled from "@mui/icons-material/ThumbUpOutlined";
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
import { theme, ResponsiveAppBar } from ".";
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
