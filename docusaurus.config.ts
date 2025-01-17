import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";
import tailwindPlugin from "./plugins/tailwind.js";

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  plugins: [
    "docusaurus-plugin-zooming",
    tailwindPlugin,
    ["@docusaurus/plugin-ideal-image", {
      quality: 70,
      max: 1030, // max resized image's size.
      min: 640, // min resized image's size. if original is lower, use that size.
      steps: 2, // the max number of images generated between min and max (inclusive)
      disableInDev: false,
    }],
  ],
  title: "Strohballenhaus Rössing",
  tagline: "Alles zum Strohballenhaus der Baufamilie Keller aus Rössing",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://strohballenhaus.rössing.de/",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "levino", // Usually your GitHub org/user name.
  projectName: "strohballenhaus-roessing", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "de",
    locales: ["de"],
  },

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
          routeBasePath: "/information",
          path: "./information",
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        },
        blog: {
          routeBasePath: "/berichte",
          path: "./berichte",
          showReadingTime: true,
          feedOptions: {
            type: ["rss", "atom"],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/levino/strohballenhaus-roessing/tree/main/docs/",
          // Useful options to enforce blogging best practices
          onInlineTags: "warn",
          onInlineAuthors: "warn",
          onUntruncatedBlogPosts: "warn",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: "img/logo.webp",
    navbar: {
      title: "Strohballenhaus Rössing",
      logo: {
        alt: "My Site Logo",
        src: "img/logo.webp",
      },
      items: [
        {
          type: "docSidebar",
          sidebarId: "tutorialSidebar",
          position: "left",
          label: "Information",
        },
        { to: "/berichte", label: "Berichte", position: "left" },
        {
          label: "Partner",
          position: "left",
          to: "/partners",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Mehr",
          items: [
            {
              label: "Impressum",
              to: "/imprint",
            },
            {
              label: "Quellcode",
              href: "https://github.com/levino/strohballenhaus-roessing",
            },
          ],
        },
      ],
      copyright: `Copyright © ${
        new Date().getFullYear()
      } Levin Keller. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
