import React from 'react';
import styles from './FeaturedVideos.module.css';
import clsx from 'clsx';
import '@fortawesome/fontawesome-free/css/all.min.css';
import useBaseUrl from '@docusaurus/useBaseUrl';

const videos = [
  {
    title: 'New Feature',
    description: 'Watch our most popular videos covering features and best practices.',
    videoUrl: '/videos/PrototypeRFC.mp4',
    posterUrl: '/videos/thumbnails/PrototypeRFC_thumbnail.png',
  },
  {
    title: 'How to get started',
    description: 'Check out the latest video additions to our knowledge base.',
    videoUrl: '/videos/PrototypeRFC.mp4',
    posterUrl: '/videos/thumbnails/howto1_play.png',
  },
  {
    title: 'Product configuration',
    description: 'Find answers to the most frequently asked questions in video format.',
    videoUrl: '/videos/PrototypeRFC.mp4',
    posterUrl: '/videos/thumbnails/howto2_play.png',
  },
];

export default function FeaturedVideos(): JSX.Element {
  const videosLink = useBaseUrl('/videos'); // Hook at top level

  return (
    <section className={styles.featuredVideos}>
      <div className="container">
        <h2>Featured Videos</h2>
        <p className={clsx('subtitle', styles.subtitle)}>
          Quick and informative video covering features and best practices
        </p>
        {/* Add the link here */}
        <div className={styles.viewAllLink}>
          <a href={videosLink} className={styles.link}>
            Watch all videos
            <i className={`fas fa-arrow-right ${styles.arrow}`}></i>
          </a>
        </div>
        <div className={styles.cards}>
          {videos.map((video, index) => (
            <VideoCard key={index} video={video} />
          ))}
        </div>
      </div>
    </section>
  );
}

interface Video {
  title: string;
  description: string;
  videoUrl: string;
  posterUrl?: string;
}

interface VideoCardProps {
  video: Video;
}

function VideoCard({ video }: VideoCardProps): JSX.Element {
  const videoPath = useBaseUrl(video.videoUrl); // Hook at top level
  const posterPath = useBaseUrl(video.posterUrl);

  const handleOpenVideo = (): void => {
    window.open(videoPath, '_blank');
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLDivElement>): void => {
    if (e.key === 'Enter' || e.key === ' ') {
      handleOpenVideo();
    }
  };

  return (
    <div className={styles.card}>
      <div
        className={styles.videoPlayer}
        onClick={handleOpenVideo}
        tabIndex={0}
        onKeyPress={handleKeyPress}
        aria-label={`Open ${video.title}`}
      >
        <img
          src={posterPath}
          alt={`Thumbnail for ${video.title}`}
          className={styles.videoThumbnail}
        />
        <div className={styles.playButton}>
          <i className="fas fa-play-circle"></i>
        </div>
      </div>
      <h4 className={styles.videoTitle}>{video.title}</h4>
    </div>
  );
}



