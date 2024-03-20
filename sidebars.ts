import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

export default {
  docs: [
    {
      type: 'category',
      label: 'Welcome Developer! ',
      link: {type: 'doc', id: 'static/dev_welcome'},
      items: ['static/dev_onboarding', 'static/dev_security'],
    },
    'static/prod_welcome',
    {
      type: 'category',
      label: 'BFG SDK ',
      link: {type: 'doc', id: 'static/bfgsdk_welcome'},
      items: ['bfgsdk/sdktest'],
    },
  ],
};

