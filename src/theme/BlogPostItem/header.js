import React from 'react';
import clsx from 'clsx';
import { useBlogPost } from '@docusaurus/plugin-content-blog/client';
import Link from '@docusaurus/Link'; // Import Link for navigation
import styles from './Header.module.css';

export default function BlogPostItemHeader() {
  const { metadata, isBlogPostPage } = useBlogPost();
  const { title, permalink, date, readingTime, authors } = metadata;
  const TitleHeading = isBlogPostPage ? 'h1' : 'h2';

  // Manually format the date
  const formattedDate = new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(new Date(date));

  return (
    <header>
      <TitleHeading className={clsx(styles.title)}>
        {isBlogPostPage ? title : <Link to={permalink}>{title}</Link>}
      </TitleHeading>
      <p className={styles.metadata}>
        {/* Display Date */}
        <time dateTime={date}>{formattedDate}</time>
        {/* Display Reading Time */}
        {readingTime && ` · ${Math.ceil(readingTime)} min read`}
        {/* Display Authors */}
        {authors.length > 0 && (
          <>
            {' | '}
            {authors.map((author, index) => (
              <span key={index}>
                {author.url ? (
                  <a
                    href={author.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.author}
                  >
                    {author.name}
                  </a>
                ) : (
                  <span className={styles.author}>{author.name}</span>
                )}
                {author.title ? `, ${author.title}` : ''}
              </span>
            ))}
          </>
        )}
      </p>
    </header>
  );
}







