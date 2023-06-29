// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Defang',
  tagline: 'A radically simpler way to build and deploy production-ready cloud apps',
  favicon: 'http://www.google.com/s2/favicons?domain=defang.io',

  // Set the production URL of your site here
  url: 'http://docs.defang.io/',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'defang-io', // Usually your GitHub org/user name.
  projectName: 'defang-docs', // Usually your repo name.
  deploymentBranch: 'main',
  trailingSlash: false,

  onBrokenLinks: 'ignore',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.

        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig: {
  image: 'img/docusaurus-social-card.jpg',
  navbar: {
    title: 'Defang Home',
    logo: {
      alt: 'My Site Logo',
      src: 'https://defang.io/images/DEFANG-1_4x-no-text-256.svg',
    },
    items: [
      {
        type: 'docSidebar',
        sidebarId: 'tutorialSidebar',
        position: 'left',
        label: 'Docs',
        to: '/docs', // Update the "Docs" button to point to /docs
      },
      { to: '/blog', label: 'Blog', position: 'left' },
      {
        href: 'https://github.com/defang-io/defang-docs',
        label: 'GitHub',
        position: 'right',
      },
    ],
  },
  footer: {
    // Existing footer configuration...
  },
  prism: {
    theme: lightCodeTheme,
    darkTheme: darkCodeTheme,
  },
  redirects: [
    {
      to: '/docs/intro',
      from: '/docs(/)?$',
    },
  ],
},
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Defang Docs',
              to: '/docs',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'LinkedIn',
              href: 'https://www.linkedin.com/company/defang/',
            },
            {
              label: 'Slack',
              href: 'https://join.slack.com/share/enQtNTQxMTM2ODU2MTAxNS1jYjc0ZDc1NjAyZDQ1NDIxYzFiZDIzMDU4Y2Y0ZWI0OWZiMGM0NGEzMDdlY2YzMzViYjkwZGMzNTcwOTYwYzE2',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/DefangLabs',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: '/blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/defang-io',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Defang All Rights Reserved.`,
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
    redirects: [
      {
        to: '/docs/intro',
        from: '/docs(/)?$',
      },
    ],
  },
};

module.exports = config;
