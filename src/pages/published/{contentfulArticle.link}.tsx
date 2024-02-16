//this project uses MUI

// import css
import "../../styles/main.css";

import { BLOCKS, MARKS } from "@contentful/rich-text-types";
import {
  Avatar,
  AvatarGroup,
  Box,
  Chip,
  Container,
  CssBaseline,
  Stack,
} from "@mui/material";
import Typography from "@mui/material/Typography";
import { ThemeProvider } from "@mui/material/styles";
import { graphql } from "gatsby";
import { renderRichText } from "gatsby-source-contentful/rich-text";
import React from "react";
import { ResponsiveAppBar, theme } from "../../components/general";
import { Footer } from "../../components/Footer";
export type ArticleType = {
  contentfulArticle: {
    link: string;
    title: string;
    documentBody: { raw: string };
    author: string;
    creationDate: string;
    isFavoriteAward: boolean;
    isSpecialAward: boolean;

  };
};
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";

import backgroundTexture from "../../images/backgroundTexture.png"; // Tell webpack this JS file uses this image

function stringToColor(string: string) {
  let hash = 0;
  let i;

  /* eslint-disable no-bitwise */
  for (i = 0; i < string.length; i += 1) {
    hash = string.charCodeAt(i) + ((hash << 5) - hash);
  }

  let color = "#";

  for (i = 0; i < 3; i += 1) {
    const value = (hash >> (i * 8)) & 0xff;
    color += `00${value.toString(16)}`.slice(-2);
  }
  /* eslint-enable no-bitwise */

  return color;
}

function stringAvatar(name: string) {
  const split = name.split(" ");
  console.log(split);
  return {
    sx: {
      bgcolor: stringToColor(name),
    },
    children:
      split.length == 1 ? `${split[0][0]}` : `${split[0][0]}${split[1][0]}`,
  };
}

const Bold = ({ children }: any) => <span className="bold">{children}</span>;

const Page = ({ data }: { data: ArticleType }) => {
  const split = data.contentfulArticle.author.split(" ");

  //! warning weird edge case
  // look this is a terrible soultion
  // TODO: add a property into contentful to enable left algined text
  const Text = ({ children }: any) => <p className={"articleTextItem" + (data.contentfulArticle.link == "a-fishermans-tale" ? "alignLeft" : "")}>{children}</p>;
  const options = {
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node: any, children: any) => (
        <Text style={{
        }}>{children}</Text>
      ),
      [BLOCKS.EMBEDDED_ASSET]: (node: any) => {
        return (
          <>
            <h2>Embedded Asset</h2>
            <pre>
              <code>{JSON.stringify(node, null, 2)}</code>
            </pre>
          </>
        );
      },
    },
  };
  return (
    <ThemeProvider theme={theme}>
      <div className="aboutBg articleBg">

        <CssBaseline />
        <ResponsiveAppBar activePage="content" />

        <Box
          component="main"
          sx={{ p: 3, display: "flex", justifyContent: "center" }}
        >
          <Box sx={{ maxWidth: "780px" }}>
            {/* TODO:use mui breadcrumps */}
            <Typography variant="body2" component="p" gutterBottom>
              All works / 2024 Spring term / {data.contentfulArticle.title}
            </Typography>
            <Typography variant="h6" component="h1" style={{
              backgroundColor: "#19adc3",
              borderRadius: "5px",
              width: "fit-content",
              paddingRight: "5px",
            }}
              
            >
              {data.contentfulArticle.isSpecialAward ? "🏆 Special Award" : ""}
            </Typography>
            <Typography variant="h6" component="h1" style={{
              backgroundColor: "#fdc72f",
              borderRadius: "5px",
              width: "fit-content",
              paddingRight: "5px",

            }} >
              {data.contentfulArticle.isFavoriteAward ? "🏆 Adult Committe's favourite" : ""}
            </Typography>
            <Typography variant="h3" component="h1" >
              {data.contentfulArticle.title}
            </Typography>
            <Typography fontSize={"2rem"} variant="h4" component="h2" gutterBottom>
              By: {data.contentfulArticle.author}
            </Typography>

            <Typography variant="body1" component="h1" gutterBottom className="articleText">
              {renderRichText(data.contentfulArticle.documentBody as any, options)}
            </Typography>
          
            <Stack
              sx={{ ml: 1, my: 2 }}
              direction="row"
              gap={1}
              // allow wrap
              flexWrap="wrap"
              // center items
              justifyContent="center"
            >
              <Chip
                avatar={
                  <Avatar>
                    {split.length == 1
                      ? `${split[0][0]}`
                      : `${split[0][0]}${split[1][0]}`}
                  </Avatar>
                }
                label={data.contentfulArticle.author}
              />
              {data.contentfulArticle.creationDate && (
                <Chip
                  icon={<CalendarMonthIcon />}
                  label={data.contentfulArticle.creationDate}
                />)}
              {data.contentfulArticle.isFavoriteAward && (
                <Chip
                  icon={<EmojiEventsIcon />}
                  label={"Adult Committe's favourite"}
                />)}
              {data.contentfulArticle.isSpecialAward && (
                <Chip
                  icon={<EmojiEventsIcon />}
                  label={"Special Award"}
                />)}
            </Stack>

          </Box>
        </Box>
        {/* <Box
          sx={{
            backgroundImage: `url(${backgroundTexture})`,
            backgroundAttachment: "scroll",
            height: "200vh",
            width: "130px",
            position: "fixed",
            top: 0,
            right: 24,
            zIndex: -1,
            display: { xs: "none", md: "block" },
          }}
        >
        </Box> */}


        <div style={{ position: "relative" }}>
          <Footer />
        </div>
      </div>

    </ThemeProvider>
  );
};

export const data = graphql`
  query pageQuery($id: String) {
    contentfulArticle(id: { eq: $id }) {
      link
      title
      author
      documentBody {
        raw
      }
      isFavoriteAward
      isSpecialAward
      creationDate(formatString: "MMMM Do, YYYY")
    }
  }
`;

export function Head({ data }: { data: ArticleType }) {
  return (
    <>
      <html lang="en" />
      <title>
        {data.contentfulArticle.title} - {data.contentfulArticle.author}
      </title>
      <meta name="robots" content="noindex"></meta>
    </>
  );
}

export default Page;
