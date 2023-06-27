//this project uses MUI

// import css
import "../../styles/main.css";

import { BLOCKS, MARKS } from "@contentful/rich-text-types";
import { Avatar, Box, Chip, Container, CssBaseline } from "@mui/material";
import Typography from "@mui/material/Typography";
import { ThemeProvider } from "@mui/material/styles";
import { graphql } from "gatsby";
import { renderRichText } from "gatsby-source-contentful/rich-text";
import React from "react";
import { Footer, ResponsiveAppBar, theme } from "../../components/general";
export type ArticleType = {
  contentfulArticle: {
    link: string;
    title: string;
    documentBody: { raw: string };
    author: string;
    creationDate: string;
  };
};
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";

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
const Text = ({ children }: any) => <p className="align-center">{children}</p>;
const options = {
  renderMark: {
    [MARKS.BOLD]: (text: string) => <Bold>{text}</Bold>,
  },
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node: any, children: any) => <Text>{children}</Text>,
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
const Page = ({ data }: { data: ArticleType }) => {
  const rawString = JSON.stringify(data.contentfulArticle.documentBody.raw);
  const split = data.contentfulArticle.author.split(" ");

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <ResponsiveAppBar />

      <Box
        component="main"
        sx={{ p: 3, display: "flex", justifyContent: "center" }}
      >
        <Box sx={{ maxWidth: "780px" }}>
          <Typography variant="body2" component="p" gutterBottom>
            All works / 2023 Summer term / {data.contentfulArticle.title}
          </Typography>
          <Typography variant="h3" component="h1" gutterBottom>
            {data.contentfulArticle.title}
          </Typography>

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
          <Chip
            sx={{ ml: 1 }}
            icon={<CalendarMonthIcon />}
            label={data.contentfulArticle.creationDate}
          />

          <Typography variant="body1" component="h1" gutterBottom>
            {renderRichText(data.contentfulArticle.documentBody as any, {})}
          </Typography>
        </Box>
      </Box>

      <Footer />
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
      creationDate(formatString: "MMMM Do, YYYY")
    }
  }
`;

export default Page;
