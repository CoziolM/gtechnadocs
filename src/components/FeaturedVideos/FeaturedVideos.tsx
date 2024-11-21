import React from 'react';
import styles from './FeaturedVideos.module.css';
import clsx from 'clsx';
import '@fortawesome/fontawesome-free/css/all.min.css';
import useBaseUrl from '@docusaurus/useBaseUrl';

interface Video {
  id: string;
  title: string;
  description: string;
  videoUrl: string;
  posterUrl?: string;
}

interface VideoCardProps {
  video: Video;
}

const videos: Video[] = [
  {
    id: 'new-feature',
    title: 'New Feature',
    description: 'Watch our most popular videos covering features and best practices.',
    videoUrl: '/videos/PrototypeRFC.mp4',
    posterUrl: '/videos/thumbnails/PrototypeRFC_thumbnail.png',
  },
  {
    id: 'how-to-get-started',
    title: 'How to get started',
    description: 'Check out the latest video additions to our knowledge base.',
    videoUrl: '/videos/PrototypeRFC.mp4',
    posterUrl: '/videos/thumbnails/howto1_play.png',
  },
  {
    id: 'product-configuration',
    title: 'Product configuration',
    description: 'Find answers to the most frequently asked questions in video format.',
    videoUrl: '/videos/PrototypeRFC.mp4',
    posterUrl: '/videos/thumbnails/howto2_play.png',
  },
];

const FeaturedVideos: React.FC = () => {
  const videosLink = useBaseUrl('/videos');

  return (
    <section className={styles.featuredVideos}>
      <div className="container">
        <h2>Featured Videos</h2>
        <p className={clsx('subtitle', styles.subtitle)}>
          Quick and informative videos covering features and best practices
        </p>
        <div className={styles.viewAllLink}>
          <a href={videosLink} className={styles.link}>
            Watch all videos
            <i className={`fas fa-arrow-right ${styles.arrow}`}></i>
          </a>
        </div>
        <div className={styles.cards}>
          {videos.map((video) => (
            <VideoCard key={video.id} video={video} />
          ))}
        </div>
      </div>
    </section>
  );
};

const VideoCard: React.FC<VideoCardProps> = ({ video }) => {
  const videoPath = useBaseUrl(video.videoUrl);
  const posterPath = useBaseUrl(video.posterUrl || '/videos/thumbnails/default_thumbnail.png');

  return (
    <a
      href={videoPath}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.card}
      aria-label={`Open ${video.title}`}
    >
      <div className={styles.videoPlayer}>
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
    </a>
  );
};

export default FeaturedVideos;



