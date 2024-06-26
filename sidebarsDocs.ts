import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

export default {
  devSidebar: [
    {
      type: 'html',
      value: 'The ANCHOR',
      className: 'sidebar-title',
    },
    'developer/dev-welcome', 
    'developer/dev_security',
    'developer/publishing',
    {
      type: 'category',
      label: 'The Onboarding Process',
      link: {
        type: 'doc',
        id: 'developer/onboarding',
      },
      collapsed: true,
      items: ['developer/onboarding-github','developer/onboarding-nexus'],
    },
    'developer/security',
    {
      type: 'category',
      label: 'Build & Release',
      link: {
        type: 'doc',
        id: 'developer/build-release',
      },
      collapsed: true,
      items: ['developer/nexus-upload','developer/test-flight'],
    },
    {
      type: 'category',
      label: 'Tools & Services',
      link: {
        type: 'doc',
        id: 'developer/tools-services',
      },
      collapsed: true,
      items: [
        'developer/tools-appsflyer', 
        'developer/tools-bfgsdk',
        'developer/tools-braincloud',
        'developer/tools-gogame',
        'developer/tools-ironsource',
        'developer/tools-leanplum',
        'developer/tools-mts',
        'developer/tools-zendesk',
      ],
    },
    {
      type: 'category',
      label: 'Game Features',
      link: {
        type: 'generated-index',
        title: 'Game Features',
        description: 'Learn about the tools and APIs we partner with to surface all of the features needed to create a successful game!',
        slug: 'developer/game-features',
        keywords: ['features'],
        image: '/img/bfg-logo.png',
      },
      collapsed: true,
      items: [
        'developer/feature-ad-attribution',
        'developer/feature-ad-delivery',
        'developer/feature-customer-support',
        'developer/feature-inapp-messaging',
        'developer/feature-interstitials',
        'developer/feature-manual-messages',
        'developer/feature-push-notifications',
        'developer/feature-telemetry',
        'developer/feature-gogame',
      ]
    },
  ],
  sdkSidebar: [
    'bfgsdk/bfgsdk_welcome', 
    'bfgsdk/sdktest',
    'bfgsdk/compatibility-charts',
    'bfgsdk/integrate-unitysdk',
    'bfgsdk/integrate-androidsdk',
    'bfgsdk/integrate-iossdk',
    'bfgsdk/configure-unitysdk',
    'bfgsdk/configure-androidsdk',
    'bfgsdk/configure-iossdk',
  ],
}; 
