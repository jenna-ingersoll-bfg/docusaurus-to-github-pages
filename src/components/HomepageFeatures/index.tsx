import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  link: string;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Developer User Guide',
    link: 'static/dev_welcome.html',
    description: (
      <>
        THE SINGLE SOURCE OF TRUTH FOR OUR GAME DEVELOPERS AND PARTNERS.
      </>
    ),
  },
  {
    title: 'Producer Handbook',
    link: 'static/prod_welcome.html',
    description: (
      <>
        EVERYTHING BIG FISH INTERNAL PRODUCERS NEED TO KNOW.
      </>
    ),
  },
  {
    title: 'BFG SDK Reference',
    link: 'static/dev_welcome.html',
    description: (
      <>
        DIVE INTO OUR SDK REFERENCE FOR MORE INFO.
      </>
    ),
  },
];

function Feature({title, link, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <a href={link}>
        <div className="text--center padding-horiz--md">
          <Heading as="h3">{title}</Heading>
          <p>{description}</p>
        </div>
      </a>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
