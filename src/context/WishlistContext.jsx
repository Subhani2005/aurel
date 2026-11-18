import React, { createContext, useContext, useState, useEffect } from 'react';
import { projectsData } from '../data/projectsData';

const WishlistContext = createContext();

const STORAGE_KEY = 'aurel_curated_wishlist';

export const WishlistProvider = ({ children }) => {
  const [wishlistIds, setWishlistIds] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      return saved ? JSON.parse(saved) : ['villa-lumina', 'penthouse-seraph'];
    } catch (e) {
      console.warn('Unable to read localStorage for wishlist:', e);
      return ['villa-lumina', 'penthouse-seraph'];
    }
  });

  const [toastMessage, setToastMessage] = useState(null);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(wishlistIds));
    } catch (e) {
      console.warn('Unable to save to localStorage:', e);
    }
  }, [wishlistIds]);

  const showToast = (message) => {
    setToastMessage(message);
    setTimeout(() => {
      setToastMessage((prev) => (prev === message ? null : prev));
    }, 3200);
  };

  const isWishlisted = (id) => wishlistIds.includes(id);

  const toggleWishlist = (id) => {
    const project = projectsData.find((p) => p.id === id);
    const title = project ? project.title : 'Project';

    setWishlistIds((prev) => {
      if (prev.includes(id)) {
        showToast(`Removed "${title}" from your curation`);
        return prev.filter((item) => item !== id);
      } else {
        showToast(`Added "${title}" to your curated collection`);
        return [...prev, id];
      }
    });
  };

  const removeFromWishlist = (id) => {
    const project = projectsData.find((p) => p.id === id);
    const title = project ? project.title : 'Project';
    setWishlistIds((prev) => prev.filter((item) => item !== id));
    showToast(`Removed "${title}" from your curation`);
  };

  const clearWishlist = () => {
    setWishlistIds([]);
    showToast('Your curated collection has been cleared');
  };

  const wishlistProjects = projectsData.filter((p) => wishlistIds.includes(p.id));

  return (
    <WishlistContext.Provider
      value={{
        wishlistIds,
        wishlistProjects,
        wishlistCount: wishlistIds.length,
        isWishlisted,
        toggleWishlist,
        removeFromWishlist,
        clearWishlist,
        toastMessage,
        setToastMessage
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
};

export const useWishlist = () => {
  const context = useContext(WishlistContext);
  if (!context) {
    throw new Error('useWishlist must be used within a WishlistProvider');
  }
  return context;
};
