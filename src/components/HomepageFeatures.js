import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'HFFを盛り上げる',
    Svg: require('../../static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        HFF-Workshop-Japanは、Human:FallFlatをより盛り上げるために活動します。
      </>
    ),
  },
  {
    title: '誰もがアクセスできる情報',
    Svg: require('../../static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        このサイトは誰もが情報にアクセスし、より面白いコンテンツを生み出せるよう、情報公開します。
      </>
    ),
  },
  {
    title: '日本語のコミュニティ',
    Svg: require('../../static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Human:FallFlatの日本語での情報発信、コミュニティを提供します。
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
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
