// Image preloading utility for critical images
export const preloadImage = (src: string): Promise<void> => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve();
    img.onerror = reject;
    img.src = src;
  });
};

// Preload critical images
export const preloadCriticalImages = async () => {
  const criticalImages = [
    '/src/assets/images/IMG_0054.PNG', // Logo
    '/src/assets/hero-stadium.jpg', // Hero image
  ];

  try {
    await Promise.all(criticalImages.map(preloadImage));
    console.log('Critical images preloaded successfully');
  } catch (error) {
    console.warn('Some critical images failed to preload:', error);
  }
};

// Batch preload team images for better performance
export const preloadTeamImages = async () => {
  const teamImages = [
    '/src/assets/images/team/Ishan.jpg',
    '/src/assets/images/team/Ved.jpg',
    '/src/assets/images/team/Bhavya.jpg',
    '/src/assets/images/team/Siddharth Vala.jpg',
    '/src/assets/images/team/Aarya.jpg',
    '/src/assets/images/team/Alin.jpg',
  ];

  try {
    await Promise.all(teamImages.map(preloadImage));
    console.log('Team images preloaded successfully');
  } catch (error) {
    console.warn('Some team images failed to preload:', error);
  }
};

// Intersection Observer for lazy loading with better performance
export const createIntersectionObserver = (
  callback: (entries: IntersectionObserverEntry[]) => void,
  options: IntersectionObserverInit = {}
) => {
  const defaultOptions: IntersectionObserverInit = {
    threshold: 0.1,
    rootMargin: '50px',
    ...options,
  };

  return new IntersectionObserver(callback, defaultOptions);
};

// Image optimization utilities
export const getOptimizedImageUrl = (src: string, width?: number, quality: number = 80) => {
  // This would typically integrate with an image optimization service
  // For now, we'll return the original src
  return src;
};

// Debounce utility for scroll events
export const debounce = <T extends (...args: any[]) => any>(
  func: T,
  wait: number
): ((...args: Parameters<T>) => void) => {
  let timeout: NodeJS.Timeout;
  return (...args: Parameters<T>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
};
