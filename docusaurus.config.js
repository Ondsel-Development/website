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
      // {
      //   src: 'https://cse.google.com/cse.js?cx=41a4acc6630294506',
      //   async: false,
      //   defer: false,
      // },
  ],
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars-docs.js'),
          path: 'docs',
          routeBasePath: 'docs',
          //editUrl:
            //'https://github.com/ondsel-development/website/tree/main/packages/create-docusaurus/templates/shared/',
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
    ],[
      "@docusaurus/plugin-content-docs",
      {
        id: 'handbook',
        path: 'handbook',
        routeBasePath: 'handbook',
        sidebarPath: './sidebars-handbook.js',
      }
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
            href: 'https://lens.ondsel.com',
            label: 'Lens',
            position: 'right',
          },
          {
            to: '/',
            label: 'Home',
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
            to: 'support',
            label: 'Support',
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
                to: 'handbook'
              },
              {
                label: 'Contact',
                href: '/contact',
              },
            ],
          },
          {
            type: 'html',
            position: 'right',
            value: '<form action="https://google.com/search" method="get"><input type="hidden" name="sitesearch" value="ondsel.com" /><input id="searchInput" placeholder="Search" type="search" results name="q" /><button id="searchSubmit" type="submit"><svg viewBox="0 0 16 16" height="16" width="16" style="vertical-align: middle;"><g transform="translate(0 -1036.4)"><ellipse style="color-rendering:auto;shape-rendering:auto;stroke-width:2;fill:none;" rx="5.0368" ry="5.0368" cy="1042.4" cx="9.9632"></ellipse><path style="stroke-width:3;fill:none" d="m1.0607 1051.3 5.114-5.114"></path></g></svg></button></form>',
          },
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
            title: 'GitHub',
            items: [
              {
                label: 'Ondsel ES',
                href: 'https://github.com/Ondsel-Development/FreeCAD',
              },
              {
                label: 'Ondsel Solver',
                href: 'https://github.com/Ondsel-Development/OndselSolver',
              },
              {
                label: 'Lens add-on',
                href: 'https://github.com/Ondsel-Development/Ondsel-Lens',
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
