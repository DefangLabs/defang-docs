// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion
const { themes } = require('prism-react-renderer');
const path = require('path');
const lightCodeTheme = themes.github;
const darkCodeTheme = themes.dracula;

const redirects = require('./redirects.json');

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
        blog: false, // Disable the blog
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
          to: '/docs/intro',
          position: 'left',
          label: 'Docs',
        },
        { to: 'https://defang.io/blog', label: 'Blog', position: 'left' },
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
              to: 'https://defang.io/blog',
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
    algolia: {
      // The application ID provided by Algolia
      appId: 'O3VFCOSSZ6',

      // Public API key: it is safe to commit it
      apiKey: '43fd4ebb5bb9875aa8764793ff9a09ff',

      indexName: 'prod_DOCS',

      // Optional: see doc section below
      contextualSearch: false,

      // Optional: whether the insights feature is enabled or not on Docsearch (`false` by default)
      insights: true,

      // Optional: whether you want to use the new Ask AI feature (undefined by default)
      askAi: 'MUO629LjH0L5',
    },
  },
  plugins: [
    async function shadcnTailwindPlugin() {
      return {
        name: 'defang-tailwind-shadcn',
        configureWebpack() {
          return {
            resolve: {
              alias: {
                '@': path.resolve(__dirname, 'src'),
              },
            },
          };
        },
      };
    },
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
    hooks: {
      onBrokenMarkdownLinks: 'throw',
      onBrokenMarkdownImages: 'throw',
    },
    mdx1Compat: { //set to false for Docusaurus v3+ compatibility
      comments: false,
      admonitions: false,
      headingIds: false
    },
    parseFrontMatter: async (params) => {
      const result = await params.defaultParseFrontMatter(params);
      // result.frontMatter.description =
      //   result.frontMatter.description?.replaceAll('{{MY_VAR}}', 'MY_VALUE');
      return result;
    },
    emoji: true,
    remarkRehypeOptions: {},
    anchors: {
      maintainCase: false,
    },
  },
};

module.exports = config;
