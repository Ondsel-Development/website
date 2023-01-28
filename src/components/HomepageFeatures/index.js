import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Collaborate',
    Svg: require('@site/static/img/collaborate.svg').default,
    description: (
      <>
        Share your designs with collaborators without forcing them to learn new tools.
      </>
    ),
  },
  {
    title: 'Configure',
    Svg: require('@site/static/img/configure.svg').default,
    description: (
      <>
        Let users configure your designs to meet their needs.
      </>
    ),
  },
  {
    title: 'Control',
    Svg: require('@site/static/img/control.svg').default,
    description: (
      <>
        Control exactly which aspects of your designs you share.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
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
