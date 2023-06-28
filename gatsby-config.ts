import type { GatsbyConfig } from "gatsby";
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

console.log(`Loading .env.${process.env.NODE_ENV}`); // remove
console.log(`Contentful config loaded:`, {
  spaceId: `lnx6p1dpjtms`,
  // accessToken: process.env.CONTENTFUL_ACCESS_TOKEN, // NOT INCLUDED FOR SECURITY
  host: process.env.CONTENTFUL_HOST,
}); // remove

const pathPrefix = "/arts-cwc";

const config: GatsbyConfig = {
  pathPrefix: pathPrefix,
  siteMetadata: {
    title: `Milestone Publications`,
    siteUrl: `https://binibeno.github.io`,
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    `gatsby-plugin-gatsby-cloud`,
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `lnx6p1dpjtms`,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
        host: process.env.CONTENTFUL_HOST,
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /assets/, // See below to configure properly
        },
      },
    },
    {
      resolve: "gatsby-plugin-web-font-loader",
      options: {
        custom: {
          families: ["MyUnderwood", "MyUnderwood"],
          urls: [`${pathPrefix}/fonts/typewriter.css`, `/fonts/typewriter.css`],
        },
      },
    },
    "gatsby-plugin-image",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
      },
    },
    "gatsby-plugin-mdx",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
  ],
};

export default config;
