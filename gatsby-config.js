require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

const contentfulConfig = {
  spaceId: process.env.CONTENTFUL_SPACE_ID,
  accessToken:
    process.env.CONTENTFUL_ACCESS_TOKEN ||
    process.env.CONTENTFUL_DELIVERY_TOKEN,
};

// If you want to use the preview API please define
// CONTENTFUL_HOST and CONTENTFUL_PREVIEW_ACCESS_TOKEN in your
// environment config.
//
// CONTENTFUL_HOST should map to `preview.contentful.com`
// CONTENTFUL_PREVIEW_ACCESS_TOKEN should map to your
// Content Preview API token
//
// For more information around the Preview API check out the documentation at
// https://www.contentful.com/developers/docs/references/content-preview-api/#/reference/spaces/space/get-a-space/console/js
//
// To change back to the normal CDA, remove the CONTENTFUL_HOST variable from your environment.
if (process.env.CONTENTFUL_HOST) {
  contentfulConfig.host = process.env.CONTENTFUL_HOST;
  contentfulConfig.accessToken = process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN;
}

const { spaceId, accessToken } = contentfulConfig;

if (!spaceId || !accessToken) {
  throw new Error(
    "Contentful spaceId and the access token need to be provided."
  );
}

module.exports = {
  siteMetadata: {
    title: "How Busy Is...",
  },
  pathPrefix: "/gatsby-contentful-starter",
  plugins: [
    "gatsby-transformer-remark",
    "gatsby-transformer-sharp",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sharp",
    `gatsby-plugin-image`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        start_url: `/`,
        icon: `src/images/favicon.png`,
      },
    },
    {
      resolve: "gatsby-source-contentful",
      options: contentfulConfig,
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /assets/,
        },
      },
    },
    // following for calling fetch on
    // {
    //   resolve: `gatsby-source-graphql`,
    //   options: {
    //     typeName: `GitHub`,
    //     fieldName: `github`,
    //     url: `https://randomuser.me/api/`,
    // headers: {
    //   Authorization: `Bearer ${process.env.GATSBY_GITHUB_TOKEN}`,
    // },
    //   },
    // },
    // {
    //   resolve: `gatsby-source-twitter`,
    //   options: {
    //     credentials: {
    //       consumer_key: "51DGcuFARdKw4hBX7gNBdWOmX",
    //       consumer_secret: "AqqZ568zzCfrpgOPfJc24lbcbA01Yq7eg0kQy7hfWlhae4QY5n",
    //       bearer_token:
    //         "AAAAAAAAAAAAAAAAAAAAAEeJRQEAAAAAQGzRFzSjS6uU10%2BunZluylfg%2Fg8%3DdERjxKinDIcZmr59WDxUXQcocpl37ZkzL0elQ91UvN9B1G8tBm",
    //     },
    //     queries: {
    //       wesbos: {
    //         endpoint: "search/tweets",
    //         params: {
    //           q: "@wesbos",
    //           tweet_mode: "extended",
    //         },
    //       },
    //     },
    //   },
    // },

    {
      resolve: "gatsby-plugin-react-leaflet",
      options: {
        linkStyles: true, // (default: true) Enable/disable loading stylesheets via CDN
      },
    },
  ],
};
