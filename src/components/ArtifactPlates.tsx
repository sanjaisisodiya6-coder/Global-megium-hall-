import React, { useState } from 'react';
import { EMBLEM_IMAGE_PATH, PlateKey } from '../data/museumData';

export const SealImageWithFallback: React.FC<{
  className?: string;
  alt?: string;
}> = ({
  className = 'w-full h-full object-contain',
  alt = 'Gobar Museum Hall Official Seal — Estd. 2026, Tradition & Innovation, Eco-Friendly Cow Dung Products by Manju Mitti',
}) => {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div
        className="w-full h-full flex flex-col items-center justify-center bg-[#18221D] text-[#F7F4EE] p-6 text-center rounded-full border border-[#D6CEBE]/30"
        role="img"
        aria-label={alt}
      >
        <svg viewBox="0 0 120 120" className="w-24 h-24 mb-3 text-[#D6CEBE]" fill="none" stroke="currentColor" strokeWidth="1.5">
          <circle cx="60" cy="60" r="54" strokeDasharray="3 3" />
          <circle cx="60" cy="60" r="44" />
          <path d="M40 72 C45 55, 75 55, 80 72" />
          <circle cx="60" cy="44" r="10" />
        </svg>
        <p className="font-serif text-lg tracking-wide">Gobar Museum Hall</p>
        <p className="text-xs text-[#D6CEBE] mt-1">Estd. 2026 · Manju Mitti</p>
      </div>
    );
  }

  return (
    <img
      src={EMBLEM_IMAGE_PATH}
      alt={alt}
      referrerPolicy="no-referrer"
      onError={() => setHasError(true)}
      className={className}
    />
  );
};

export const ArtifactPlate: React.FC<{
  plateKey: PlateKey;
  title: string;
  code?: string;
}> = ({ plateKey, title, code }) => {
  return (
    <div
      className="relative w-full h-full flex items-center justify-center bg-[#F3EFE6] overflow-hidden select-none"
      role="img"
      aria-label={`Archival specimen illustration of ${title}`}
    >
      {/* Subtle museum plate border rule */}
      <div className="absolute inset-3 border border-[#D8D0C1] pointer-events-none" />
      <div className="absolute inset-4 border border-[#E5DFD3] pointer-events-none" />

      {code && (
        <span className="absolute top-5 left-6 font-mono text-[10px] tracking-widest text-[#78716C] uppercase">
          {code}
        </span>
      )}
      <span className="absolute bottom-5 right-6 font-serif italic text-[11px] text-[#78716C]">
        Manju Mitti Folio
      </span>

      <svg
        viewBox="0 0 240 180"
        className="w-4/5 h-4/5"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {plateKey === 'diya' && (
          <g>
            {/* Warm halo */}
            <circle cx="120" cy="70" r="46" fill="#FDE68A" fillOpacity="0.32" />
            {/* Flame */}
            <path
              d="M120 42 C128 56, 131 67, 120 77 C109 67, 112 56, 120 42 Z"
              fill="#D97706"
              stroke="#78350F"
              strokeWidth="1.5"
            />
            <path
              d="M120 53 C124 61, 125 68, 120 74 C115 68, 116 61, 120 53 Z"
              fill="#FEF3C7"
            />
            {/* Wick */}
            <path d="M120 77 L120 87" stroke="#451A03" strokeWidth="2.5" strokeLinecap="round" />
            {/* Cow dung diya bowl */}
            <path
              d="M52 94 C52 126, 82 138, 120 138 C158 138, 188 126, 188 94 Z"
              fill="#8C5A3C"
              stroke="#451A03"
              strokeWidth="1.8"
            />
            <ellipse cx="120" cy="94" rx="68" ry="16" fill="#B47B56" stroke="#451A03" strokeWidth="1.8" />
            <ellipse cx="120" cy="95" rx="54" ry="10" fill="#D9A066" fillOpacity="0.65" />
            {/* Rim detail */}
            <path d="M72 114 Q120 128 168 114" stroke="#451A03" strokeWidth="1" strokeDasharray="3 4" opacity="0.55" />
            <ellipse cx="120" cy="144" rx="56" ry="5" fill="#1C1917" fillOpacity="0.08" />
          </g>
        )}

        {plateKey === 'incense' && (
          <g>
            {/* Wisp smoke */}
            <path
              d="M148 48 C142 36, 158 28, 150 18 M124 54 C118 42, 134 32, 126 20 M98 52 C92 40, 108 30, 100 18"
              stroke="#78716C"
              strokeWidth="1.3"
              strokeLinecap="round"
              strokeDasharray="2 3"
            />
            {/* Incense sticks */}
            <line x1="115" y1="120" x2="96" y2="56" stroke="#5C3A21" strokeWidth="3" strokeLinecap="round" />
            <line x1="120" y1="120" x2="122" y2="57" stroke="#451A03" strokeWidth="3" strokeLinecap="round" />
            <line x1="125" y1="120" x2="147" y2="52" stroke="#5C3A21" strokeWidth="3" strokeLinecap="round" />
            {/* Glowing tips */}
            <circle cx="96" cy="56" r="2.6" fill="#EA580C" />
            <circle cx="122" cy="57" r="2.6" fill="#EA580C" />
            <circle cx="147" cy="52" r="2.6" fill="#EA580C" />
            {/* Holder bowl */}
            <path
              d="M84 114 C84 134, 156 134, 156 114 Z"
              fill="#785138"
              stroke="#451A03"
              strokeWidth="1.8"
            />
            <ellipse cx="120" cy="114" rx="36" ry="8" fill="#D6C6B2" stroke="#451A03" strokeWidth="1.6" />
            <ellipse cx="120" cy="138" rx="44" ry="5" fill="#1C1917" fillOpacity="0.08" />
          </g>
        )}

        {plateKey === 'fertilizer' && (
          <g>
            {/* Kraft fertilizer sack */}
            <path
              d="M78 52 L162 52 L170 142 C170 146, 166 150, 160 150 L80 150 C74 150, 70 146, 70 142 Z"
              fill="#DDD2BC"
              stroke="#451A03"
              strokeWidth="1.8"
            />
            {/* Top folded cuff */}
            <path d="M76 52 L84 36 L156 36 L164 52 Z" fill="#CBBFA7" stroke="#451A03" strokeWidth="1.6" />
            <line x1="82" y1="45" x2="158" y2="45" stroke="#78350F" strokeWidth="1.2" strokeDasharray="3 3" />
            {/* Label rectangle */}
            <rect x="88" y="68" width="64" height="62" rx="2" fill="#FBF9F5" stroke="#57534E" strokeWidth="1.2" />
            {/* Sprout icon on bag */}
            <path d="M120 116 L120 92" stroke="#1B4332" strokeWidth="2" strokeLinecap="round" />
            <path d="M120 100 C110 92, 104 94, 104 102 C110 104, 116 102, 120 100 Z" fill="#2D6A4F" />
            <path d="M120 96 C130 88, 136 90, 136 98 C130 100, 124 98, 120 96 Z" fill="#1B4332" />
            <line x1="98" y1="80" x2="142" y2="80" stroke="#78716C" strokeWidth="1" />
            <line x1="102" y1="122" x2="138" y2="122" stroke="#78716C" strokeWidth="1" />
            <ellipse cx="120" cy="154" rx="54" ry="5" fill="#1C1917" fillOpacity="0.08" />
          </g>
        )}

        {plateKey === 'ganesha' && (
          <g>
            {/* Halo arch */}
            <circle cx="120" cy="90" r="52" stroke="#9A3412" strokeWidth="1" strokeDasharray="4 4" opacity="0.5" />
            {/* Lotus pedestal */}
            <path d="M72 138 C85 128, 155 128, 168 138 C156 148, 84 148, 72 138 Z" fill="#8C5A3C" stroke="#451A03" strokeWidth="1.6" />
            {/* Crown / Mukut */}
            <path d="M108 50 L120 30 L132 50 Z" fill="#B47B56" stroke="#451A03" strokeWidth="1.6" />
            {/* Head & Ears */}
            <ellipse cx="94" cy="70" rx="12" ry="18" fill="#A06B47" stroke="#451A03" strokeWidth="1.6" />
            <ellipse cx="146" cy="70" rx="12" ry="18" fill="#A06B47" stroke="#451A03" strokeWidth="1.6" />
            <circle cx="120" cy="68" r="20" fill="#B47B56" stroke="#451A03" strokeWidth="1.8" />
            {/* Trunk */}
            <path
              d="M120 72 C120 88, 134 94, 132 102 C130 108, 122 108, 120 102"
              fill="none"
              stroke="#451A03"
              strokeWidth="4.5"
              strokeLinecap="round"
            />
            {/* Torso */}
            <path
              d="M92 128 C90 102, 102 88, 120 88 C138 88, 150 102, 148 128 Z"
              fill="#A06B47"
              stroke="#451A03"
              strokeWidth="1.8"
            />
            {/* Tilak */}
            <line x1="120" y1="54" x2="120" y2="60" stroke="#9A3412" strokeWidth="2" strokeLinecap="round" />
            <ellipse cx="120" cy="149" rx="50" ry="5" fill="#1C1917" fillOpacity="0.08" />
          </g>
        )}

        {plateKey === 'woodlogs' && (
          <g>
            {/* Stacked compressed cow dung wood logs */}
            <g transform="translate(0, 8)">
              <rect x="64" y="96" width="112" height="22" rx="4" fill="#784B30" stroke="#451A03" strokeWidth="1.7" />
              <ellipse cx="64" cy="107" rx="7" ry="11" fill="#A06B47" stroke="#451A03" strokeWidth="1.7" />
              <rect x="74" y="72" width="112" height="22" rx="4" fill="#8C5A3C" stroke="#451A03" strokeWidth="1.7" />
              <ellipse cx="74" cy="83" rx="7" ry="11" fill="#B47B56" stroke="#451A03" strokeWidth="1.7" />
              <rect x="68" y="48" width="106" height="22" rx="4" fill="#683F26" stroke="#451A03" strokeWidth="1.7" />
              <ellipse cx="68" cy="59" rx="7" ry="11" fill="#9A6848" stroke="#451A03" strokeWidth="1.7" />
              {/* Jute twine wrap */}
              <path d="M126 47 L126 119 M132 47 L132 119" stroke="#D6CEBE" strokeWidth="2.5" />
            </g>
            <ellipse cx="120" cy="144" rx="64" ry="5" fill="#1C1917" fillOpacity="0.08" />
          </g>
        )}

        {plateKey === 'havancup' && (
          <g>
            <path d="M120 44 C126 54, 128 62, 120 70 C112 62, 114 54, 120 44 Z" fill="#D97706" stroke="#78350F" strokeWidth="1.4" />
            {/* Cup body */}
            <path d="M88 86 L152 86 L142 132 L98 132 Z" fill="#8C5A3C" stroke="#451A03" strokeWidth="1.8" />
            <ellipse cx="120" cy="86" rx="32" ry="8" fill="#5C3A21" stroke="#451A03" strokeWidth="1.6" />
            {/* Resin filling */}
            <ellipse cx="120" cy="86" rx="22" ry="5" fill="#D97706" fillOpacity="0.55" />
            {/* Brass plate base */}
            <ellipse cx="120" cy="134" rx="44" ry="7" fill="#D4AF37" fillOpacity="0.45" stroke="#78350F" strokeWidth="1.4" />
            <ellipse cx="120" cy="144" rx="48" ry="5" fill="#1C1917" fillOpacity="0.08" />
          </g>
        )}

        {plateKey === 'vibhuti' && (
          <g>
            {/* Ceramic vessel */}
            <path
              d="M78 88 C76 124, 96 138, 120 138 C144 138, 164 124, 162 88 Z"
              fill="#E7E0D3"
              stroke="#451A03"
              strokeWidth="1.8"
            />
            <ellipse cx="120" cy="88" rx="42" ry="11" fill="#FBF9F5" stroke="#451A03" strokeWidth="1.8" />
            {/* Mound of fine vibhuti powder */}
            <path d="M86 88 Q120 56 154 88 Z" fill="#D6D3D1" stroke="#78716C" strokeWidth="1.2" />
            <path d="M98 86 Q120 68 142 86" stroke="#A8A29E" strokeWidth="1" strokeDasharray="2 3" />
            {/* Wooden spoon */}
            <path d="M134 78 L174 52" stroke="#78350F" strokeWidth="4" strokeLinecap="round" />
            <ellipse cx="120" cy="144" rx="46" ry="5" fill="#1C1917" fillOpacity="0.08" />
          </g>
        )}

        {plateKey === 'vermicompost' && (
          <g>
            {/* Terracotta planter with healthy sapling */}
            <path d="M92 94 L148 94 L140 140 L100 140 Z" fill="#9A4E2A" stroke="#451A03" strokeWidth="1.8" />
            <rect x="86" y="84" width="68" height="12" rx="2" fill="#B45E37" stroke="#451A03" strokeWidth="1.8" />
            {/* Dark compost soil mound */}
            <path d="M92 84 Q120 72 148 84 Z" fill="#3F2E21" />
            {/* Botanical leaves */}
            <path d="M120 82 L120 42" stroke="#1B4332" strokeWidth="2.5" strokeLinecap="round" />
            <path d="M120 64 C104 54, 94 60, 96 68 C104 72, 114 68, 120 64 Z" fill="#2D6A4F" stroke="#1B4332" strokeWidth="1.2" />
            <path d="M120 58 C136 48, 146 54, 144 62 C136 66, 126 62, 120 58 Z" fill="#1B4332" stroke="#14532D" strokeWidth="1.2" />
            <path d="M120 44 C112 30, 128 30, 120 44 Z" fill="#40916C" />
            <ellipse cx="120" cy="146" rx="44" ry="5" fill="#1C1917" fillOpacity="0.08" />
          </g>
        )}
      </svg>
    </div>
  );
};
