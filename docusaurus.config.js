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
  {
    from: '/docs/faq',
    to: '/docs/faq/warnings-errors',
  },
  // Blog slugs to filename redirects
  { from: '/blog/announcement', to: '/blog/2023/06/29/Announcing-the-Private-Beta-for-the-DOP' },
  { from: '/blog/announcing-defang-public-beta', to: '/blog/2024/02/12/announcing-defang-public-beta' },
  { from: '/blog/about-my-journey-deploying-my-first-web-application', to: '/blog/2024/03/04/about-my-journey-deploying-my-first-web-application' },
  { from: '/blog/dev-environments', to: '/blog/2024/03/20/dev-environments' },
  { from: '/blog/slackbot-sample', to: '/blog/2024/03/28/slackbot-sample' },
  { from: '/blog/june-2024-product-update', to: '/blog/2024/06/01/june-product-updates' },
  { from: '/blog/july-2024-product-update', to: '/blog/2024/07/01/july-product-updates' },
  { from: '/blog/may-2024-product-update', to: '/blog/2024/05/01/may-product-updates' },
  { from: '/blog/2024-07-31-product-update', to: '/blog/2024/07/31/july-product-updates-2' },
  { from: '/blog/2024-08-31-product-update', to: '/blog/2024/08/30/august-product-updates' },
  { from: '/blog/2024-09-30-product-update', to: '/blog/2024/09/30/september-product-updates' },
  { from: '/blog/hard-lessons-from-hardware', to: '/blog/2024/11/12/hard-lessons-from-hardware' },
  { from: '/blog/2024-11-13-product-update', to: '/blog/2024/11/13/october-product-updates' },
  { from: '/blog/2024-12-04-launch-week', to: '/blog/2024/12/04/launch-week' },
  { from: '/blog/2025-03-14-deploying-defang-with-defang-part-1', to: '/blog/2025/03/14/deploying-defang-with-defang-part-1' },
  { from: '/blog/deploying-defang-with-defang-part-2', to: '/blog/2025/03/26/deploying-defang-with-defang-part-2' },
  { from: '/blog/website-logo-refresh-announcement', to: '/blog/2025/03/12/website-logo-refresh-announcement' },
  { from: '/blog/2025-05-09-product-update', to: '/blog/2025/05/09/april-product-updates' },
];

/** @type {import('@docusaurus/types').DocusaurusConfig} */
const config = {
  // npm install --save @docusaurus/theme-mermaid
  themes: [
    '@docusaurus/theme-mermaid',
  ],
  scripts: [
    {
      src: '/analytics.js',
    }
  ],
  title: 'Defang',
  tagline: 'A radically simpler way to build and deploy production-ready cloud apps',
  favicon: '/img/favicon.ico',
  headTags: [
    {
      tagName: 'link',
      attributes: {
        rel: 'icon',
        href: '/img/tab_icon.svg',
      },
    },
  ],
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
          blogSidebarCount: 'ALL', // Show all posts in sidebar
          blogSidebarTitle: 'All Posts', // Custom title
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
    image: '/img/defang-social-card-2.png',
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
      additionalLanguages: ['diff'],
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
  markdown: {
    mermaid: true,
    format: 'mdx',
    mdx1Compat: { //set to false for Docusaurus v3+ compatibility
      comments: false,
      admonitions: false,
      headingIds: false
    }
  },
};

module.exports = config;
