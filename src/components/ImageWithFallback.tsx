import { useState, useEffect } from 'react';

interface ImageWithFallbackProps {
  src: string;
  alt: string;
  className?: string;
  fallbackSrc?: string;
}

export const ImageWithFallback: React.FC<ImageWithFallbackProps> = ({
  src,
  alt,
  className,
  fallbackSrc = 'https://placehold.co/600x400?text=Изображение+не+загружено'
}) => {
  const [imgSrc, setImgSrc] = useState('');
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    if (!src) {
      setImgSrc(fallbackSrc);
      return;
    }

    // Функция для создания прокси URL
    const getProxiedImageUrl = (url: string): string => {
      // Если изображение уже с placehold, возвращаем как есть
      if (url.includes('placehold.co')) return url;
      
      // Создаем прокси URL через CORS-сервис
      const proxyUrl = 'https://corsproxy.io/?';
      return proxyUrl + encodeURIComponent(url);
    };

    // Пробуем загрузить через прокси
    setImgSrc(getProxiedImageUrl(src));
    setHasError(false);

  }, [src, fallbackSrc]);

  const handleError = () => {
    if (!hasError) {
      setHasError(true);
      // Пробуем прямую загрузку если прокси не сработал
      if (src && !src.includes('placehold.co')) {
        setImgSrc(src);
      } else {
        setImgSrc(fallbackSrc);
      }
    }
  };

  const handleLoad = () => {
    // Изображение успешно загрузилось
  };

  return (
    <img
      src={imgSrc}
      alt={alt}
      className={className}
      onError={handleError}
      onLoad={handleLoad}
      loading="lazy"
      decoding="async"
      crossOrigin="anonymous"
    />
  );
};