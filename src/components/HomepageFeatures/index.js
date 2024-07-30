import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [

  {
    title: 'Easy to Integrate',
    Svg: require('@site/static/img/svg1.svg').default,
    description: (
      <>
        Support multiple programming languages, support most CI/CD platforms.
      </>
    ),
  },
  {
      title: 'Easy to Use',
      Svg: require('@site/static/img/svg2.svg').default,
      description: (
        <>
          Apply Shift-Left strategy for your organization with Codety code analysis integration.
        </>
      ),
    },
  {
    title: 'Secure',
    Svg: require('@site/static/img/svg3.svg').default,
    description: (
      <>
        Minimal permission required by respecting the Principle of Least Privilege(POLP).
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
        <Heading as="h3">{title}</Heading>
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
