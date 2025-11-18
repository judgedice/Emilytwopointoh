import { useState } from 'react';
import { Play, X } from 'lucide-react';

interface VideoPlayerProps {
  src: string;
  title?: string;
  thumbnail?: string;
  className?: string;
  autoplay?: boolean;
}

export function VideoPlayer({ src, title, thumbnail, className = '', autoplay = false }: VideoPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(autoplay);
  const [showThumbnail, setShowThumbnail] = useState(!autoplay && !!thumbnail);

  // Determine video type and get embed URL
  const getEmbedUrl = () => {
    // YouTube
    if (src.includes('youtube.com') || src.includes('youtu.be')) {
      const videoId = src.match(/(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/)?.[1];
      if (videoId) {
        return `https://www.youtube.com/embed/${videoId}${autoplay ? '?autoplay=1' : ''}`;
      }
    }
    // Vimeo
    if (src.includes('vimeo.com')) {
      const videoId = src.match(/vimeo\.com\/(?:.*\/)?(\d+)/)?.[1];
      if (videoId) {
        return `https://player.vimeo.com/video/${videoId}${autoplay ? '?autoplay=1' : ''}`;
      }
    }
    // Direct video file (MP4, WebM, etc.)
    if (src.match(/\.(mp4|webm|ogg|mov)$/i)) {
      return src;
    }
    // Fallback to original src (for other embed types)
    return src;
  };

  const embedUrl = getEmbedUrl();
  const isDirectVideo = embedUrl.match(/\.(mp4|webm|ogg|mov)$/i);

  if (isDirectVideo) {
    return (
      <div className={`relative ${className}`}>
        <video
          src={embedUrl}
          controls
          className="w-full h-full"
          autoPlay={autoplay}
          title={title}
        >
          Your browser does not support the video tag.
        </video>
      </div>
    );
  }

  return (
    <div className={`relative ${className}`}>
      {showThumbnail && thumbnail ? (
        <div 
          className="relative cursor-pointer group"
          onClick={() => {
            setShowThumbnail(false);
            setIsPlaying(true);
          }}
        >
          <img 
            src={thumbnail} 
            alt={title || 'Video thumbnail'} 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/40 transition-colors">
            <div className="bg-white/90 rounded-full p-4 group-hover:scale-110 transition-transform">
              <Play size={32} className="text-gray-900 ml-1" fill="currentColor" />
            </div>
          </div>
        </div>
      ) : (
        <div className="w-full" style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden' }}>
          <iframe
            src={embedUrl}
            style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
            allow="autoplay; encrypted-media; picture-in-picture"
            allowFullScreen
            title={title || 'Video player'}
            className="border border-gray-300"
          />
        </div>
      )}
    </div>
  );
}

