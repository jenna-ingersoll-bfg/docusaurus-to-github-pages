import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  link: string;
  description: JSX.Element;
  color: string;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Developer User Guide',
    link: 'docs/static/dev_welcome.html',
    description: (
      <>
        THE SINGLE SOURCE OF TRUTH FOR OUR GAME DEVELOPERS AND PARTNERS.
      </>
    ),
    color: '#003d6e',
  },
  {
    title: 'Producer Handbook',
    link: 'docs/static/prod_welcome.html',
    description: (
      <>
        EVERYTHING BIG FISH INTERNAL PRODUCERS NEED TO KNOW ABOUT SUPPORTING A GAME.
      </>
    ),
    color: '#034e87',    
  },
  {
    title: 'BFG SDK Reference',
    link: 'docs/static/dev_welcome.html',
    description: (
      <>
        DIVE INTO OUR SDK REFERENCE FOR MORE INFORMATION AND VIEW OUR RESOURCES.
      </>
    ),
    color: '#119bd4',
  },
];

function Feature({title, link, description, color}: FeatureItem) {
  return (
    <div className={clsx('col col--4')} style={{backgroundColor: color}}>
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
