import React, { useState } from 'react';
import { ArrowRight, Maximize2, X } from 'lucide-react';
import { SealImageWithFallback } from './ArtifactPlates';

export const HeroSection: React.FC = () => {
  const [sealModalOpen, setSealModalOpen] = useState(false);

  return (
    <section id="top" className="relative overflow-hidden border-b border-[#DDD6C7] bg-transparent">
      <div className="relative max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          {/* Left Editorial Column */}
          <div className="lg:col-span-7 flex flex-col justify-center bg-[#FBF9F5]/94 backdrop-blur-sm border border-[#DDD6C7] rounded-lg p-6 sm:p-10">
            <p className="text-xs font-medium tracking-widest uppercase text-[#57534E] mb-4">
              Established 2026 <span aria-hidden="true" className="mx-2">·</span> Tradition &amp; Innovation{' '}
              <span aria-hidden="true" className="mx-2">·</span> Curated by Manju Mitti
            </p>

            <h1
              className="font-serif font-semibold text-[#1C1917] leading-[1.08] tracking-tight mb-6 max-w-2xl"
              style={{
                fontSize: 'clamp(2.35rem, 4.2vw, 3.85rem)',
                textWrap: 'balance',
              }}
            >
              Sacred Cow Dung Craft, Curated for a Living Future
            </h1>

            <p className="text-base sm:text-lg text-[#44403C] leading-relaxed max-w-xl mb-8">
              Welcome to <strong className="font-semibold text-[#1C1917]">Gobar Museum Hall</strong> — a living
              heritage gallery and zero-waste craft house transforming indigenous cow dung into luminous diyas,
              microbial organic fertilizer, aromatic incense, biodegradable Ganesha murtis, and clean Samidha fuel logs.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#collection"
                className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-[#F7F4EE] bg-[#1B4332] hover:bg-[#143326] rounded-md transition-colors duration-150 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1B4332]"
              >
                <span>Shop Eco Products</span>
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </a>

              <a
                href="#exhibits"
                className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-[#1C1917] bg-[#FBF9F5] border border-[#C9C0B0] hover:border-[#1C1917] rounded-md transition-colors duration-150 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1B4332]"
              >
                Explore Museum Halls
              </a>
            </div>
          </div>

          {/* Right Focal Frame: Full-Clarity Official Institutional Emblem */}
          <div className="lg:col-span-5 flex">
            <div className="w-full bg-[#18221D] border border-[#2F3E36] rounded-lg p-6 sm:p-8 flex flex-col justify-between text-[#F7F4EE]">
              <div className="flex items-center justify-between gap-4 border-b border-[#2F3E36] pb-3 mb-5">
                <span className="font-mono text-xs tracking-wider uppercase text-[#D6CEBE]">
                  Official Seal · Archive 2026
                </span>
                <button
                  type="button"
                  onClick={() => setSealModalOpen(true)}
                  className="inline-flex items-center gap-1.5 text-xs font-medium text-[#D6CEBE] hover:text-white transition-colors whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D6CEBE]"
                >
                  <Maximize2 className="w-3.5 h-3.5" aria-hidden="true" />
                  <span>Inspect Seal</span>
                </button>
              </div>

              <div className="relative mx-auto w-full max-w-[330px] aspect-square rounded-full overflow-hidden bg-[#0F1713] border border-[#D6CEBE]/30 p-1.5">
                <SealImageWithFallback className="w-full h-full object-cover rounded-full" />
              </div>

              <div className="mt-5 pt-4 border-t border-[#2F3E36] flex items-center justify-between gap-4 text-xs text-[#D6CEBE]">
                <span>Manju Mitti Heritage Emblem</span>
                <span className="font-mono">gobarmuseumhall.com</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Operational Utility Ribbon */}
      <div className="relative border-t border-[#DDD6C7] bg-[#FBF9F5]">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-4 grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 text-xs sm:text-sm">
          <div className="flex flex-col">
            <span className="text-[11px] uppercase tracking-wider text-[#78716C] font-medium">Gallery Hours</span>
            <span className="font-medium text-[#1C1917] tabular-nums mt-0.5">Tue – Sun · 10:00 – 18:00 IST</span>
          </div>
          <div className="flex flex-col">
            <span className="text-[11px] uppercase tracking-wider text-[#78716C] font-medium">Hall Admission</span>
            <span className="font-medium text-[#1C1917] mt-0.5">Complimentary Entry &amp; Demos</span>
          </div>
          <div className="flex flex-col">
            <span className="text-[11px] uppercase tracking-wider text-[#78716C] font-medium">Artisan Founder</span>
            <span className="font-medium text-[#1C1917] mt-0.5">Manju Mitti Craft Collective</span>
          </div>
          <div className="flex flex-col">
            <span className="text-[11px] uppercase tracking-wider text-[#78716C] font-medium">Eco Dispatch</span>
            <span className="font-medium text-[#1C1917] tabular-nums mt-0.5">Free Shipping Above ₹999</span>
          </div>
        </div>
      </div>

      {/* Emblem Inspection Lightbox */}
      {sealModalOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/75 flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          aria-label="Gobar Museum Hall Official Emblem Inspection"
          onClick={() => setSealModalOpen(false)}
        >
          <div
            className="bg-[#FBF9F5] border border-[#DDD6C7] rounded-lg max-w-xl w-full p-6 relative"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-4 border-b border-[#DDD6C7] mb-5">
              <div>
                <h2 className="font-serif text-2xl font-semibold text-[#1C1917]">
                  Gobar Museum Hall Official Emblem
                </h2>
                <p className="text-xs text-[#57534E] mt-0.5">
                  Estd. 2026 · Tradition &amp; Innovation · Featuring Founder Manju Mitti
                </p>
              </div>
              <button
                type="button"
                onClick={() => setSealModalOpen(false)}
                aria-label="Close emblem view"
                className="w-10 h-10 inline-flex items-center justify-center rounded-md border border-[#DDD6C7] text-[#1C1917] hover:bg-[#EFEAE0] cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="aspect-square max-w-[440px] mx-auto rounded-lg overflow-hidden bg-[#18221D] p-2">
              <SealImageWithFallback className="w-full h-full object-contain rounded" />
            </div>
            <p className="text-sm text-[#44403C] mt-4 leading-relaxed">
              The official seal depicts our five foundational pillars: indigenous cow stewardship, compressed Samidha
              wood logs, hand-pressed cow dung diyas, aromatic incense sticks, organic farm fertilizer, and clay-free
              Ganesha murtis.
            </p>
          </div>
        </div>
      )}
    </section>
  );
};
