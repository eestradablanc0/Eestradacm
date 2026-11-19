import React, { useState } from 'react';

interface EditorialImageProps {
  src: string;
  alt: string;
  fallbackLabel?: string;
  className?: string;
  imgClassName?: string;
  priority?: boolean;
}

export const EditorialImage: React.FC<EditorialImageProps> = ({
  src,
  alt,
  fallbackLabel = 'E Estrada',
  className = '',
  imgClassName = '',
  priority = false,
}) => {
  const [hasError, setHasError] = useState(false);

  return (
    <div className={`relative overflow-hidden bg-[#ECE9DF] ${className}`}>
      {!hasError ? (
        <img
          src={src}
          alt={alt}
          referrerPolicy="no-referrer"
          loading={priority ? 'eager' : 'lazy'}
          decoding={priority ? 'sync' : 'async'}
          onError={() => setHasError(true)}
          className={`h-full w-full object-cover ${imgClassName}`}
        />
      ) : (
        <div
          className="flex h-full w-full flex-col items-center justify-center bg-[#ECE9DF] p-8 text-center"
          role="img"
          aria-label={alt}
        >
          <svg
            width="48"
            height="48"
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            className="mb-4"
          >
            <rect
              x="4"
              y="4"
              width="40"
              height="40"
              stroke="#BCBCB6"
              strokeWidth="1.2"
            />
            <path
              d="M15 15H33M15 15V33M15 33H33"
              stroke="#383733"
              strokeWidth="1.6"
            />
            <path d="M15 24H29" stroke="#C65C3B" strokeWidth="2" />
          </svg>
          <span className="font-serif text-base text-[#383733]">
            {fallbackLabel}
          </span>
        </div>
      )}
    </div>
  );
};
