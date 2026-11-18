import React from 'react';
import { useWishlist } from '../../context/WishlistContext';
import { Heart, X } from 'lucide-react';
import './Toast.css';

export const Toast = () => {
  const { toastMessage, setToastMessage } = useWishlist();

  if (!toastMessage) return null;

  return (
    <div className="aurel-toast glass-panel-dark animate-fade-up" role="alert">
      <div className="toast-content">
        <Heart size={16} className="toast-heart-icon" />
        <span className="toast-text">{toastMessage}</span>
      </div>
      <button
        onClick={() => setToastMessage(null)}
        className="toast-close-btn"
        aria-label="Dismiss Notification"
      >
        <X size={14} />
      </button>
    </div>
  );
};

export default Toast;
