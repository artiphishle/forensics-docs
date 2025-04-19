import type { ReactNode } from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

// Import new SVGs
import CodeAnalysisSvg from './CodeAnalysis.svg';
import PerformanceOptimizationSvg from './PerformanceOptimization.svg';
import OpenSourceSvg from './OpenSource.svg';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Code Analysis',
    Svg: CodeAnalysisSvg,
    description: (
      <>
        Advanced code analysis tools to help you understand and improve your codebase. Built with
        TypeScript and functional programming principles.
      </>
    ),
  },
  {
    title: 'Performance Optimization',
    Svg: PerformanceOptimizationSvg,
    description: (
      <>
        Optimize your application's performance with our comprehensive tools and metrics. Monitor
        and improve your code's efficiency.
      </>
    ),
  },
  {
    title: 'Open Source',
    Svg: OpenSourceSvg,
    description: (
      <>
        Built on open-source principles. Contribute, collaborate, and help improve the project for
        everyone.
      </>
    ),
  },
];

function Feature({ title, Svg, description }: FeatureItem) {
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

export default function HomepageFeatures(): ReactNode {
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
