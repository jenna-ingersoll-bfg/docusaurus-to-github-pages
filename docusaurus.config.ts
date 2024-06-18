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
          path: 'docs',
          routeBasePath: 'docs',
          sidebarPath: './sidebarsDocs.ts',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themes: ['docusaurus-theme-search-typesense'],

  headTags: [
    {
      tagName: 'link',
      attributes: {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap',
      },
    },
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/bfg-logo.png',
    navbar: {
      title: 'The ANCHOR',
      logo: {
        alt: 'Big Fish Logo',
        src: 'img/bfg-logo.png',
      },
      items: [
        {
          type: 'docSidebar',
          position: 'right',
          sidebarId: 'devSidebar',
          label: 'Developer User Guide',
        },
        {
          type: 'docSidebar',
          position: 'right',
          sidebarId: 'sdkSidebar',
          label: 'APIs & SDKs',
        },
        {
          href: 'https://bfgdeveloper.refined.site/space/PUBDOC/5321981993/Internal+Big+Fish+Handbooks',
          position: 'right',
          label: 'BFG Internal',          
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
          title: 'For Developers',
          items: [
            {
              label: 'Publishing',
              to: '/docs/developer/publishing',
            },
            {
              label: 'Onboarding',
              to: '/docs/developer/onboarding',
            },
            {
              label: 'Security & Privacy',
              to: '/docs/developer/security',
            },
            {
              label: 'Build & Release',
              to: '/docs/developer/build-release',
            },
            {
              label: 'Tools & Services',
              to: '/docs/developer/tools-services',
            },
            {
              label: 'Game Features',
              to: '/docs/developer/game-features',
            },
            {
              label: 'BFG SDK',
              href: 'https://bfgdeveloper.refined.site/space/PUBDOC/5321981993/Internal+Big+Fish+Handbooks',
            },
          ],
        },
        {
          title: 'BFG SDKs',
          items: [
            {
              label: 'Unity SDK',
              to: '/docs/bfgsdk/integrate-unitysdk',
            },
            {
              label: 'Native Android SDK',
              to: '/docs/bfgsdk/integrate-androidsdk',
            },
            {
              label: 'Native iOS SDK',
              to: '/docs/bfgsdk/integrate-iossdk',
            },
          ],
        },
        {
          title: 'Internal Resources',
          items: [
            {
              label: 'Producer Handbook',
              href: 'https://bfgdeveloper.refined.site/space/PUBDOC/4915302298/Producer+Handbook',
            },
            {
              label: 'Central Tech Handbook',
              href: 'https://bfgdeveloper.refined.site/space/PUBDOC/5321064548/Central+Technology+Handbook',
            },
          ],
        },
        {
          title: 'Contact Us',
          items: [
            {
              label: 'Message Us on Slack',
              href: 'https://slack.com/app_redirect?channel=C01L8U8L6KC',
            },
            {
              label: 'Open a bug in Jira',
              href: 'https://bigfishgames.atlassian.net/secure/CreateIssue.jspa?pid=10517',
            },
          ],
        },
      ],
      logo: {
        alt: 'Big Fish Games Logo',
        src: 'img/bfg-logo-boxed-inline.png',
        href: 'https://www.bigfishgames.com',
        width: 400,
        height: 106,
      },
      copyright: `Copyright © ${new Date().getFullYear()}`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ['csharp','java'],
    },
    typesense: {
      typesenseCollectionName: 'docusaurus-2',
      typesenseServerConfig: {
        nodes: [
          {
            host: 'typesense-bqj1b9x1k78r2.cpln.app',
            port: 443,
            protocol: 'https',
          },
        ],
        apiKey: 'testingapikey',
      },
      typesenseSearchParameters: {},
      contextualSearch: true,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;