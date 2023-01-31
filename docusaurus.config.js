// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/vsLight");
const darkCodeTheme = require("prism-react-renderer/themes/vsDark");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Vertex Bump",
  tagline:
    "Imagine a simple customizable multipurpose bot",
  url: "https://discordone.tk",
  baseUrl: "/",
  onBrokenLinks: "warn",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  trailingSlash: false,
  deploymentBranch:"main",
  organizationName: "SBLPBots", // Usually your GitHub org/user name.
  projectName: "docs", // Usually your repo name.
  plugins: ["docusaurus-plugin-sass"],
  presets: [ 
    [
      "classic",
      {
        docs: {
          editUrl: "https://github.com/SBLPBots/docs/tree/main",
          routeBasePath: "/",
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
        },
        theme: {
          customCss: require.resolve("./src/scss/main.scss"),
        },
        gtag: {
          trackingID: 'G-6BYFTKQYJ2',
          anonymizeIP: true,
        },
      },
    ],
  ],
  themeConfig: {
    docs: {
      sidebar: {
        autoCollapseCategories: true,
      },
    },
    blog: {
      showReadingTime: true,
      },
    colorMode: {
      defaultMode: "dark",
      disableSwitch: true,
    },
    navbar: {
      title: "Vertex Bump",
      hideOnScroll: true,
      items: [
        {
          href: '/blog',
          position: 'right',
          label: 'Blog',
        },
        {
          to: '/category/documentation',
          position: 'right',
          label: 'Docs',
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Vertex Bump",
          items: [
            {
              label: "Support",
              href: "https://discord.gg/nEesaZGqPc"
            },
            {
              label: "Invite",
              to: "/invite"
            },
            {
              label: "Terms of Service",
              to: "/tos"
            },
            {
              label: "Privacy Policy",
              to: "/privacy"
            },
          ]
        },
      {
        title: "Other",
        items: [
          {
            label: "Premium",
            href: "/premium"
          },
          {
            label: "Roadmap",
            to: "/roadmap"
          },
        ]
      }
      ]
    },
    prism: {
      defaultLanguage: "TypeScript and JavaScript",
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
  },
};

module.exports = config;
