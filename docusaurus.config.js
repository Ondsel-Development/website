// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Ondsel',
  tagline: 'Put your designs to work...',
  url: 'https://ondsel.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'ondsel', // Usually your GitHub org/user name.
  projectName: 'website', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
  scripts: [
      {
        src: "https://boards.greenhouse.io/embed/job_board/js?for=ondsel",
      },
  ],
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/ondsel-development/website/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        gtag: {
            trackingID: 'G-37JG1KMTYS',
            anonymizeIP: true,
        },
      }),
    ],
  ],
  plugins: [
    [
      "./plugins/blog-plugin",
      {
        id: "blog",
        routeBasePath: "blog",
        path: "./blog",

      },
    ]
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: '',
        logo: {
          alt: 'Ondsel Logo',
          src: 'img/logo.png',
        },
        items: [
          {
            href: '/',
            label: 'Home',
            position: 'left',
          },
          {
            href: '/about',
            label: 'About Us',
          },
          {
            href: 'https://github.com/Ondsel-Development',
            label: 'GitHub',
            position: 'right',
          },
          {
            href: '/pricing',
            label: 'Pricing',
          },
          {
            href: '/careers',
            label: 'Careers',
          },
          {
            to: 'blog',
            label: 'Blog',
            position: 'left',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Contact Us',
            items: [
              {
                label: 'Twitter',
                href: 'https://twitter.com/ondsel',
              },
              {
                label: 'contact@ondsel.com',
                href: 'mailto:contact@ondsel.com',
              },
              {
                label: 'facebook',
                href: 'https://www.facebook.com/ondsel',
              },
            ],
          },
          {
            title: 'FreeCAD',
            items: [
              {
                label: 'Website',
                href: 'https://freecad.org',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/FreeCAD',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Ondsel, Inc. `,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      }
    }),
};

module.exports = config;
