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
  trailingSlash: true,
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Ondsel-Development', // Usually your GitHub org/user name.
  projectName: 'website', // Usually your repo name.
  deploymentBranch: 'gh-pages',

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
      {
        src: '/js/get_os.js',
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
          // {
          //   href: '/',
          //   label: 'Home',
          //   position: 'left',
          // },
          // {
          //   href: '/about',
          //   label: 'About Us',
          // },
          {
            href: 'https://github.com/Ondsel-Development',
            label: 'GitHub',
            position: 'right',
          },
          {
            to: '/',
            label: 'Home',
          },
          {
            to: 'download',
            label: 'Download',
          },
          {
            to: 'pricing',
            label: 'Pricing',
          },
          {
            to: 'blog',
            label: 'Blog',
          },
          {
            type: 'dropdown',
            label: 'Company',
            items: [
              {
                label: 'About Us',
                href: '/about',
              },
              {
                label: 'Team',
                to: 'team',
              },
              {
                label: 'Careers',
                to: 'careers'
              },
              {
                label: 'Handbook',
                to: 'docs/handbook'
              },
              {
                label: 'Contact',
                href: '/contact',
              },
            ],
          }
          // {
          //   to: 'blog',
          //   label: 'Blog',
          //   position: 'left',
          // },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Contact Us',
            items: [
              {
                label: 'contact@ondsel.com',
                href: 'mailto:contact@ondsel.com',
              },
              {
                label: 'facebook',
                href: 'https://www.facebook.com/ondsel',
              },
              {
                html: '<a href="https://x.com/ondsel" target="_blank" rel="noopener noreferrer" class="footer__link-item" title="Follow us on X"><svg viewBox="0 0 24 24" width="18px" class=""><g><path fill="white" d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path></g></svg><svg width="13.5" height="13.5" aria-hidden="true" viewBox="0 0 24 24" class="iconExternalLink_node_modules-@docusaurus-theme-classic-lib-theme-Icon-ExternalLink-styles-module" style="vertical-align: text-top;"><path fill="currentColor" d="M21 13v10h-21v-19h12v2h-10v15h17v-8h2zm3-12h-10.988l4.035 4-6.977 7.07 2.828 2.828 6.977-7.07 4.125 4.172v-11z"></path></svg></a>',
              },
            ],
          },
          {
            title: 'Legal',
            items: [
              {
                label: 'Privacy Policy',
                to: 'privacy',
              },
              {
                label: 'Terms of Service',
                to: 'tos',
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
        copyright: `Copyright © ${new Date().getFullYear()} Ondsel, Inc.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      }
    }),
};

module.exports = config;
