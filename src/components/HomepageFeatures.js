import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: '日本からHFFを盛り上げる',
    Svg: require('../../static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        HFF-Workshop-Japanは、日本からHuman:FallFlatを盛り上げるために活動します。
      </>
    ),
  },
  {
    title: '誰もがアクセスできる情報',
    Svg: require('../../static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        誰もが面白いコンテンツを生み出せるよう、全員が情報にアクセスできるようにします。
      </>
    ),
  },
  {
    title: '誰もが貢献できるコミュニティ',
    Svg: require('../../static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        <a href="https://github.com/HFF-Workshop-Japan/workshop-docs" target="_blank">Github</a>などを通じて誰もが情報を公開することができ、コミュニティーとHFFに貢献できます。
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
