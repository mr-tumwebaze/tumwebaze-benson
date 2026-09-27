import Image from 'next/image';

export default function Logo({ width = 80, height = 80, className = '' }) {
  return (
    <div className={`relative inline-flex items-center justify-center ${className}`}>
      <svg
        width={width}
        height={height}
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="drop-shadow-lg"
      >
        {/* Outer Blue Circle */}
        <circle
          cx="100"
          cy="100"
          r="95"
          stroke="#0052CC"
          strokeWidth="12"
          fill="#FFFFFF"
        />

        {/* TB Monogram - T */}
        <g>
          {/* T Bar */}
          <rect x="65" y="50" width="70" height="18" fill="#0052CC" />
          {/* T Stem */}
          <rect x="95" y="68" width="20" height="65" fill="#0052CC" />
        </g>

        {/* TB Monogram - B */}
        <g>
          {/* B Left Stem */}
          <rect x="130" y="50" width="18" height="83" fill="#1A1A1A" />
          {/* B Top Bulge */}
          <path
            d="M 148 50 Q 175 65 175 83.5 Q 175 102 148 110 L 130 110 Q 130 50 148 50"
            fill="#0052CC"
          />
          {/* B Bottom Bulge */}
          <path
            d="M 148 110 Q 180 125 180 133 Q 180 152 148 133 L 130 133 L 130 110 L 148 110"
            fill="#1A1A1A"
          />
        </g>

        {/* Curved Motion Arc */}
        <path
          d="M 120 80 Q 160 100 140 140"
          stroke="#0052CC"
          strokeWidth="8"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Graduation Cap */}
        <g>
          {/* Cap Base */}
          <rect x="55" y="38" width="40" height="8" fill="#1A1A1A" rx="2" />
          {/* Cap Top */}
          <polygon points="65,28 95,28 85,15 75,15" fill="#1A1A1A" />
          {/* Tassel */}
          <line x1="80" y1="15" x2="80" y2="25" stroke="#0052CC" strokeWidth="2" />
          <circle cx="80" cy="26" r="2" fill="#0052CC" />
        </g>

        {/* Computer Monitor */}
        <g>
          {/* Monitor Screen */}
          <rect x="150" y="105" width="32" height="28" fill="#FFFFFF" stroke="#0052CC" strokeWidth="2" rx="3" />
          {/* Screen Content Lines */}
          <line x1="158" y1="112" x2="174" y2="112" stroke="#0052CC" strokeWidth="1.5" />
          <line x1="158" y1="118" x2="174" y2="118" stroke="#0052CC" strokeWidth="1.5" />
          <line x1="158" y1="124" x2="170" y2="124" stroke="#0052CC" strokeWidth="1.5" />
          {/* Monitor Base */}
          <rect x="162" y="133" width="8" height="12" fill="#0052CC" />
          {/* Cursor Arrow */}
          <polygon points="176,108 176,120 184,118" fill="#0052CC" />
        </g>
      </svg>
    </div>
  );
}
