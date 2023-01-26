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
  baseUrl: "/docs/",
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
          routeBasePath: "/docs/",
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
      title: "Vertex Bump",
      hideOnScroll: true,
      items: [
        {
          href: 'https://discordapp.com/api/oauth2/authorize?client_id=699101991372193813&permissions=388289&scope=bot',
          position: 'right',
          label: 'Invite',
        },
        {
          href: 'https://discord.gg/nEesaZGqPc',
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
          title: "Vertex Bump",
          items: [
            {
              label: "Support",
              href: "https://discord.gg/nEesaZGqPc"
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
