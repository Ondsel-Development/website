import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Collaborate',
    img: '/img/feature1.png',
    description: (
      <>
        Share your designs with collaborators without forcing them to learn new tools.
      </>
    ),
  },
  {
    title: 'Configure',
    img: '/img/feature2.png',
    description: (
      <>
        Let users configure your designs to meet their needs.
      </>
    ),
  },
  {
    title: 'Control',
    img: '/img/feature3.png',
    description: (
      <>
        Control exactly which aspects of your designs you share.
      </>
    ),
  },
];

function Feature({img, title, description}) {
  return (
    <div className='col col--4'>
      <div className="text--center">
        <img src={img} alt={title}/>
      </div>
      <div className="text--center padding-horiz--md">
        <h3 className='c_grey'>{title}</h3>
        <p className='c_grey'>{description}</p>
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
