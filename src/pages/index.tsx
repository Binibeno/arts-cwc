import * as React from "react";
//this project uses MUI
import { Button, IconButton, Link as MUILink } from "@mui/material";

import "../styles/main.css";

import LikeIcon from "@mui/icons-material/ThumbUp";
import LikeIconDisabled from "@mui/icons-material/ThumbUpOutlined";
import BookmarkDisabled from "@mui/icons-material/TurnedInNot";
import BookmarkEnabled from "@mui/icons-material/TurnedIn";
import {
  Box,
  Card,
  CardActions,
  CardContent,
  Container,
  CssBaseline,
  Grid,
} from "@mui/material";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { ThemeProvider } from "@mui/material/styles";

import { ResponsiveAppBar, theme } from "../components/general";
import { Footer } from "../components/Footer";

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

import artsImg from "../images/arts.png"; // Tell webpack this JS file uses this image
// @ts-ignore
import cwcImg from "../images/cwc.png"; // Tell webpack this JS file uses this image
import { Link, graphql } from "gatsby";

// @ts-ignore
function DataCard({
  title,
  author,
  likeCount,
  isBestAward,
  isSpecialAward,
  link,
  description,
  imageUrl,
}: {
  title: string;
  author: string;
  likeCount: number;
  isBestAward: boolean;
  isSpecialAward: boolean;
  link: string;
  imageUrl: string;
  rawDocument: string;
  description: string;
}) {
  return (
    <Card
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        // backgroundColor: "#fcf4df",
        backgroundColor: "white",
        position: "relative",
      }}
    >
      {(isBestAward || isSpecialAward) &&
        <div className="ribbon ribbon-top-right">
          <span
            style={{
              backgroundColor: isBestAward ? "#fdc72f" : "#19adc3",
              color: isBestAward ? "black" : "white",
            }}
          >

            {isBestAward ? "AC Favourite" : "Special Awards"}
          </span>
        </div>
      }
      <CardMedia sx={{ height: 140 }} image={imageUrl} title={title} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.primary">
          By: {author}
        </Typography>
        <Typography variant="body2" color="text.secondary" style={{whiteSpace:"pre-wrap"}}>
          {description}
        </Typography>
      </CardContent>

      <CardActions sx={{ mt: "auto" }}>
        <Button
          href={`/published/${link}`}
          variant="contained"
          size="small"
          sx={{ marginRight: "auto" }}
        >
          Read
        </Button>
        {/* <Typography variant="body2" color="text.secondary">
          {likeCount}
        </Typography>
        <IconButton aria-label="Like">
          {isLiked ? (
            <LikeIcon color={"secondary"} />
          ) : (
            <LikeIconDisabled color={"secondary"} />
          )}
        </IconButton>
        <IconButton aria-label="Bookmark">
          {isFavorite ? (
            <BookmarkEnabled color={"secondary"} />
          ) : (
            <BookmarkDisabled color={"secondary"} />
          )} */}
        {/* </IconButton> */}
        {/*  share iconbutton using navgiator.share */}
        {/* <IconButton aria-label="Share">
            <Share />
          </IconButton> */}
      </CardActions>
    </Card>
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

// TODO: https://www.gatsbyjs.com/plugins/gatsby-source-contentful/#displaying-responsive-image-with-gatsby-plugin-image
// imageloading optimization

// TODO: Most read, or New or Hot

// TODO: Add Reading list in the navbar
// TODO: analytics
type singleArticleType = {
  link: string;
  title: string;
  documentBody: { raw: string };
  author: string;
  creationDate: string;
  coverImage: { url: string };
  description: { description: string };
  isFavoriteAward: boolean;
  isSpecialAward: boolean;
};

import backgroundImg from "../images/backgroundTexture.png"; // Tell webpack this JS file uses this image

const IndexPage = ({ data }: { data: any }) => {
  // query all articles
  let allDocs: singleArticleType[] = data.allContentfulArticle.nodes;

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{
        display: "flex", flexDirection: "column",
        
        
      }} className="homeBg">
        <CssBaseline />

        <Box sx={{ flex: 1}} className="">

          <ResponsiveAppBar activePage="Home" />
          <Box
            component="main"
            sx={{
              minHeight: "80vh",
              p: 3,
              background:

              {
                // xs: "linear-gradient(180deg, rgba(255, 255, 255, 1) 0%, rgba(253, 199, 47, 1) 100%, rgba(252, 244, 223, 1) 100%)",
                md: "transparent"
              },
              
            }}
          >
            <Typography component="p" gutterBottom>
              Welcome to our website! This site serves as a platform to showcase
              the work of young artists who are looking to build their
              reputations and increase their exposure in the community. Here, we
              aim to bring awareness to the talented artists who attend our
              organization by sharing their creations with the world. To learn
              more about our team visit the{" "}
              <MUILink href="/about">about page</MUILink>.
            </Typography>

            <br />

            <Typography
              component={"h2"}
              variant="h5"
              sx={{ fontWeight: "bold" }}
              gutterBottom
            >
              Works:
            </Typography>

            <Typography component={"h3"} variant="h5" gutterBottom>
              2024 Spring works:
            </Typography>

            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "stretch",
                gap: 4,
                flexWrap: { md: "wrap", xs: "wrap" },
              }}
            >
              {Array.from(allDocs).map((doc, index) => (
                <Box
                  sx={{
                    // maxWidth: { md: `${100 / 4}%}`, xs: "unset" },
                    flexBasis: { md: `calc(${100 / 3}% - 22px)`, xs: "unset" },
                  }}
                  key={index}
                >
                  <DataCard
                    rawDocument={doc.documentBody.raw}
                    description={doc.description.description}
                    author={doc.author}
                    imageUrl={doc.coverImage.url}
                    isSpecialAward={doc.isSpecialAward}
                    isBestAward={doc.isFavoriteAward}
                    likeCount={4}
                    title={doc.title}
                    link={doc.link}
                  />
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
            ></Container>
          </Box>
        </Box>
        <div style={{position: "relative"}}>

        <Footer />
        </div>
      </Box>
    </ThemeProvider>
  );
};

//add a head component using the Head API

export default IndexPage;

export function Head() {
  return (
    <>
      <html lang="en" />
      <title>Creative Writing Community</title>
      {/* TODO: indexing disabled */}
      <meta name="robots" content="noindex"></meta>
    </>
  );
}

export const query = graphql`
  query AllDocs {
    allContentfulArticle {
      nodes {
        link
        id
        title
        author
        description {
          description
        }
        documentBody {
          raw
        }
        coverImage {
          url
        }
        isSpecialAward
        isFavoriteAward
      }
    }
  }
`;

//TODO: handle when data is null for preview reasons

// TODO: preload fonts
// https://www.gatsbyjs.com/docs/how-to/styling/using-local-fonts/#preload-your-fonts

// loading indicator
// gradient
// image optimalization

// sliding cards
// fancy search
