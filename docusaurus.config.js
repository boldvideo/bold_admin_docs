// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Bold Video Admin - Documentation",
  tagline: "Your Videos. Your Rules.",
  url: "https://docs.boldvideo.io",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/BOLD-favicon.png",
  organizationName: "boldvideo", // Usually your GitHub org/user name.
  projectName: "bold_admin_docs", // Usually your repo name.

  presets: [
    [
      "@docusaurus/preset-classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          editUrl: "https://github.com/facebook/docusaurus/edit/main/website/",
        },
        // blog: {
        //   showReadingTime: true,
        //   // Please change this to your repo.
        //   editUrl:
        //     "https://github.com/facebook/docusaurus/edit/main/website/blog/",
        // },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: "",
        logo: {
          alt: "Bold Video Admin ",
          src: "img/neon-b.svg",
        },
        items: [
          {
            type: "doc",
            docId: "api",
            position: "left",
            label: "API",
          },
          {
            type: "doc",
            docId: "Guides/index",
            position: "left",
            label: "Guides",
          },
          // { to: "/blog", label: "Blog", position: "left" },
          {
            href: "https://github.com/boldvideo/bold_admin_docs",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Docs",
            items: [
              {
                label: "API",
                to: "/docs/api",
              },
              {
                label: "Guides",
                to: "/docs/Guides/index",
              },
            ],
          },
          {
            title: "Community",
            items: [
              // {
              //   label: "Stack Overflow",
              //   href: "https://stackoverflow.com/questions/tagged/docusaurus",
              // },
              // {
              //   label: "Discord",
              //   href: "https://discordapp.com/invite/docusaurus",
              // },
              {
                label: "Twitter",
                href: "https://twitter.com/veryboldvideo",
              },
            ],
          },
          {
            title: "More",
            items: [
              // {
              //   label: "Blog",
              //   to: "/blog",
              // },
              {
                label: "GitHub",
                href: "https://github.com/boldvideo",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Bold Video. Built with Docusaurus.`,
      },
      prism: {
        theme: darkCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
