import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'The ANCHOR',
  tagline: 'Your gateway into Big Fish\'s documentation',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://jenna-ingersoll-bfg.github.io',
  baseUrl: '/docusaurus-to-github-pages/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'jenna-ingersoll-bfg', // Usually your GitHub org/user name.
  projectName: 'docusaurus-to-github-pages', // Usually your repo name.

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  onBrokenLinks: 'ignore',
  onBrokenMarkdownLinks: 'ignore',
  
  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  headTags: [
    {
      tagName: 'link',
      attributes: {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap',
      },
    },
  ],

  themes: ['docusaurus-theme-search-typesense'],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'The ANCHOR',
      logo: {
        alt: 'Big Fish Logo',
        src: 'img/bfg-logo.png',
      },
      items: [
        {
          type: 'doc',
          position: 'right',
          docId: 'developer/dev-welcome',
          label: 'Developer User Guide',
        },
        {
          type: 'doc',
          position: 'right',
          docId: 'producer/prod_welcome',
          label: 'Producer Handbook',
        },
        {
          type: 'doc',
          position: 'right',
          docId: 'bfgsdk/bfgsdk_welcome',
          label: 'APIs & SDKs',
        },
      ],
    },
    colorMode: {
      defaultMode: 'light',
      disableSwitch: true,
      respectPrefersColorScheme: false,
    },
    footer: {
      style: 'light',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Developer User Guide',
              to: '/docs/developer/dev-welcome',
            },
            {
              label: 'Producer Handbook',
              to: '/docs/producer/prod_welcome',
            },
            {
              label: 'BFGSDK Reference',
              to: '/docs/bfgsdk/sdktest',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/docusaurus',
            },
            {
              label: 'Discord',
              href: 'https://discordapp.com/invite/docusaurus',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/docusaurus',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/facebook/docusaurus',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()}`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ['csharp','java'],
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
