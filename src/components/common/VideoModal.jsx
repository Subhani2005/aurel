import React, { useEffect } from 'react';
import { X, Volume2, VolumeX, Play, Pause } from 'lucide-react';
import './VideoModal.css';

export const VideoModal = ({ isOpen, onClose }) => {
  const [isPlaying, setIsPlaying] = React.useState(true);
  const [isMuted, setIsMuted] = React.useState(true);
  const videoRef = React.useRef(null);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
        setIsPlaying(false);
      } else {
        videoRef.current.play();
        setIsPlaying(true);
      }
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <div className="video-modal-backdrop" onClick={onClose}>
      <div className="video-modal-wrapper" onClick={(e) => e.stopPropagation()}>
        {/* Close Button */}
        <button className="video-modal-close-btn" onClick={onClose} aria-label="Close Showreel">
          <span>CLOSE</span>
          <X size={20} />
        </button>

        {/* Video Canvas Container */}
        <div className="video-player-container">
          <video
            ref={videoRef}
            className="showreel-video"
            autoPlay
            loop
            muted={isMuted}
            playsInline
            poster="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1600&q=85"
          >
            {/* High quality free architectural & interior video */}
            <source
              src="https://assets.mixkit.co/videos/preview/mixkit-modern-apartment-with-living-room-and-kitchen-41857-large.mp4"
              type="video/mp4"
            />
            Your browser does not support HTML5 video.
          </video>

          {/* Luxury Video Overlay Vignette */}
          <div className="video-overlay-vignette">
            <div className="showreel-brand-stamp">
              <span className="stamp-sub">AUREL CINEMATIC MONOGRAPH</span>
              <h2 className="stamp-title">The Choreography of Light & Stone</h2>
            </div>

            {/* Video Controls Bar */}
            <div className="video-controls-bar">
              <div className="control-left">
                <button onClick={togglePlay} className="control-btn" aria-label="Play/Pause">
                  {isPlaying ? <Pause size={18} /> : <Play size={18} />}
                  <span>{isPlaying ? 'Pause' : 'Play'}</span>
                </button>
                <button onClick={toggleMute} className="control-btn" aria-label="Mute/Unmute">
                  {isMuted ? <VolumeX size={18} /> : <Volume2 size={18} />}
                  <span>{isMuted ? 'Unmute' : 'Muted'}</span>
                </button>
              </div>

              <div className="video-chapter-info">
                <span>Villa Lumina • Lake Como, 2024</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoModal;
