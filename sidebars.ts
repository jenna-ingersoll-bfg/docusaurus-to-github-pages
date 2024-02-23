import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

export default {
  docs: [
    {
      type: 'category',
      label: 'Welcome Developer! ',
      link: {type: 'doc', id: 'dev_welcome'},
      items: ['dev_onboarding', 'dev_security'],
    },
    'prod_welcome',
  ],
};

