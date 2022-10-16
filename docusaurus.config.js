// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/vsLight");
const darkCodeTheme = require("prism-react-renderer/themes/vsDark");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Corrupt Bump",
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
  projectName: "sblpdocs", // Usually your repo name.
  plugins: ["docusaurus-plugin-sass"],
  presets: [ 
    [
      "classic",
      {
        docs: {
          editUrl: "https://github.com/SBLPBots/sblpdocs/tree/main",
          routeBasePath: "/",
          showLastUpdateAuthor: false,
          showLastUpdateTime: true,
        },
        theme: {
          customCss: require.resolve("./src/scss/main.scss"),
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
      title: "Corrupt Bump",
      hideOnScroll: true,
      items: [
        {
          href: 'https://discord.com/api/oauth2/authorize?client_id=999132132754600016&permissions=1497736146166&scope=bot%20applications.commands&redirect_uri=https://servermanagerbot.ml/docs&response_type=code',
          position: 'right',
          label: 'Invite',
        },
        {
          href: 'https://discord.gg/6bCKvP24kb',
          position: 'right',
          label: 'Support',
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
          title: "Corrupt Bump",
          items: [
            {
              label: "Support",
              href: "https://discord.gg/6bCKvP24kb"
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
            label: "GitHub",
            href: "https://github.com/SBLPBots/sblpdocs"
          },
          {
            label: "Roadmap",
            to: "/roadmap"
          }
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
