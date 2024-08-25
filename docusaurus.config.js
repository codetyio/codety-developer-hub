// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Codety Developer Hub',
  tagline: 'Adopt code quality standards for engineering teams',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'http://docs.codety.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'codetyio', // Usually your GitHub org/user name.
  projectName: 'codety-developer-hub', // Usually your repo name.
  trailingSlash: false,
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

plugins: [
    [
      '@docusaurus/plugin-content-blog',
      {
        /**
         * Required for any multi-instance plugin
         */
        id: 'codety-blog',
        /**
         * URL route for the blog section of your site.
         * *DO NOT* include a trailing slash.
         */
        routeBasePath: 'codety-blog',
        /**
         * Path to data on filesystem relative to site dir.
         */
        path: './codety-blog',
      },
    ],
  ],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          routeBasePath: '/',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/codetyio/codety-developer-hub/tree/main/',
        },
        blog: {
          showReadingTime: false,
          path: 'release-notes',
          routeBasePath: 'release-notes',
          blogSidebarCount: 'ALL',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
//          editUrl: 'https://github.com/codetyio/codety-developer-hub',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'Codety Developer Hub',
        logo: {
          alt: 'Codety Developer Hub Logo',
          src: 'img/logo.png',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Documentation',
          },
          {to: '/release-notes', label: 'Release Notes', position: 'left'},
//          {to: '/codety-blog', label: 'Blog', position: 'left'},
          {
            href: 'https://codety.io',
            label: 'Codety Website',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [

          {
            title: 'Links',
            items: [
              {
                label: 'Codety Website',
                href: 'https://codety.io',
              },
              {
                label: 'Codety Docker Image',
                href: 'https://hub.docker.com/r/codetyio/codety',
              },

            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Release Notes',
                to: '/release-notes',
              },

            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Codety Inc.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
