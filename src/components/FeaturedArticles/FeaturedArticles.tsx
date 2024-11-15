import React from 'react';
import styles from './FeaturedArticles.module.css';
import clsx from 'clsx';

const articles = [
  {
    icon: 'fire',
    cardTitle: 'Popular Articles',
    articles: [
      {
        title: 'Popular Article 1',
        description: 'Explore our most popular articles covering features and best practices.',
        link: '/docs/command-center/overview1',
      },
      {
        title: 'Popular Article 2',
        description: 'Explore our most popular articles covering features and best practices.',
        link: '/docs/command-center/overview2',
      },
    ],
  },
  {
    icon: 'add-circle',
    cardTitle: 'Recently Added',
    articles: [
      {
        title: 'Recently Added 1',
        description: 'Check out the latest additions to our knowledge base.',
        link: '/docs/command-center/overview3',
      },
      {
        title: 'Recently Added 2',
        description: 'Check out the latest additions to our knowledge base.',
        link: '/docs/command-center/overview4',
      },
    ],
  },
  {
    icon: 'lamp',
    cardTitle: 'Frequently Asked',
    articles: [
      {
        title: 'Frequently Asked 1',
        description: 'Find answers to the most frequently asked questions.',
        link: '/docs/command-center/overview5',
      },
      {
        title: 'Frequently Asked 2',
        description: 'Find answers to the most frequently asked questions.',
        link: '/docs/command-center/overview6',
      },
    ],
  },
];

export default function FeaturedArticles() {
  return (
    <section className={styles.featuredArticles}>
      <div className="container">
        <h2>Featured Articles</h2>
        <p className={clsx('subtitle', styles.subtitle)}>
          Popular articles covering features and best practices
        </p>
        <div className={styles.cards}>
          {/* Outer loop over categories */}
          {articles.map((category, index) => (
            <div key={index} className={styles.card}>
              <i data-duoicon={category.icon} className={styles.cardIcon}></i>
              <h3 className={styles.cardTitle}>{category.cardTitle}</h3>
              {/* Inner loop over articles within each category */}
              {category.articles.map((article, idx) => (
                <a key={idx} href={article.link} className={styles.articleLink}>
                  <div className={styles.article}>
                    <h4 className={styles.articleTitle}>{article.title}</h4>
                    <p className={styles.description}>{article.description}</p>
                  </div>
                </a>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
