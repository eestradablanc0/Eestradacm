import React from 'react';

interface BrandLogoProps {
  className?: string;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({ className = '' }) => {
  return (
    <span
      className={`inline-flex items-center gap-2.5 whitespace-nowrap shrink-0 select-none ${className}`}
    >
      <svg
        width="26"
        height="26"
        viewBox="0 0 28 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        className="shrink-0"
      >
        {/* Subtle outer geometric frame representing structure + exploration */}
        <rect
          x="1"
          y="1"
          width="26"
          height="26"
          stroke="#383733"
          strokeWidth="1.25"
        />
        {/* Architectural E mark */}
        <path
          d="M8.5 7.5H20M8.5 7.5V20.5M8.5 20.5H20"
          stroke="#383733"
          strokeWidth="1.75"
          strokeLinecap="square"
        />
        {/* Terracotta central bridge — ideas taking shape */}
        <path
          d="M8.5 14H17.5"
          stroke="#C65C3B"
          strokeWidth="2.1"
          strokeLinecap="square"
        />
      </svg>
      <span className="font-serif text-[1.18rem] font-medium tracking-[-0.02em] text-[#383733]">
        E <span className="font-normal">Estrada</span>
      </span>
    </span>
  );
};

export const BrandMonogramMark: React.FC<{ className?: string }> = ({
  className = '',
}) => {
  return (
    <svg
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className={className}
    >
      <circle
        cx="60"
        cy="60"
        r="58"
        stroke="#BCBCB6"
        strokeWidth="1"
        strokeDasharray="3 5"
      />
      <rect
        x="26"
        y="26"
        width="68"
        height="68"
        stroke="#383733"
        strokeWidth="1.2"
      />
      <path
        d="M44 43H77M44 43V77M44 77H77"
        stroke="#383733"
        strokeWidth="2.2"
        strokeLinecap="square"
      />
      <path
        d="M44 60H70"
        stroke="#C65C3B"
        strokeWidth="2.8"
        strokeLinecap="square"
      />
    </svg>
  );
};
