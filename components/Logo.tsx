export default function Logo({ width = 80, height = 80, className = '' }: { width?: number; height?: number; className?: string }) {
  return (
    <svg width={width} height={height} viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} role="img" aria-label="Tumwebaze Benson logo">
      <circle cx="100" cy="100" r="94" stroke="#0052CC" strokeWidth="11" fill="#fff" />
      <path d="M53 54h72v17H53zM81 71h20v77H81z" fill="#0052CC" />
      <path d="M104 54h17v94h-17z" fill="#1A1A1A" />
      <path d="M121 54c30 4 35 26 6 41h-23V54h17Z" fill="#1A1A1A" />
      <path d="M121 95c34 4 35 31 6 53h-23V95h17Z" fill="#1A1A1A" />
      <path d="M116 77c42 12 41 47 6 69" stroke="#0052CC" strokeWidth="8" strokeLinecap="round" />
      <path d="m45 43 45-13 31 13-45 13-31-13Z" fill="#1A1A1A" /><path d="M76 48v18" stroke="#0052CC" strokeWidth="3" /><circle cx="76" cy="69" r="4" fill="#0052CC" /><path d="M150 106h34v31h-34z" fill="#fff" stroke="#0052CC" strokeWidth="3" /><path d="M157 114h19M157 121h19M157 128h13" stroke="#0052CC" strokeWidth="2" /><path d="m177 113 1 14 7-5" fill="#0052CC" /><path d="M162 137h10v10h-10zM154 148h27" stroke="#0052CC" strokeWidth="3" />
    </svg>
  );
}
