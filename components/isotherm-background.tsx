export function IsothermBackground() {
  return (
    <svg
      className="absolute inset-0 w-full h-full opacity-[0.03] pointer-events-none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <pattern id="isotherms" x="0" y="0" width="200" height="200" patternUnits="userSpaceOnUse">
          {/* Curved isothermal lines */}
          <path d="M0,50 Q50,30 100,50 T200,50" fill="none" stroke="currentColor" strokeWidth="1" />
          <path d="M0,100 Q50,70 100,100 T200,100" fill="none" stroke="currentColor" strokeWidth="1" />
          <path d="M0,150 Q50,120 100,150 T200,150" fill="none" stroke="currentColor" strokeWidth="1" />
          {/* Grid dots */}
          <circle cx="50" cy="50" r="1" fill="currentColor" />
          <circle cx="150" cy="50" r="1" fill="currentColor" />
          <circle cx="50" cy="150" r="1" fill="currentColor" />
          <circle cx="150" cy="150" r="1" fill="currentColor" />
          <circle cx="100" cy="100" r="1.5" fill="currentColor" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#isotherms)" />
    </svg>
  )
}
