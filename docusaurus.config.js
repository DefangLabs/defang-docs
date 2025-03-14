// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion
const { themes } = require('prism-react-renderer');
const lightCodeTheme = themes.github;
const darkCodeTheme = themes.dracula;

const redirects = [
  {
    from: '/docs/samples',
    to: 'https://defang.io/samples',
  },
];

/** @type {import('@docusaurus/types').DocusaurusConfig} */
const config = {
  scripts: [
    {
      src: '/analytics.js',
    }
  ],
  title: 'Defang',
  tagline: 'A radically simpler way to build and deploy production-ready cloud apps',
  favicon: 'https://www.google.com/s2/favicons?domain=defang.io',

  // Set the production URL of your site here
  url: 'https://docs.defang.io/',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'DefangLabs', // Usually your GitHub org/user name.
  projectName: 'defang-docs', // Usually your repo name.
  trailingSlash: false,

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'throw',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  // @ts-ignore
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/DefangLabs/defang-docs/tree/main/',
        },
        blog: {
          showReadingTime: true,
          // Remove the editUrl property for the blog section
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],

  themeConfig: {
    image: '/img/defang-social-card.png',
    navbar: {
      title: 'Defang Home',
      logo: {
        alt: 'Defang Logo',
        src: '/img/defang-logo.svg',
        href: 'https://defang.io/',
      },
      items: [
        {
          to: '/docs/Intro',
          position: 'left',
          label: 'Docs',
        },
        { to: '/blog', label: 'Blog', position: 'left' },
        {
          href: '/docs/getting-started',
          label: 'Get Started',
          position: 'right',
          className: 'navbar__item-get_started'
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Sections',
          items: [
            {
              label: 'Tutorials',
              to: '/docs/category/tutorials',
            },
            {
              label: 'Providers',
              to: '/docs/category/providers',
            },
            {
              label: 'CLI Reference',
              to: '/docs/category/cli',
            },
            {
              label: 'Concepts',
              to: '/docs/category/concepts',
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
              label: 'Ask Defang',
              href: '/docs/ask',
            },
            {
              label: 'Samples',
              href: 'https://defang.io/samples',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/DefangLabs',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Discord',
              href: 'https://s.defang.io/discord',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/DefangLabs',
            },
            {
              label: 'LinkedIn',
              href: 'https://www.linkedin.com/company/defang/',
            },
            {
              label: 'Youtube',
              href: 'https://www.youtube.com/@DefangLabs',
            }
          ],
        },
      ],
      // Existing footer configuration...
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
  },
  plugins: [
    require.resolve('docusaurus-lunr-search'),
    [
      '@docusaurus/plugin-client-redirects',
      {
        redirects,
      },
    ],
  ],
};

module.exports = config;
