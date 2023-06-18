//this project uses MUI

// import css
import "../../styles/main.css";

import { BLOCKS, MARKS } from "@contentful/rich-text-types";
import { Box, CssBaseline } from "@mui/material";
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

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <ResponsiveAppBar />

      <Box component="main" sx={{ p: 3 }}>
        <Typography variant="h3" component="h1" gutterBottom>
          {data.contentfulArticle.title}
        </Typography>
        <Typography variant="body2" component="h1" gutterBottom>
          By: {data.contentfulArticle.author}
        </Typography>
        <Typography variant="body2" component="h1" gutterBottom>
          {data.contentfulArticle.creationDate}
        </Typography>
        <Typography variant="body1" component="h1" gutterBottom>
          {renderRichText(data.contentfulArticle.documentBody as any, {})}
        </Typography>
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
