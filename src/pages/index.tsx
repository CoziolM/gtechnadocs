import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import FeaturedArticles from '@site/src/components/FeaturedArticles/FeaturedArticles';
import FeaturedVideos from '@site/src/components/FeaturedVideos/FeaturedVideos';
import Heading from '@theme/Heading';
import Button from '@site/src/components/Button/Button';
import styles from './index.module.css';

function Support() {
  return (
    <section className={clsx(styles.supportSection)}>
      <div className="container">
        <h1>Can't find what you need?</h1>
        <Button label="Contact Support" link="/contact" variant="primary" size="md" />
      </div>
    </section>
  );
}

function NewSection() {
  return (
    <section className={styles.newSection}>
      <div className="container">
        <h2>Browse by topics</h2>
        <div class="subtitle">Everything you need to know to get started with Command Center</div>
        {/* Add more content as needed */}
      </div>
    </section>
  );
}

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  return (
    <Layout title={`gtechnaDOCS`} description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        {/* Commented out NewSection */}
        <section className={styles.newSection}>
          <div className="container">
            <FeaturedVideos />
          </div>
        </section>
        <section className={styles.newSection}>
          <div className="container">
            <FeaturedArticles />
          </div>
        </section>
        <Support />
      </main>
    </Layout>
  );
}
